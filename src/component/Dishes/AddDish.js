import React,{useState} from "react";



const AddUser=(props)=>{
   
    const [enterId,setId]=useState('');
    const   [enterPrice,setPrice]=useState('');
    const   [enterDish,setDish]=useState('');
    const   [enterTable,setTable]=useState('');

   
  
    const idInputChangeHandler = event => {
     
      setId(event.target.value);
    };

    const dishInputChangeHandler = event => {
     
        setDish(event.target.value);
    };


    const priceInputChangeHandler = event => {
     
        setPrice(event.target.value);
      };
  
      const tableInputChangeHandler = event => {
       
          setTable(event.target.value);
      };
  
   

   
    
    const addDishHandler=(event)=>{
    
        event.preventDefault();
        props.onAddDish(enterId,enterPrice,enterDish,enterTable)
       
        
    }
    
  

 

    return <div>
    

        <form onSubmit={addDishHandler}>
        <label htmlFor="id">Unique Order Id</label>
        <input id="id" type="text" onChange={idInputChangeHandler} />
        <label htmlFor="Price" >Choose Price</label>
        <input id="price"  onChange={priceInputChangeHandler}/>
        <label htmlFor="dish" >Choose Dish</label>
        <input id="dish" onChange={dishInputChangeHandler}/>
        <label htmlFor="table" >Choose Table</label>
        <select id="table" onChange={tableInputChangeHandler}>
                <option > </option>
                <option >Table 1</option>
                <option >Table 2</option>
                <option >Table 3</option>
        </select>
        <button type="submit">Add to bill</button>
    </form>

    </div>

}

export default AddUser;