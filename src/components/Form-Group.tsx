import React,{ReactElement} from 'react'

type props = {
    label: string;
    children: ReactElement;
    htmlFor: string;
}

export default function FormGroup({label,children,htmlFor}: props){

    return(
        <div className="form-group">
            <label htmlFor={htmlFor}>{label}</label>
            {children}
        </div>
    )

}