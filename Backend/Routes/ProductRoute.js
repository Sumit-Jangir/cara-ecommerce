import express from 'express'
import { addProduct, deleteProduct, editProduct, getProductById } from '../Controller/ProductController.js';
import multer from 'multer';

const router = express.Router()

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/add',upload.single("image"),addProduct);
router.patch('/edit/:id',editProduct);
router.delete('/delete/:id',deleteProduct);
router.get('/:id',getProductById);


export default router;