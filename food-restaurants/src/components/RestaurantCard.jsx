const RestaurantCard =(props)=>{
    const {resData}=props;
    let {name,avgRating,cuisines,cloudinaryImageId}=resData?.info
    
console.log(props.resData?.info,"jjjjjjjj")
    return (
      <div className='res-card'>
        <img className='res-img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } alt=''/>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
        
      </div>
    ) 
  }
  export default RestaurantCard;