import React from 'react'

type props ={
    href: string;
    label: string;
}

export default function NavBarItem({href, label} : props){

    return(
        <li className="nav-item">
            <a className="nav-link" href={href}>{label}</a>
        </li>
    )

}