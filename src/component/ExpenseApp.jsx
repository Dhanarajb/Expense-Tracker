import React, { useState } from "react";
import Phone from "../assets/iphone.png";
import ListExpense from "./ListExpense";
import Summary from "./Summary";

const ExpenseApp = () => {
  const [totalValue, computeTotal] = useState(4000);

  const addExpense = (newValue) => {
    computeTotal((oldState) => Number(oldState) + Number(newValue));
  };

  return (
    <div className="wrapper">
      <div className="phone">
        <img src={Phone} style={{ width: "100%" }} />
      </div>
      <div className="app-body">
        <Summary value={totalValue} />
        <ListExpense addExpense={addExpense} />
      </div>
    </div>
  );
};

export default ExpenseApp;
