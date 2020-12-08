import fs from 'fs';

class UploadImageInBase64 {
  public exec = (imageBase64 : string, imagePath : string) : Promise<boolean> => {
    //const data = imageBase64.split(',')[1];
    
    return new Promise((resolve, reject) => {
      fs.writeFile(imagePath, imageBase64,'base64', (err) => {
        if(err){
          console.log(err);
          reject(false);
        }
          
        resolve(true);
      });
    });
  }
}

export default UploadImageInBase64;