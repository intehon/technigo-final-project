// import express from 'express'
// import mongoose from 'mongoose'
// import multer from 'multer'

// const router = express.Router()


// const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project"
// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.Promise = Promise 


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'public/')
//     },
//     filename: (req, file, cb) => {
//       const fileName = file.originalname.toLowerCase().split(' ').join('-');
//       cb(null, uuid() + '-' + fileName)
//     },
//   })
  

// const upload = multer({ 
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == 'image/png' || 'application/pdf' || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//           cb(null, true)
//      } else {
//         cb(null, false)
//         return cb(new Error('Only .png, .jpg, .jpeg and .pdf format allowed!'))
//       }
//     }
//   })

// // endpoint for file uploads

// router.post('/files', upload.single('file', 'image'), async (req, res) => {
//     try { 
//         res.json({ file: req.file.path, fileId: req.file.filename})
//     } catch (error) {
//       res.status(400).json({ response: error, success: false })
//     }
//   })
  
//   // endpoint to get menus

// // router.get('/files', async (req, res) => {
// //   const files = await files.find({contentType: "application/pdf"}).sort({ name: 1 })
// //   res.status(200).json({ response: users, success: true })
// // })

// export default fileRoute