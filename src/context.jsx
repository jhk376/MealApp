import React, { useContext, useEffect, useState } from "react"
import axios from 'axios'

const AppContext = React.createContext()

const allMealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealURL ='https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {
    const [meals, setMeals] = useState([])

    const fetchMeals = async (url) =>{
        try{
            const data = await axios(url)
            setMeals(data.meals)
            
        } catch (error){    
            console.log(error.response)

        }
    }

    useEffect(() =>{    
        //fetch().then
        //.then async/await
        //
        fetchMeals(allMealsURL)
    },[])
    return <AppContext.Provider value = {{meals}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext =() =>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}