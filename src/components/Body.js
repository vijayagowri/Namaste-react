import RestoComponent from "./Restaurant";
import { useEffect, useState } from "react";
import ShimmerCards from "../utilis/ShimmerCards";
import { Link } from "react-router-dom";

const Body = () => {
  const displatFlex = { display: "flex", flexWrap: "wrap" };
  let [allRestaurants, setAllRestaurants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
useEffect(()=>{
  getAllRestaurants();
},[])

   async function getAllRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data?.json();
    restoData = json?.data?.cards[2]?.data?.data?.cards; 
    setAllRestaurants(restoData);
    setFilteredRestaurants(restoData)
  }

  return (allRestaurants?.length === 0)?<ShimmerCards />:(
    <>
      <div className="button" style={{ margin: "10px" }}>
        <button
          className="btn-style"
          onClick={() => {
            let filteredList = allRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          type="search"
          className="search-style"
          placeholder="Search"
          value={searchText}
          onChange={(ev) => {
            let key = ev.target.value;
            setSearchText(key);
            if (key) {
              let searchedList = allRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(key.toLowerCase())
              );
              setFilteredRestaurants(searchedList);
            } else {
              setFilteredRestaurants(allRestaurants);
            }
          }}
        />
        <span>
          You searched <b>{searchText}</b>
        </span>
      </div>

      {/* resto card */}
      {filteredRestaurants?.length>0 ?
      (<div style={displatFlex} className="restro-container">
        {filteredRestaurants.map((restaurant) => (
          // resto card
          <Link to={'restaurant/'+ restaurant.data.id} key={restaurant.data.id} className="resto-card">
          <RestoComponent key={restaurant.data.id} resObj={restaurant} /></Link>
        ))}
      </div>):<h1>no results found</h1>
    }
    </>
  );
};

export default Body;
