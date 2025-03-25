import { useState } from "react";
import ItemList from "./ItemList";
const RestrauntCategory = ({data,showItems,setShowIndex})=>{
    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50">
                <div onClick={()=>setShowIndex()} className="flex justify-between cursor-pointer">
                    <span className="font-bold">{data?.title} ({data?.itemCards?.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList items={data?.itemCards}/>}
            </div>
        </div>
    )
}
export default RestrauntCategory