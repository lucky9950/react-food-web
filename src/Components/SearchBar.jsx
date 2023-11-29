import React from 'react';
import { useGlobalContext } from '../Context/ContextApi';

const SearchBar = () =>{

    const {searchText , setSearchText, getMealList } = useGlobalContext()

    return(
        <>
            <div className="meal-search">
                <h2 className="title">Find Meals For Your Ingredients</h2>
                <blockquote>"Simply input the ingredients and discover a delightful meal tailored just for you!"<br/>
                    <cite>- Search ingredients</cite>
                </blockquote>
                <form className="meal-search-box">
                    <input required type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} className="search-control" placeholder="Enter an ingredient" id="search-input" />
                    <button onClick={getMealList} className="search-btn btn" id="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </>
    )
}

export default SearchBar;