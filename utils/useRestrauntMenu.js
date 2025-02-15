import { useEffect,useState } from "react";
import { MENU_API } from "./constants";
const useRestrauantMenu=(rid)=>{
  const[resInfo,setResInfo]=useState(null);
  useEffect(()=>{
  fetchMenu();
  },[]);
  const fetchMenu=async()=>{
    const data= await fetch(MENU_API+rid);
    const json =await data.json();

    console.log(json);
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestrauantMenu;