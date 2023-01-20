import React from 'react'

export default (props) =>{

    // Pega lista recebida e percorre com map
    const options = props.lista.map( option =>{
        return(
            <option value={option.value}>{option.label}</option>
        )
    })

    return(
        <select {...props}>
            {options}
        </select>
    )

}