import { CDN_URL } from "../utils/constants";
import {addItem} from "..//utils/cartSlice"
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    dispatch(addItem(item))
  }
  return (
    <div>
      {items?.map((item) => (
        <div
          className="p-2 m-2 border-b-2 border-gray-200 text-left"
          key={item?.card?.info?.id}
        >
          <div className="flex">
            <div className="py-2 mx-4 w-9/12">
              <span className="font-bold">{item?.card?.info?.name} ₹</span>
              <span>
                {item?.card?.info?.price || item?.card?.info?.defaultPrice}
              </span>
              <p>{item?.card?.info?.description}</p>
            </div>
            <div className="p-4 w-3/12">
              <div className="absolute">
                <button className="bg-black text-white p-2 rounded-xl" onClick={(event)=>handleAddItem(item)}>Add ﹢</button>
              </div>
              <img src={CDN_URL + item?.card?.info?.imageId}></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
