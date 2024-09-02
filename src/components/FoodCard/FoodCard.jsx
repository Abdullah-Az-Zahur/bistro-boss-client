const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Item" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-2 bg-slate-900 text-white">${price}</p>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
