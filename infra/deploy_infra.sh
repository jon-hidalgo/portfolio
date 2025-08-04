#!/bin/bash

set -e  # detener si hay errores

echo "🧼 Formateando Terraform..."
terraform fmt

echo "📦 Inicializando Terraform..."
terraform init

echo "🔍 Fase 1: Previendo recursos base (S3, Website, ACM, CloudFront)..."
terraform plan \
  -target=aws_s3_bucket.portfolio \
  -target=aws_s3_bucket_public_access_block.portfolio \
  -target=aws_s3_bucket_website_configuration.website \
  -target=aws_acm_certificate.cert \
  -target=aws_cloudfront_distribution.cdn

echo
read -p "¿Aplicar fase 1? (yes/no): " confirm1
if [ "$confirm1" != "yes" ]; then
  echo "❌ Fase 1 cancelada."
  exit 1
fi

echo "🚀 Aplicando fase 1..."
terraform apply -auto-approve \
  -target=aws_s3_bucket.portfolio \
  -target=aws_s3_bucket_public_access_block.portfolio \
  -target=aws_s3_bucket_website_configuration.website \
  -target=aws_acm_certificate.cert \
  -target=aws_cloudfront_distribution.cdn

echo "⏳ Espera a que CloudFront y ACM estén listos y añade los CNAME en Namecheap si no lo hiciste aún."
read -p "Presiona ENTER cuando hayas terminado para continuar a la fase 2..."

echo "🔍 Fase 2: Aplicando políticas IAM y bucket policy..."
terraform plan \

