import React, {useState, useEffect} from 'react'
 export default function Trip({ match }){
    useEffect(() =>{
        fetchTrip();
    },[match]);

    const [trip, setTrip] = useState({});

    const fetchTrip =  async () => {
        const data = await fetch(`https://food1.railyatri.in/redbus/get-trip-details?trip_id=${match.params.id}`)
        const trip = await data.json();
        console.log(trip);
        setTrip(trip)
    }

    return(
        <div>
            <h1>Trip Details</h1>
        </div>
    )
}