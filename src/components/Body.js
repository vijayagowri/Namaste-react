import RestoComponent from "./Restaurant";
import { restroList } from "../Utilis/mockData";
import { useState } from "react";

const Body = () => {
  const displatFlex = { display: "flex", flexWrap: "wrap" };
  let deepResto = JSON.parse(JSON.stringify(restroList));
  let [restroListCopy, setrestroListCopy] = useState(restroList);
  console.log(restroListCopy, "start");
  return (
    <>
      <div className="button" style={{ margin: "10px" }}>
        <button
          className="btn-style"
          onClick={() => {
            restroListCopy = deepResto;
            let filteredList = restroListCopy.filter(
              (res) => res.data.avgRating > 4
            );
            setrestroListCopy(filteredList);
            console.log(restroListCopy, "filter");
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          type="search"
          className="search-style"
          placeholder="Search"
          onKeyUp={(ev) => {
            let key = ev.target.value;
            restroListCopy = deepResto;
            if (key) {
              let searchedList = restroListCopy.filter((res) =>
                res.data.name.toLowerCase().match(key.toLowerCase())
              );
              console.log(searchedList, "searchedList");
              console.log(restroListCopy, "beforeserach");
              setrestroListCopy(searchedList);
              console.log(restroListCopy, "afterserach");
            } else {
              setrestroListCopy(restroListCopy);
            }
          }}
        />
      </div>

      {/* resto card */}
      <div style={displatFlex} className="restro-container">
        {restroListCopy.map((restaurant) => (
          // resto card
          <RestoComponent key={restaurant.data.id} resObj={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
