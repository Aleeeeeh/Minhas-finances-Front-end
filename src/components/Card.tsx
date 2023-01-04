import React,{ReactElement} from 'react'

type Props = {
    title: string;
    children: ReactElement;
}

export default function Card({title,children} : Props){

    return(
        <div className="card md-3">
            <h3 className="card-header">{title}</h3>
            <div className="card-body">{children}</div>
        </div>
    )

}

