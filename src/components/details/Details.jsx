import { useLocation } from "react-router-dom";
import "./Details.scss";

const Details = () => {
  const location = useLocation();
  const meal = location.state.meal;
  console.log(meal.recipe);
  return (
    <main className="details-main">
      <header className="header">
        <p className="detail-title">{meal.recipe.label} </p>
        <img className="image" src={meal.recipe.image} alt="" />
      </header>

      <div className="details-main-down">
        <section className="main-down-left">
          <table>
            <tbody>
              <tr>
                <th colSpan={3} className="nutriens">
                  NUTRIENS
                </th>
              </tr>

              {Object.values(meal.recipe.totalNutrients).map(
                ({ label, quantity, unit }, index) => {
                  return (
                    <tr className="table-left-row" key={index}>
                      <td>{label} </td>
                      <td className="quantity">{quantity} </td>
                      <td className="unit">{unit} </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </section>

        <section className="main-down-right">
          <table>
            <tbody>
              <tr>
                <th>INGREDIENTS</th>
              </tr>

              {meal.recipe.ingredients.map((ingredient, index) => {
                return (
                  <tr key={index}>
                    <td className="ingredient-td">* {ingredient.text} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
};

export default Details;
