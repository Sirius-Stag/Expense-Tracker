import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <Card  className="expenses">
      <ExpenseItem 
      title = {props.tmp[0].title} 
      amount = {props.tmp[0].amount} 
      date = {props.tmp[0].date}
      />
      <ExpenseItem 
      title = {props.tmp[1].title} 
      amount = {props.tmp[1].amount} 
      date = {props.tmp[1].date}
      />
      <ExpenseItem 
      title = {props.tmp[2].title} 
      amount = {props.tmp[2].amount} 
      date = {props.tmp[2].date}
      />
      <ExpenseItem 
      title = {props.tmp[3].title} 
      amount = {props.tmp[3].amount} 
      date = {props.tmp[3].date}/>
    </Card>
  );

}

export default Expenses;