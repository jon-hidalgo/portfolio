provider "aws" {
  alias   = "madrid"
  region  = "eu-south-2"
  profile = "portfolio"
}

provider "aws" {
  alias   = "virginia"
  region  = "us-east-1"
  profile = "portfolio"
}

resource "aws_s3_bucket" "portfolio" {
  provider      = aws.madrid
  bucket        = "jonhidalgo.com"
  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "portfolio" {
  provider = aws.madrid
  bucket   = aws_s3_bucket.portfolio.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "website" {
  provider = aws.madrid
  bucket   = aws_s3_bucket.portfolio.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_policy" "public_read" {
  provider = aws.madrid
  bucket   = aws_s3_bucket.portfolio.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = "*"
      Action    = "s3:GetObject"
      Resource  = "${aws_s3_bucket.portfolio.arn}/*"
    }]
  })
}

resource "aws_acm_certificate" "cert" {
  provider          = aws.virginia
  domain_name       = "jonhidalgo.com"
  validation_method = "DNS"
}

resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.portfolio.bucket_regional_domain_name
    origin_id   = "S3Origin"

    s3_origin_config {
      origin_access_identity = ""
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = ["jonhidalgo.com"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3Origin"

    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method  = "sni-only"
  }
}

resource "aws_iam_role" "github_oidc" {
  name = "github-actions-portfolio-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement : [{
      Effect = "Allow",
      Principal = {
        Federated = "arn:aws:iam::691831409819:oidc-provider/token.actions.githubusercontent.com"
      },
      Action = "sts:AssumeRoleWithWebIdentity",
      Condition = {
        StringLike = {
          "token.actions.githubusercontent.com:sub" = "repo:jon-hidalgo/portfolio:*"
        }
      }
    }]
  })
}

resource "aws_iam_role_policy" "deploy_policy" {
  role = aws_iam_role.github_oidc.name

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = ["s3:*"],
        Resource = [
          "arn:aws:s3:::jonhidalgo.com",
          "arn:aws:s3:::jonhidalgo.com/*"
        ]
      },
      {
        Effect   = "Allow",
        Action   = ["cloudfront:CreateInvalidation"],
        Resource = "*"
      }
    ]
  })
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.cdn.domain_name
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.cdn.id
}

output "acm_validation_cname" {
  value = [
    for dvo in aws_acm_certificate.cert.domain_validation_options :
    {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  ]
}


