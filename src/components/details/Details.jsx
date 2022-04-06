import { useLocation } from "react-router-dom";
import "./Details.scss";

const Details = () => {
  const location = useLocation();
  const meal = location.state.meal;
  console.log(meal.recipe.totalNutrients);
  return (
    <main className="details-main">
      <header className="header">
        <p className="detail-title">{meal.recipe.label} </p>
        <img className="image" src={meal.recipe.image} alt="" />
      </header>

      <div className="details-main-down">
        <section className="main-down-left">
          <table>
            <tr>
              <th>NUTRIENS</th>
            </tr>
            {meal.recipe.totalNutrients.map((item) => {
              return console.log(item);
            })}
          </table>
        </section>

        <section className="main-down-right"></section>
      </div>
    </main>
  );
};

export default Details;
