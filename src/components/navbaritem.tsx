import React from 'react'

type props ={
    href: string;
    label: string;
    onClick?: ()=>void; //Indica que o parâmetro é opcional
}

export default function NavBarItem({href, label, onClick} : props){

    return(
        <li className="nav-item">
            <a onClick={onClick} className="nav-link" href={href}>{label}</a>
        </li>
    )

}