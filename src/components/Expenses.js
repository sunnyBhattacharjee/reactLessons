import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses'

function Expenses (props) {

    return props.expenseData && props.expenseData.map((item) => (
            <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
          ));
}

export default Expenses;