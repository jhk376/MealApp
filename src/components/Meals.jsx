import { AppContext, useGlobalContext } from "../context"
import { useEffect, useContext } from "react"

const Meals =() =>{
    const context = useContext(AppContext);
  console.log(context)
  return <h1>Meals Component</h1>
    {/*
    const {meals} = useGlobalContext()
    
    return <section>
        {meals.map((singleMeal)=>{
            console.log(singleMeal)
            return <h4>single meal</h4>
        })}
    </section>
     */}
}
export default Meals