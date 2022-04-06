import { useNavigate } from "react-router-dom";
import "./RecipeCard.scss";
import Details from "../details/Details";

const RecipeCard = ({...meal}) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/details", { state: {meal}  });
  };
  return (
    <div className="card">
      <div className="title-div">
        <p className="label">{meal.recipe.label} </p>
      </div>

      <div className="image-div">
        <img src={meal.recipe.image} alt="" />
      </div>

      <div className="button-div">
        <button className="button" onClick={handleViewMore}>
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
