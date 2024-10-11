import { useLocation, useNavigate } from "react-router-dom";

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/movies";

  return (
    <div>
      <h1>Movie Details</h1>
      <button onClick={() => navigate(from)}>Go Back</button>
    </div>
  );
};

export default MovieDetailsPage;
