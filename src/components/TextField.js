import React from 'react'

const TextField = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input
                type="text"
                name={props.name}
                onChange={props.handleChange}
            />
        </div>
    )
}

export default TextField;