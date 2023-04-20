import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL, RESTAURANT_IMAGES_URL } from "../constants";

const useRestaurantInfo = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RESTAURANT_MENU_URL + id);
    json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant;
};
export default useRestaurantInfo;
