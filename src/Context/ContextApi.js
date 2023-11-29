import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [searchText, setSearchText] = useState([]);
    const [recipeList, setRecipeList] = useState([]);
    const [loader, setLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [mealDetails, setMealDetails] = useState(null);

    async function getMealList(e) {
        e.preventDefault();
        setLoader(true)
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`)
        if(res.data.meals === null){
            res.data.meals = [];
        }else{
            setRecipeList(res.data.meals)
        }
        setLoader(false)
    }

    async function getMealDetails(mealId){
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        setMealDetails(res.data.meals[0])
        setShowPopup(true);
    }

    useEffect(()=>{
       async function getMealList(){
        setLoader(true)
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`)
        setRecipeList(res.data.meals)
        setLoader(false)
       }
       getMealList()
    // eslint-disable-next-line
    },[])

    return (
        <AppContext.Provider value={{ searchText, setSearchText, recipeList, setRecipeList, getMealList, loader , getMealDetails, mealDetails , showPopup, setShowPopup }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }