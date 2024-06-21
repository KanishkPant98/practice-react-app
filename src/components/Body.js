import RestrantCard from "./RestrantCard";
import RES_DATA from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local state  var - Super Powerful Var

  const [listOfRestraunts, setListOfRestraunts] = useState(RES_DATA);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic
            const filteredList = listOfRestraunts.filter(
              (res) => res.avgRating > 4.5
            );
            setListOfRestraunts(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {/* Retraunt-Cards */}
        {listOfRestraunts.map((res) => {
          return <RestrantCard key={res.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
