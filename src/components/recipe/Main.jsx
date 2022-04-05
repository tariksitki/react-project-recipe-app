
import React from 'react';
import "./Main.scss";

const Main = () => {
  return (
    <main className='main'>
      <div className='container'> 
          <section className='section-up'>
              <h1>SEARCH RECIPE</h1>
          </section>

          
          <form action="" className='section-down'>
              <div className='div-mealtype'>
                  <label for="mealtypes">Choose a Mealtype</label> <br />
                  <input list="mealtype" name="browser" id="mealtypes"></input>
                  <datalist id="mealtype">
                    <option value="Edge"> </option>
                    <option value="Firefox"> </option>
                    <option value="Chrome"> </option>
                    <option value="Opera"> </option>
                    <option value="Safari"> </option>
                  </datalist>
              </div>

              <div className='div-mealname'>
                  <label for="mealnames">Choose a Mealname</label> <br />
                  <input list="mealname" name="browser" id="mealnames"></input>
                  <datalist id="mealname">
                    <option value="Edge"> </option>
                    <option value="Firefox"> </option>
                    <option value="Chrome"> </option>
                    <option value="Opera"> </option>
                    <option value="Safari"> </option>
                  </datalist>
              </div>

              <div className='button-div'>
                  <button className='button'>SEARCH</button>
              </div>
          </form>
          
      </div>
    </main>
  )
}

export default Main;