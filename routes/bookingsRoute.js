const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");
const Booking = require("../models/booking")
const Room = require("../models/room")

router.post("/bookroom", async (req, res) => {
  const {
    room,
    userid,
    fromdate,
    todate,
    totalDays,
    totalAmount,
  } = req.body;

  try {
    const newbooking = new Booking({
      room: room.name,
      roomid: room._id,
      userid,
      fromdate: moment(fromdate).format("DD-MM-YYYY"),
      todate: moment(todate).format("DD-MM-YYYY"),
      totalDays,
      totalAmount,
      transactionId: '1334'
    })

    const booking = await newbooking.save();
    res.send('Room Booked Successfully')

    const roomtemp = await Room.findOne({
      _id: room._id
    });

    roomtemp.currentbookings.push({
      bookingid: booking._id,
      fromdate: moment(fromdate).format("DD-MM-YYYY"),
      todate: moment(todate).format("DD-MM-YYYY"),
      userid: userid._id,
      status: 'booked'
    })

    await roomtemp.save();

  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error
    });
  }

})





module.exports = router;