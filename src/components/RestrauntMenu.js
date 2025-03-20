import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

import Shimmer from "./Shimmer";
//Since we only went to call use effect on initial render hemnce we are passing empty arrray as depedenct array
const RestrauntMenu = () => {
  const {resId} = useParams();
  const restrauntInfo = useRestrauntMenu(resId);
  const resName = restrauntInfo?.data.cards[2]?.card?.card?.info?.name;
  const resMenu = restrauntInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(item=>item.card.info)
  return restrauntInfo == null ? (
    <Shimmer />
  ) : (
    <div className="restraunt-info-container">
      <h1>{resName}</h1>
      <h2>Menu</h2>
      <ul>
        {resMenu.map((menuItem) => {
          return (
            <li key={menuItem.id}>
              {menuItem.name} || Rs. {menuItem.price / 100 || "-"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestrauntMenu;

