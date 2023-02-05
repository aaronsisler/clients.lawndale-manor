# clients.lawndalemanor

## Updates needed

### Repo updates

Do a global find on the repo for the following: `REPLACE_ME__`. This should speed up the below process.

1. Update config.js with info for online application.
1. package.json - deploy:beta/prod scripts
1. Update GHA so that the deploy works

## Creating S3 and CloudFront

### Creating new S3 bucket

1. Create new bucket

   - Public Access all the boxes

1. Properties tab

   - Enable Static Hosting
   - Index and Error document

     ```
     index.html
     ```

1. Permissions tab

   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         {
               "Effect": "Allow",
               "Principal": "*",
               "Action": "s3:GetObject",
               "Resource": "arn:aws:s3:::beta.client-domain-name.com/*"
         }
      ]
   }
   ```

### Creating Cloudfront distribution

1. Make sure ACM Certificate has client-domain-name.com AND \*.client-domain-name.com
1. Origin is the URL from S3 static domain
1. Viewer -> Viewer protocol policy -> Redirect HTTP to HTTPS
1. Alternate domain name (CNAME) needs to be client-name.com
1. Custom SSL certificate needs to have the ACM Certificate that has boht base nad \*.client-domain-name.com
1. Descritpion at the bottom will have the client-domain-name.com or beta.client-domain-name.com
