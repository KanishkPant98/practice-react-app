import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";

import Shimmer from "./Shimmer";
//Since we only went to call use effect on initial render hemnce we are passing empty arrray as depedenct array
const RestrauntMenu = () => {
  const {resId} = useParams();
  const restrauntInfo = useRestrauntMenu(resId);
  const resName = restrauntInfo?.data.cards[2]?.card?.card?.info?.name;
  const resMenu = restrauntInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(card=>card?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
  const [showIndex,setShowIndex] = useState(null);
  return restrauntInfo == null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="text-2xl mt-6 mb-6 font-bold">{resName}</h1>
      <ul>
        {resMenu.map((menuItem,index) => {
          return (
            <RestrauntCategory key={menuItem?.card?.card?.title} data={menuItem?.card?.card} showItems={(index == showIndex) ? true : false} setShowIndex={()=>setShowIndex(index)}/>
          );
        })}
      </ul>
    </div>
  );
};
export default RestrauntMenu;

