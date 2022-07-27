import './App.css';
import React, {useState,useEffect} from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import products from'./products.json';
// import CardItem from './components/CardItem';
function App() {
  const[money,setMoney]=useState(3000000000000000000000);
  const[total,setTotal]=useState(0);
  const[basket,setBasket]=useState([]);

  
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);


  return (
    <div>
       <Header money={money} total={total}/>
       <div className='container'>
         <Card basket={basket} setBasket={setBasket} total={total} money={money} products={products}/>
       </div>
       {basket.length>0 && <Footer total={total}  basket={basket} setBasket={setBasket}/>}
      
    </div>
  );
}


export default App;
