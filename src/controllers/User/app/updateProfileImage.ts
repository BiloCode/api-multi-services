import { Request, Response } from "express";
import { join } from 'path';
import RemoveUserImage from "../../../application/features/RemoveUserImage";

import UploadImageInBase64 from "../../../application/features/UploadImageInBase64";
import isProfileImageExists from "../../../application/features/User/IsProfileImageExists";
import UserUpdateProfileImage from "../../../application/features/User/UserUpdateProfileImage";

export default async (req : Request , res : Response) => {
  try {
    const { imageFormat , imageName , userId } = req.body;
    const userProfileImage = await new isProfileImageExists().exec(userId);
    
    if(userProfileImage instanceof Error) {
      res.status(500).json({ error : 'Ocurrio un error.' });
    }

    if(userProfileImage !== '') {
      await new RemoveUserImage().exec(userProfileImage);
    }
    
    const basePath = join(__dirname, '../../../Files/images/user');
    const imagePath = join(basePath, '/', imageName);

    //Subir Imagen
    const uploadImage = await new UploadImageInBase64().exec(imageFormat, imagePath);
    if(uploadImage) {
      //Actualizar base de datos del usuario
      const isUpdateUserData = await new UserUpdateProfileImage().exec(userId, imagePath);
      if(!isUpdateUserData) {
        await new RemoveUserImage().exec(imagePath);
        res.status(200).json({ upload : false });
      }

      res.status(200).json({ upload : true });
    }

  }catch(e){
    console.log(e);
    res.status(500).json({ error : e.message });
  }
}