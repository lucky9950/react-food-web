import React from 'react';
import { useState } from 'react';
import { useGlobalContext } from '../Context/ContextApi';

const MealDetails = () => {

    const { mealDetails, setShowPopup } = useGlobalContext();

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };


    let vidCode = mealDetails.strYoutube.trim().slice(-11);

    const Ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        if (ingredient !== null && ingredient.trim() !== "") {
            Ingredients.push(ingredient);
        }
    }
    
    return (
        <>
            <div className="meal-details showRecipe">

                <button onClick={() => {
                    setShowPopup(false)
                }} className="recipe-close-btn btn" id="recipe-close-btn" type="button">
                    <i className="fas fa-times"></i>
                </button>

                <div className="meal-details-content">
                    <h2 className="recipe-title">{mealDetails.strMeal}</h2>
                    <p className="recipe-category">{mealDetails.strCategory}</p>
                    <iframe src={`https://www.youtube.com/embed/${vidCode}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <div className="recipe-link">
                        <a href="#show-ingredients" onClick={toggleClass} id="show-ingredient">Show Ingredients <i id="arrow" className={isActive ? 'fa-solid fa-chevron-down arrow-up' : 'fa-solid fa-chevron-down arrow-down'}></i></a>
                    </div>
                    <div className="ingredients">
                        <ul id="items-list" className={isActive ? 'ingredients-list list-open': 'ingredients-list list-close'}>
                            {Ingredients.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                    <div className="recipe-instruct">
                        <h3 className="Instruction">Instruction</h3>
                        <p>{mealDetails.strInstructions}</p>
                    </div>
                    <i>Grateful for Visiting!</i>
                </div>
            </div>
        </>
    )
}

export default MealDetails;