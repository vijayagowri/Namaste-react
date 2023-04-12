import { RESTAURANT_IMAGES_URL } from "../Utilis/constants";

const RestoComponent = (props)=>{
    const {resObj} = props; 
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = resObj.data;
    return (
           <div className="resto-card">
           <img alt="" src={ RESTAURANT_IMAGES_URL + cloudinaryImageId }/> 
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime}</h4>
            </div> 
    )
}

export default RestoComponent;