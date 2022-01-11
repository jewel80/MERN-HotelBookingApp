import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Room from '../components/Room';

function Homescreen() {

    const [rooms, setRooms] = useState([])
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

   

    return (
        <div className="container">
           <div className='row justify-content-center mt-5'>
           {loading ? (<h1>Loading...</h1>) : error? (<h1>Error...</h1>) : (rooms.map( room =>{
                return <div className='col-md-9 mt-2'>
                    <Room room={room}/>
                </div>
            }))}
           </div>
        </div>
    )
}

export default Homescreen
