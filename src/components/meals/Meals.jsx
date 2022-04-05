import "./Meals.scss";

const Meals = ({ data }) => {
  return (
      <section className="card-container">
        {data?.map((meal, index) => {
          console.log(meal);
          return (
            <div className="card" key={index}>
              <div className="title-div" >
                <p className="label">{meal.recipe.label} </p>
              </div>

              <div className="image-div">
                <img src={meal.recipe.image} alt=""  />
              </div>

              <div className="button-div">
                <button className="button">VIEW MORE</button>
              </div>
            </div>
          );
        })}
      </section>
   
  );
};

export default Meals;
