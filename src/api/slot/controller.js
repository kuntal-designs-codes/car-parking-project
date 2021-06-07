import Slot from '../../models/Slot';

const parkVehicle = async (req, res, next) => {
  try {
    const license = req.body.licence_no;
    // console.log(license);
    const result =  await Slot.findOne({ licence_no: license });

    if(!result) {
      
      const nearest = await Slot.findOne({ is_empty: true }, null, {
        sort: { lot_id: 1 }
      });

      if (!nearest) throw new Error("no free slots found");

      const updated = await Slot.findOneAndUpdate(
        { _id: nearest._id },
        {
          entry: new Date(),
          is_empty: false,
          licence_no: license
        },
        { new: true } //returns updated data
      );

      return res.status(200).json({
        result: updated
      });

    } else {
      return res.status(201).json({
        result: "the car is already in parked"
      });
    }

  } catch (e) {
    // console.log(e);
    next(e);
  }
}

const unparkVehicle = async (req, res, next) => {
  try {
    const license = req.body.licence_no;
    // console.log(license);
    const slot = await Slot.findOne({ licence_no: license });
    // console.log(slot);
    if (!slot) throw new Error("There are no cars parked by this license");
    const result = await Slot.findOneAndUpdate(
      { _id: slot._id },
      { is_empty: true, licence_no: null, entry: null },
      { new: true } //**if we dont write this we wont be able to store the updated result* */
    );
    // console.log(result);
    const { slot_no } = slot;
    // const { licence_no } = result;
    return res.status(200).json({
      license,
      slot_no
    });
  } catch (e) {
    // console.log(e);
    next(e);
  }
}

const slotandcarInfo = async (req, res, next) => {
  try {
    const { licence_no, slot_no } = req.body;
    // console.log(`C: ${licence_no} S: ${slot_no}`)
    // console.log(license);

    const slot = licence_no ? await Slot.find({ licence_no: licence_no }, { licence_no: 1, slot_no: 1, _id: 0 }) :
    await Slot.find({ slot_no: slot_no }, { licence_no: 1, slot_no: 1, _id: 0 });
    
    return res.status(200).json({
      slot
    });
  } catch (e) {
    // console.log(e);
    next(e);
  }
}

export default {
  parkVehicle,
  unparkVehicle,
  slotandcarInfo
}