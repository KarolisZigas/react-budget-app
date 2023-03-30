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
console.log('test'); 

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider> 
);

ReactDOM.render(jsx, document.getElementById('app'));

