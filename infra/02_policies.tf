resource "aws_s3_bucket_policy" "public_read" {
  provider = aws.madrid
  bucket   = "jonhidalgo.com"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "arn:aws:s3:::jonhidalgo.com/*"
      }
    ]
  })
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

