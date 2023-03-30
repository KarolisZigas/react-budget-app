import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>Description: {description}</h3>
        </Link>
        <h4>Amount: {amount} - {createdAt}</h4>
    </div>
);

export default ExpenseListItem;