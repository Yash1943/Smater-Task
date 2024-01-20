import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button id="backToHomeButton" onClick={handleBackToHome}>
        Back to Homepage
      </button>
    </div>
  );
};

export default NotFound;
