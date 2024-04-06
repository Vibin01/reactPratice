import RestaurantCard from "./RestaurantCard";
// import resApi from "../utils/api";
import { useState,useEffect } from "react";

const Body = () => {
  //Local state varibale
  let [listOf, setListOf] = useState([]);
  let [filterRestaurant,setFilterRestaurant]=useState([]);

  let[searchText,setSearchText]=useState("")
  // const [filteredItem, setFilteredItem] = useState([])
  useEffect(()=>{
    fetchData();
  },[]);

  let fetchData=async ()=>{
    try{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.1782892&lng=77.4423497&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,"fjhfuhfuehufyeyufg")
    setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOf(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(listOf)
    }
    catch(error){
      console.error("Error is :",error)
    }
  }


  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button className="search-btn" onClick={()=>{
           let filterRestaurant= listOf.filter((res)=>res?.info?.name?.toLowerCase().includes(searchText?.toLowerCase()));
           setFilterRestaurant(filterRestaurant)
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            
            let filterList = listOf?.filter((res) => res?.info?.avgRating > 4.5);
            setListOf(filterList)
            console.log(listOf);
          }} 
        >
          Top Rated Restaurants
        </button>
      </div> 
      <div className="res-container">
        {filterRestaurant?.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
