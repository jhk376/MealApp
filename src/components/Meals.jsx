import { useGlobalContext } from "../context"
import { useEffect } from "react"

const Meals =() =>{
<<<<<<< Updated upstream

    const {meals} = useGlobalContext()
=======
   // const context = useContext(AppContext);
   const {meals} = useGlobalContext()
>>>>>>> Stashed changes
    
    return <section>
        {meals.map((singleMeal)=>{
            console.log(singleMeal)
            return <h4>single meal</h4>
        })}
    </section>
<<<<<<< Updated upstream
=======
     
>>>>>>> Stashed changes
}
export default Meals