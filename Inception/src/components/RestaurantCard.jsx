const RestaurantCard = ( {title, cuisine, rating, price, img}) => {
    return <div className="restaurant-card">
            <div className="res-card-img"><img src={img}/></div>
            <div className="res-card-title">{title}</div>
            <div className="res-card-cuisine">{cuisine}</div>
            <div className="res-card-details">
                {/* <ResCardRating rating={rating}/> */}
                <div className="res-card-rating">Ratings: {rating}</div>
                <div className="res-card-price">{price}</div>
            </div>
    </div>
}

export default RestaurantCard;