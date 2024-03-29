import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date();
  // const expenseTitle = "Big Basket";
  // const expensePrice = 2000;
  //{props.date.toISOString()}

  const [title , setTitle] = useState(props.title);
  const clickHandler = () =>{
    setTitle("updated");
    console.log(title)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
