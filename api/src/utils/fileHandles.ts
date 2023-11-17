import AWS from "aws-sdk";
import fs from 'fs';

AWS.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

export interface Params {
  Bucket: string;
  Key: string;
  Body: Buffer;
  ACL?: string;
}

export const uploadFileToS3 = (params: Params) => {
  return new Promise((resolve, reject) => {
    s3.upload(
      params,
      (err: Error | null, data: AWS.S3.ManagedUpload.SendData | undefined) => {
        if (err) {
          console.error("Error uploading file:", err);
          reject(err);
        } else if (data) {
          console.log("File uploaded successfully.");
          console.log(data.Location);
          resolve(data.Location);
        }
      }
    );
  });
};

export const deleteFileFromServer = (path : string) => {
  fs.unlink(path, (err) => console.log(err));
}

