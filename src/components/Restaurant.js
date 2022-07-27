const Restaurant = ({ data }) => {
  return (
    <div className="container">
      <div className="section-center">
        <div className="restaurant-item">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
      
          <img src={data.restaurant.picture} alt={data.restaurant.name} />
  
      </div>
    </div>
  );
};

export default Restaurant;
