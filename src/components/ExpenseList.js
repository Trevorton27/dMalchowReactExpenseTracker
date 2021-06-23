import React from "react"

function ExpenseList(props) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="tableHeads">Date</th>
                        <th className="tableHeads">Location</th>
                        <th className="tableHeads">Amount</th>
                        <th className="tableHeads">Description</th>
                        <th className="tableHeads">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {props.expenseArray.map(expense => {
                        return (
                            <tr key={expense.id}>
                                <td>{expense.date}</td>
                                <td>{expense.location}</td>
                                <td>{expense.amount}</td>
                                <td>{expense.description}</td>
                                <button
                                    id="deleteBtn"
                                    onClick={() => props.handleDeleteRow(expense.id)}>Remove
                                </button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseList