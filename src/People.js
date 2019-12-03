import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
export default function People() {
    useEffect(() =>{
        fetchPeople();
    },[] );
    const [trips, setTrips] = useState([]);
    // const [tripdata, setTripdata] = useState([]);
    const fetchPeople =  async () => {
        const data = await fetch("https://food1.railyatri.in/redbus/get-available-trips.json?source=1005692&destination=1005922&doj=03-12-2019&device_type_id=6&is_new_reduce_basefare=1&user_id=-1575319450");
        const tripData = await data.json();
        console.log(tripData);
        // setTripdata(tripData);
        setTrips(tripData.availableTrips)
    }
    return(
    <div>
        <h1>People List</h1>
        <ul>
        {trips.map(trip => (
            <Link key={trip.id} to={`/trip/${trip.id}`}>
                <li >
                    {trip.travels}
                </li>
            </Link>
            ))
        }
        </ul>
    </div>
    )
}