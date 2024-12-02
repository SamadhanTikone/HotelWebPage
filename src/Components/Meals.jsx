import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useNavigate } from "react-router-dom";

export default function Meals() {
  const [recipe, setRecipe] = useState([]);
  const [meal, setMeal] = useState("Soup");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  // const navigate = useNavigate();

  // Search meals by name
  useEffect(()=>{
    setIsLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setRecipe(data.meals);
          setIsClicked(false)
        } else {
          setRecipe([]);
          
        }
        setIsLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  },[meal])
    
  

  // Fetch more info about selected meal
  function showMoreInfo(mealId) {
    setIsLoading(true);
    setIsClicked(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedMeal(data.meals[0]);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }

  function handleClose(){
    // navigate("/meals")
    setIsClicked(false)
  }
  return (
    <div className="container mx-auto p-6 text-white m-6 bg-[#384049]">
      {/* Display selected meal info at the top if clicked */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={meal}
          className="p-3 border rounded-lg w-64 text-white font-semibold"
          onChange={(e) => setMeal(e.target.value)}
        />
        <button
        
          className="ml-4 p-3 bg-[#8456f7] text-white rounded-lg hover:bg-blue-700"
        >
          Get Meal
        </button>
      </div>
      {isClicked && selectedMeal && (
        <div className="mt-6 p-4 border rounded-lg shadow-lg text-center">
          <p onClick={handleClose} className="absolute text-4xl cursor-pointer"><ArrowBackIcon /></p>
          <h2 className="md:text-4xl text-2xl py-4 font-bold">{selectedMeal.strMeal}</h2>
          <p className="md:w-[60%] w-[80%] py-6 text-center mt-0 m-auto">{selectedMeal.strInstructions}</p>
          <img
            className="mt-4 rounded-lg md:w-1/2 md:h-96 md:p-4  p-2 m-auto"
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
          />
        </div>
      )}

      {/* Search input and button */}
     

      {/* Meal recipe cards */}
      {!isClicked && (
        <div className="flex flex-wrap text-white justify-center gap-6">
          {isLoading &&
            [...Array(15)].map((_, index) => (
              <div className="flex md:w-64 lg:w-72 w-80 flex-col gap-4" key={index}>
                <div className="skeleton md:h-32 h-48  w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          {recipe.length > 0 ?
            recipe.map((meal, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-lg text-center justify-center items-center"
              >
                <div className="w-full">
                  <img
                    className="mt-4 rounded-lg w-full h-48 "
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
                </div>
                <h3 className="text-lg py-3 font-semibold">{meal.strMeal}</h3>

                <div className="flex justify-around items-center mt-4">
                  <button className="bg-[#C5D3E8] px-4 py-2 opacity-50 hover:opacity-100 rounded-lg text-black mx-2">
                    Make Order
                  </button>
                  <button
                    className="bg-[#C5D3E8] px-4 py-2 opacity-50 hover:opacity-100 rounded-lg text-black mx-2"
                    onClick={() => showMoreInfo(meal.idMeal)}
                  >
                    More Info
                  </button>
                </div>
              </div>
            ))
            
            : <p className="text-xl ">Enter Correct data</p>

            }
        </div>
      )}
    </div>
  );
}
