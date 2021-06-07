import express from 'express'
import createLot from './controller';

import creatLotController from './controller'
// we might need to access all the routing params from parent as well,
// so the better practice is to have mergeParams: true

const router = express.Router({ mergeParams: true });

router.post('/', createLot);

export default router;