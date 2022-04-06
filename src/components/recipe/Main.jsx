
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Meals from './Meals';
import "./Main.scss";

const Main = () => {
  const [mealType, setMealType] = useState("");
  const [mealName, setMealName] = useState();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);

  const appID = "bb69260a";
  const appKey = "d4cca3d279e3b8117f12aacef3c04159";
  let baseUrl = `https://api.edamam.com/search?q=${mealName ? mealName : mealType}&app_id=${appID}&app_key=${appKey}&mealType=${mealType}`;

  const handleSearch = (e) => {
    e.preventDefault();
    mealType ?   fetch(baseUrl)
    .then(res => res.json())
    .then(response => setData(response.hits)) : alert("Enter a Value");

    mealType && setSearch(true);
  }
  
  return (
    <main className='main'>
      {search == false ? (
      <div className='main-inner'>
          <div className='container'>
          <section className='section-up'>
              <h1>SEARCH RECIPE</h1>
          </section>

          <form action="" className='section-down'>
              <div className='div-mealtype'>

                  <label htmlFor="mealtypes">Mealtype*</label> <br />
                  <select name="mealtypes" id="mealtypes" onChange={(e) => setMealType(e.target.value) }>
                      <option value="">Choose a Mealtype</option>
                      <option value="Breakfast">Breakfast </option>
                      <option value="Dinner">Dinner </option>
                      <option value="Lunch">Lunch</option>
                      <option value="Snack">Snack </option>
                      <option value="Teatime">Teatime</option>
                  </select>
              </div>

              <div className='div-mealname'>
                  <label htmlFor="mealnames">Keyword (Optional)</label> <br />
                  <input type="text" id='mealnames' placeholder='Please Enter a Keyword' onChange={(e) => setMealName(e.target.value)} />
              </div>

              <div className='button-div'>
                  <button type='submit' className='button' onClick={handleSearch} >SEARCH</button>
              </div>

          </form> 
      </div>

      </div> ) :  (<section> 
        <Meals data={data}/>
      </section>)}
    </main>
  )
}

export default Main;