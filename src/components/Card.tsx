import React from 'react'

type Props = {
    title: string;
    children: string;
}

export default function Card({title,children} : Props){

    return(
        <div className="card md-3">
            <div className="card-header">{title}</div>
            <div className="card-body">{children}</div>
        </div>
    )

}

