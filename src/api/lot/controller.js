import Lot from '../../models/Lot'
import Slot from '../../models/Slot'


const createLot = async (req, res, next) => {
  
  try {
    const capacity = req.body.capacity;
    const lot = new Lot({
      capacity
    });

    const result = await lot.save();

    const slots = [];

    for (let i = 1; i <= capacity; i++) {
      slots.push({
        slot_no: i,
        lot_id: result.lot_id,
        is_empty: true
      });
    }
    await Slot.insertMany(slots); //  adding slots to database behind the scenes

    return res.status(200).json({
      result
    });
  } catch (e) {
    // console.log(e);
    next(e);
  }
}

export default createLot