import { useEffect, useState } from "react"
import { RES_INFO } from "./constants";
const useRestrauntMenu = (restrauntId)=>{
    const resId = restrauntId;
    const [resInfo,setResInfo] = useState(null)
    useEffect(()=>{
        fetchMenu(resId);
    },[])

    const fetchMenu = async () => {
        const data = await fetch(
            RES_INFO + resId
        );
        const json = await data.json();
        setResInfo(json);
      };
    return resInfo
}
export default useRestrauntMenu;

