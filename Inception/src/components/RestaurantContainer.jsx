import RestaurantCard from "./RestaurantCard"
// import resData from "../utils/data"
import { CDN_URL } from "../utils/constants"
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

const RestaurantContainer = () => {

    const [restaurantsToRender, setRestaurantsToRender] = useState([])
    console.log("Body is rendered")

    useEffect (()=>{
        fetchData()
    }, []);

    const fetchData = async () => {

        try {
            const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9587847&lng=77.6999044&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            if (!data.ok) {
                throw new Error ("Unable to Fetch")
            }

            const json = await data?.json();
            console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestaurantsToRender(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        } catch (error) {
            console.log(error)
        }

        // const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9587847&lng=77.6999044&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        // const json = await data?.json();
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setRestaurantsToRender(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
        
    }

    //conditional Rendering
    return restaurantsToRender?.length === 0 ? 
        (<Shimmer />) : 
        (<div className="restaurant-container">
            <div className="filter-btn-container">
                <button className="filter-btn-test" 
                onClick={()=>{
                    let filteredData = restaurantsToRender?.filter((item)=> item.info.avgRating > 4.2)
                    setRestaurantsToRender(filteredData)
                }}
                > 
                Filter Top Restaurants
                </button>
            </div>
            {restaurantsToRender?.map((restaurant)=>(
            <RestaurantCard 
                key={restaurant?.info?.id} 
                title={restaurant?.info?.name} 
                cuisine= {restaurant?.info?.cuisines.join(", ")} 
                rating= {restaurant?.info?.avgRating} 
                price= {restaurant?.info?.costForTwo} 
                img= {CDN_URL +  restaurant?.info?.cloudinaryImageId}
            />
            ))}
        </div>
        )
}

export default RestaurantContainer;