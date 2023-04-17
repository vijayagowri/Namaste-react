import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

const RestaurantMenu = ()=>{
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{
        getRestaurantMenu();
    }, [])

    async function getRestaurantMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+id+"&submitAction=ENTER");
        json = await data.json();
        console.log(json);
    }

    return(
        <>
        <h1>dfdf</h1>
        <h1><Link to="/" style={{float:'right'}}>Back </Link></h1>
        </>
    )
}
export default RestaurantMenu;