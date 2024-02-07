import React from "react";


const DishList=props=>{

    return (
    
            <ul>
                {props.dishes.map((dish)=>(
                    <li key={dish.id}>
                        {dish.dish} {dish.price} {dish.table}
                    </li>
                ))}
            </ul>

        
    );

}
export default DishList;