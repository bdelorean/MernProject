import express from 'express'

import {getAllDishes,createDish,deleteDish} from '../Controllers/menuController.js'

const router = express.Router();

router.get('/', getAllDishes)

router.post('/', createDish)

router.delete('/:id', deleteDish)

export default router;