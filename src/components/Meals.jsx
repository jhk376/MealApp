import { useGlobalContext } from "../context"
import { useEffect } from "react"

const Meals =() =>{

    const {meals} = useGlobalContext()
    
    return <sections>
        {meals.map((singleMeal)=>{
            console.log(singleMeal)
            return <h4>single meal</h4>
        })}
    </sections>
}
export default Meals