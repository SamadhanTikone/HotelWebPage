import { useEffect } from "react";
import PropTypes from "prop-types";

export default function ShowMoreInfo({ mealId, selectedMeal, setSelectedMeal }) {
  useEffect(() => {
    if (mealId) {
      console.log("Fetching data for mealId:", mealId);
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then((response) => response.json())
        .then((data) => {
          setSelectedMeal(data.meals[0]);
          console.log(data.meals[0]);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [mealId, setSelectedMeal]);

  if (!selectedMeal) {
    return null; // Avoid rendering if no selectedMeal
  }

  return (
    <div className="">
      <div className="mt-6 p-4 border rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold">{selectedMeal.strMeal}</h2>
        <p>{selectedMeal.strInstructions}</p>
        <img
          className="mt-4 rounded-lg"
          src={selectedMeal.strMealThumb}
          alt={selectedMeal.strMeal}
        />
      </div>
    </div>
  );
}

// Prop validation using PropTypes
ShowMoreInfo.propTypes = {
  mealId: PropTypes.string.isRequired,
  selectedMeal: PropTypes.object,
  setSelectedMeal: PropTypes.func.isRequired,
};

ShowMoreInfo.defaultProps = {
  selectedMeal: null,
};
