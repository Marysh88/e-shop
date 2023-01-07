import React, {  useState,useEffect } from "react";
import axios from "axios";
import Card from "./Card";



function Main() {
    const [goods,setGoods] = useState([]);
    useEffect(() =>{
        axios.get("https://dummyjson.com/products").then((response) => {
            setGoods(response.data.products)
        })
    },[])
  return (
    <div >
        {goods ?
            goods.map((good) =>{
               return <Card  key={good.id} title={good.title}/>
            }) : <></>
        }
    </div>
  );
}

export default Main;
