
import React,{useState} from 'react';
import AddDish from './component/Dishes/AddDish';
import DishList from './component/Dishes/DishList';

function App() {
  const [dishlist,setDishList]=useState([]);
  
  const addDishHandler=(id,price,dish,table)=>{
    setDishList((previousList)=>{
      return [...previousList,{dish:dish,price:price,table:table}]
    })

  }
  return (
    <React.Fragment>
      
      <AddDish onAddDish={addDishHandler}/>
      <h1>Orders</h1>
      <h3>Table 1</h3>{dishlist.map((g)=> g.table==='Table 2') && <DishList dishes={dishlist}></DishList>}
       
      <h3>Table 2</h3>
      <h3>Table 3</h3>
      
    </React.Fragment>
  );
}

export default App;
