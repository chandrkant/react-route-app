import React, {useState, useEffect} from 'react'
 export default function Trip({ match }){
    useEffect(() =>{
        fetchTrip();
    },[]);

    const [trip, setTrip] = useState({});
    const [pickups, setPickups] = useState([]);
    const [dropoffs, setDropoffs] = useState([])

     const fetchTrip =  async () => {
        const data = await fetch(`https://food1.railyatri.in/redbus/get-trip-details?trip_id=${match.params.id}`)
        const trip = await data.json();
        console.log(trip);
        setTrip(trip);
        setPickups(trip.pickups);
        setDropoffs(trip.dropoffs);
    }

    return(
        <div>
            <h1>Trip Details</h1>
            {pickups.map(pikup => (
                <p key={pikup.PickupCode}>{pikup.Address}</p>
            ))}
            {dropoffs.map(drop => (
                <p key={drop.DropoffCode}>{drop.DropoffName}</p>
            ))}
        </div>
    )
}