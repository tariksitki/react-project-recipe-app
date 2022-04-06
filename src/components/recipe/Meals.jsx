import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Meals.scss";
import RecipeCard from "./RecipeCard";


const Meals = ({ data }) => {
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate("/details");
  }
  
  return (
      <section className="card-container">
        {data?.map((meal, index) => {
          return (
            // <div className="card" key={index}>
            //   <div className="title-div" >
            //     <p className="label">{meal.recipe.label} </p>
            //   </div>

            //   <div className="image-div">
            //     <img src={meal.recipe.image} alt=""  />
            //   </div>

            //   <div className="button-div">
            //       <button className="button" onClick={handleViewMore} >VIEW MORE</button>
            //   </div>
            // </div>
            <RecipeCard {...meal} key = {index} />
            // sadece burada key = {index } dememiz yeterli. diger tarafta yakalayip tekrar key atamasi yapmamiza gerek yok
            // ÖNEMLI: Burada meal in tüm verilerini gönderirken key value seklinde degil
          );
        })}
      </section>
  );
};

export default Meals;
