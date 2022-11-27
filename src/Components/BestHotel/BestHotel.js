const BestHotel = (props) => {
  const hotel = props.getHotel();
  if (!hotel) return null;

  return (
    <div className="car bg-success text-white">
      <div className="card-header">The best offert!</div>
      <div className="card-body">
        <div className="card-title">{hotel.name}</div>
        <div className="card-subtitle">{hotel.description}</div>
        <p>Rate: {hotel.rating}</p>
        <a href="#/" className="btn btn-sm btn-light">
          show me!
        </a>
      </div>
    </div>
  );
};

export default BestHotel;
