import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { 
    setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate  
        } from './actions/filters';
import visibleExpense from '../src/selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
console.log(store.getState());

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = visibleExpense(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: "Water bill", amount: 4500, createdAt: 1000 }));
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1500 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500, createdAt: 1000 }));

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider> 
);

ReactDOM.render(jsx, document.getElementById('app'));

