import fs from 'fs';

class RemoveUserImage {
  public exec = async (imagePath) => {
    return new Promise((resolve, reject) => {
      fs.unlink(imagePath, err => {
        if(err){
          console.log(err);
          reject(false);
        }

        resolve(true);
      })
    });
  }
}

export default RemoveUserImage;