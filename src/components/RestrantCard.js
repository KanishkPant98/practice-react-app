import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext"

const RestrantCard = (props) => {
    const { resName, cuisines, avgRating, deliveryTime, costForTwo, img_id } =
      props.resData;
    const {loggedInUser} = useContext(UserContext);
    console.log({UserContext})
    return (
      <div className="p-4 mr-4 w-[250px] bg-gray-50 hover:bg-gray-200">
        <div className="res-logo-container">
          <img
            className="rounded-lg"
            src={CDN_URL + img_id}
          ></img>
        </div>
        <h3 className="font-bold px-4 py-4 text-lg">{resName}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating: {avgRating}</h4>
        <h4>Delivery Time: {deliveryTime} minutes</h4>
        <h4>{loggedInUser}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
  //Higher Order Component
  export const withPromotedLabel = (RestrantCard)=>{
    return (props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestrantCard {...props} />
        </div>
      )
    }
  }
  export default RestrantCard;