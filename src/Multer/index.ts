import multer from 'multer';
import path from 'path';

let storage_specialty = multer.diskStorage({
  destination : path.join(__dirname,'../Files/images/specialty'),
  filename : (req,file,cb)=>{
    cb(null,file.originalName)
  }
})

const config = {
  user : multer({
    dest : path.join(__dirname,'../Files/images/user')
  }).single('image'),
  specialty : multer({
    storage : storage_specialty,
    dest : path.join(__dirname,'../Files/images/specialty')
  }).single('image')
}

export default config;