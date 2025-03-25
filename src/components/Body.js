import RestrantCard, { withPromotedLabel } from "./RestrantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local state  var - Super Powerful Var
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestrantCardPromoted = withPromotedLabel(RestrantCard);
  const fetchData = async () => {
    let reqData = [];
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    json.data.cards[1]?.["card"]?.["card"]?.["gridElements"]?.[
      "infoWithStyle"
    ]?.["restaurants"]?.map((res) => {
      let obj = {};
      if (res.info.name != "Faasos - Wraps, Rolls & Shawarma") {
        obj["id"] = res.info.id;
        obj["resName"] = res.info.name;
        obj["cuisines"] = res.info.cuisines;
        obj["avgRating"] = res.info.avgRating;
        obj["deliveryTime"] = res.info.sla.deliveryTime;
        obj["costForTwo"] = res.info.costForTwo;
        obj["img_id"] = res.info.cloudinaryImageId;
        reqData.push(obj);
      }
    });
    setListOfRestraunts(reqData);
    setFilteredRestraunt(reqData);
  };
  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }
  return listOfRestraunts.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      <div className="flex">
        <input
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
        ></input>
        <button
          className="px-4 py-2  bg-green-100 m-4 rounder-lg"
          onClick={() => {
            const searchTextToLowerCase = searchText.toLowerCase();
            const filteredList = listOfRestraunts.filter((res) =>
              res.resName?.toLowerCase()?.includes(searchTextToLowerCase)
            );
            setFilteredRestraunt(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-gray-100 m-4 rounder-lg"
          onClick={() => {
            //Filter logic
            const filteredList = listOfRestraunts.filter(
              (res) => res.avgRating > 4.5
            );
            setFilteredRestraunt(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
        <button
          className="px-4 py-2 bg-gray-100 m-4 rounder-lg"
          onClick={() => setFilteredRestraunt(listOfRestraunts)}
        >
          Reset List
        </button>
        <div className="search m-4 p-4 flex">
          <label className="mx-4">User Name:</label>
          <input
            className="border border-solid border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap-reverse">
        {/* Retraunt-Cards */}
        {filteredRestraunt.map((res) => {
          return (
            <Link key={res.id} to={"/restraunt/" + res.id}>
              {res?.deliveryTime < 30 ? (
                <RestrantCardPromoted resData={res} />
              ) : (
                <RestrantCard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
