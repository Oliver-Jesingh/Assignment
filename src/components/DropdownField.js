import React from 'react'

const DropdownField = (props) => {

    const DropdownOption = props.val.map((values) => {
        return (
            <option value={values} key={values}>
                {values}
            </option>
        )
    })

    return (
        <div>
            <label>{props.label}</label>
            <select name={props.name} onChange={props.handleChange}>
                <option value="">Please Select Your State</option>
                {DropdownOption}
            </select>

        </div>
    )
}

export default DropdownField;
