import express from 'express'
import { getAddress, setAddress } from '../Controller/AddressController.js';

const route = express.Router();

route.post('/setAddress',setAddress)
route.get('/getAddress/:userId',getAddress)

export default route;