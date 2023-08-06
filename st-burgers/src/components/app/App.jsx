import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import ToMakeOrder from "../toMakeOrder/ToMakeOrder";
import "../app/App.css";

const API_URL = "https://norma.nomoreparties.space/api/ingredients";

const App = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setIngredients(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="app">
      <Header />
      <ToMakeOrder ingredients={ingredients} />
    </div>
  );
};

export default App;
