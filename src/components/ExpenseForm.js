import React from "react";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// const date = new Date();

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount /100).toString()  : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: "",
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}));
    }
    onTextareaChange = (e) => {
        const note = e.target.value;
        this.setState(()=> ({note}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(()=>({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused}))
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=> ({ error: "Please provide description and amount"}))
        } else {
            this.setState(()=> ({ error: ""}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            })
        }
    }
    render(){
        return (
            <div>
                ExpenseForm
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        placeholder="Amount"
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        value={this.state.note}
                        onChange={this.onTextareaChange}
                        placeholder="Add a note for your expense (optional)"
                    >
                    </textarea>
                    <button>Add expense</button>
                </form>
            </div>
        )
    }
}