import React, { Component } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date();
  // const expenseTitle = "Big Basket";
  // const expensePrice = 2000;
  //{props.date.toISOString()}
  

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
