import React, { useContext, useEffect, useState } from "react"
import axios from 'axios'

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl ='https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {
    const [meals, setMeals] =  useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] =useState(null)
    const [favourites, setFavourites]= useState([])
    
    const fetchMeals = async (url) =>{
        setLoading(true)
        try{
            const {data} = await axios(url)
            if(data.meals){
            setMeals(data.meals)
            }
            else{
                setMeals([])
            }
            
        } catch (error){    
            console.log(error.response)
        }
        setLoading(false)
    }

    const fetchRandomMeal =() =>{
        fetchMeals(`${randomMealUrl}`)
    }

    const selectMeal = (idMeal, favouriteMeal)=>{
        console.log('hello')
        let meal;
        meal = meals.find((meal) =>meal.idMeal === idMeal);
        setSelectedMeal(meal);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const addToFavourites = (idMeal) => {
        const meal = meals.find((meal) => meal.idMeal === idMeal);
        const alreadyFavourite = favourites.find((meal) => meal.idMeal === idMeal)
        if (alreadyFavourite) return
        const updateFavourites = [...favourites, meal]
        setFavourites(updateFavourites)
    }

    const removeFromFavourites =((idMeal) => {
        const updateFavourites = favourites.filter((meal) => meal.idMeal!== idMeal);
        setFavourites(updateFavourites)
    })
    useEffect(()=>{
        fetchMeals(allMealsUrl)
    },[])

    useEffect(() =>{    
        if(!searchTerm) return

        fetchMeals(`${allMealsUrl}${searchTerm}`)
    },[searchTerm])

    return (<AppContext.Provider value ={{loading, meals, 
        setSearchTerm, fetchRandomMeal,showModal, 
        selectedMeal, selectMeal, closeModal, favourites,
        addToFavourites, removeFromFavourites}}>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext =() =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}