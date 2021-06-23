import React from "react"


const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                className="inputs"
                type="date"
                name="date"
                value={props.state.date}
                onChange={props.handleChange}
                required />
            <input
                className="inputs"
                type="text"
                name="location"
                value={props.state.location}
                placeholder="Input location"
                onChange={props.handleChange}
                required />
            <input
                className="inputs"
                type="number"
                name="amount"
                value={props.state.amount}
                placeholder="Input amount"
                onChange={props.handleChange}
                required />
            <input
                className="inputs"
                type="text"
                name="description"
                value={props.state.description}
                placeholder="Input item description"
                onChange={props.handleChange}
                required />
            <button id="submitButton" >ADD TO LIST</button>
        </form>
    )
}




export default Form