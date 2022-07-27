import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Basket from "./components/Basket";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://delivery-bck-clone.herokuapp.com"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <h2>Is Loading... </h2>
  ) : (
    <>
      <Header data={data} />
      <main className="container">
      <Sections categories={data.categories} basket={basket} setBasket={setBasket}/>
      <Basket basket={basket} setBasket={setBasket} restaurant={data.restaurant.name}/>
      </main>
    </>
  );
}

export default App;
