import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);


  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // copy the expenseData object from ExpenseForm
      ...enteredExpenseData, // and pull out all key value pairs of expenseData object and add them to this new object
      id: Math.random().toString() // add new key, id and set it to a random number string
    };
    props.onAddExpense(expenseData);

    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
     setIsEditing(false);
  };

    return (
    <div className="new-expense">
       {/* dynamic expression - using isEditing state to control which of the 2 elements is shown */}
      {/* 1. show button when not editing */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* 2. show expense form when editing */}
      {isEditing && (
      <ExpenseForm 
      onSaveExpenseData={onSaveExpenseDataHandler}
      onCancel={stopEditingHandler}
      />
      )}
    </div>
  );
};

export default NewExpense;