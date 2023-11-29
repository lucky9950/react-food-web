import React from 'react';
import { useGlobalContext } from '../Context/ContextApi';

const MealList = () => {

    const { recipeList, getMealDetails } = useGlobalContext();

    return (
        <>
            <div className="meal-result">
                <h2 className="title">Your Search Results:</h2>
                <div id="meal">
                    {recipeList.map((item, index) => {
                        return (
                            <div className="meal-item" key={index}>
                                <div className="meal-img">
                                    <img src={item.strMealThumb} alt="Food_Image" />
                                </div>
                                <div className="meal-name">
                                    <h3>{item.strMeal}</h3>
                                    <a href="#btn" className="recipe-btn" onClick={() => { getMealDetails(item.idMeal) }}>Get Recipe</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default MealList;