import express from 'express'
import controller from './controller'

// we might need to access all the routing params from parent as well,
// so the better practice is to have mergeParams: true
const router = express.Router({ mergeParams: true });

let { parkVehicle, unparkVehicle, slotandcarInfo } = controller;

router.post("/park", parkVehicle);
router.post("/unpark", unparkVehicle);
router.post("/slotandcarinfo", slotandcarInfo);

export default router;

