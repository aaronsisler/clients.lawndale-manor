# clients.lawndalemanor

## Updates needed

### Repo updates

Do a global find on the repo for the following: `REPLACE_ME__`. This should speed up the below process.

1. Update config.js with info for online application.
1. package.json - deploy:beta/prod scripts
1. Update GHA so that the deploy works

## Creating S3, ACM, CloudFront, and Route 53

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

   - Bucket Policy

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

### Create ACM Certificate

1. Make sure ACM Certificate has:
   - client-domain-name.com
   - \*.client-domain-name.com
1. Request the DNS based validation
1. This will need to be Verified (not Pending validation) before Cloudfront can be completed

### Creating Cloudfront distribution

**This is dependent on the above ACM Certificate step.**

1. Origin is the URL from S3 static domain
   - S3 -> Properties -> Static Website Hosting -> Copy that URL
1. Viewer -> Viewer protocol policy -> Redirect HTTP to HTTPS
1. Settings
   - Price Class
     - Use only North America and Europe
   - Alternate domain name (CNAME)
     - Needs to be client-name.com or beta.client-name.com
   - Custom SSL certificate
     - Needs to have the ACM Certificate that has both base and \*.client-domain-name.com
   - Description
     - At the bottom.
     - Will have the client-domain-name.com or beta.client-domain-name.com

### Create Route 53 records

**This is dependent on the above CloudFront distribution step.**

1. Add in a record for beta.client-domain-name.com
   - Add `beta` in the Record name field
   - Click the `Alias` toggle
   - Route traffic to `Alias to CloudFront distribution`
   - Select the correct CloudFront distribution
1. Add in a record for client-domain-name.com
