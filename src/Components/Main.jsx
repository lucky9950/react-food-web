import React from 'react';
import { Suspense } from 'react';
import SearchBar from './SearchBar';
import Loader from './Loader';
import { useGlobalContext } from '../Context/ContextApi';

// lazy import 
const MealList = React.lazy(() => import("./MealList"))
const MealDetails = React.lazy(() => import("./MealDetails"))

const Main = () => {
    const { showPopup } = useGlobalContext();
    return (
        <>
            <div className="container">
                <div className="meal-wrapper">
                    <SearchBar />
                    <Suspense fallback={<Loader />}>
                        <MealList />
                    </Suspense>
                    {showPopup ? 
                        <Suspense fallback={<Loader />}>
                            <MealDetails />
                        </Suspense>
                     : null}
                </div>
            </div>
        </>
    )
}

export default Main;