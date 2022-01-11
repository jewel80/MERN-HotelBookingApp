import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/styles.css"; // main style file
import "antd/dist/antd.css"; // theme css file
import { Calendar } from "react-date-range";
// import { DateRangePicker } from "react-date-range";
import moment from "moment";

import axios from "axios";
import Loader from "../components/Loader";
import Room from "../components/Room";
import { DatePicker, Space } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const { RangePicker } = DatePicker;

function Homescreen() {

    const [rooms, setRooms] = useState([])
    const [fromdate, setfromdate] = useState('');
    const [todate, settodate] = useState('')
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    
    useEffect(async() => {
        
        try {
            setLoading(true);
            const data = (await axios.get('/api/rooms/getallrooms')).data

            setRooms(data)
            setLoading(false);
            
        } catch (error) {
            setError(true)
            console.log(error)
            setError(false)
        }
    }, [])

    function filterByDate(dates) {
        setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
        settodate(moment(dates[1]).format('DD-MM-YYYY'))
        
        // var temp=[]
        // for (var room of duplicatehotes) {
        //   var availability = false;
          
        //   for (var booking of room.currentbookings) {
            
        //     if(room.currentbookings.length)
        //     {
        //       if (
        //         !moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate) &&
        //         !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate)
        //       ) {
        //         if (
        //           moment(dates[0]).format('DD-MM-YYYY') !== booking.fromdate &&
        //           moment(dates[0]).format('DD-MM-YYYY') !== booking.todate &&
        //           moment(dates[1]).format('DD-MM-YYYY') !== booking.fromdate &&
        //           moment(dates[1]).format('DD-MM-YYYY') !== booking.todate
        //         ) {
        //           availability = true;
        //         }
        //       }
        //     }
            
            
        //   }
        //   if(availability || room.currentbookings.length==0) 
        //   {
        //     temp.push(room)
        //   }
        //   sethotels(temp)
        // }
        
      }

    return (
        <div className="mt-5">
          <div className="container">
            <div className="row bs p-3 m-5">
              <div className="col-md-4">
              <RangePicker style={{ height: "38px" }} onChange={filterByDate} format='DD-MM-YYYY' className='m-2'/>
              </div>
    
              
              
            </div>
          </div>
    
          <div className='row justify-content-center mt-5'>
           {loading ? (<h1>Loading...</h1>) : error? (<h1>Error...</h1>) : (rooms.map( room =>{
                return <div className='col-md-9 mt-2'>
                    <Room room={room} fromdate={fromdate} todate={todate}/>
                </div>
            }))}
           </div>
        </div>
      );

    // return (
    //     <div className="container">
    //        <div className='row justify-content-center mt-5'>
    //        {loading ? (<h1>Loading...</h1>) : error? (<h1>Error...</h1>) : (rooms.map( room =>{
    //             return <div className='col-md-9 mt-2'>
    //                 <Room room={room}/>
    //             </div>
    //         }))}
    //        </div>
    //     </div>
    // )
}

export default Homescreen
