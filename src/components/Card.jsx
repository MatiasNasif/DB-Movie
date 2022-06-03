
const Card = ({ movies = [] }) => {
  // console.log(movies.poster_path);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 pt-5">
          <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movies.poster_path}`}
              alt=""
            />
            <h5 className="title is-6 description bold">{movies.title}</h5>
            <p className="font-italic is-12 description">{movies.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
