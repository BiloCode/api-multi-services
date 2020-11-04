import multer from 'multer';
import path from 'path';

const configurationStorage = (dest:string) => {
  return (
    multer.diskStorage({
      destination : dest,
      filename : (req,file,callback) => {
        callback(null,file.originalname);
      }
    })
  )
}

const specialtyRoute = path.join(__dirname,'../Files/images/specialty/')
const userRoute = path.join(__dirname,'../Files/images/user/')

const specialtyConfig = multer({
  storage : configurationStorage(specialtyRoute)
})

const userConfig = multer({
  storage : configurationStorage(userRoute)
})

export {
  specialtyConfig,
  userConfig
};