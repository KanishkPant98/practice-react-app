import { CDN_URL } from "../utils/constants";
const RestrantCard = (props) => {
    const { resName, cuisines, avgRating, deliveryTime, costForTwo, img_id } =
      props.resData;
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
        <h4>{costForTwo}</h4>
      </div>
    );
  };
  export default RestrantCard;