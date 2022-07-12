import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="main_card">
                <div className="card">
                    <h2 className="title">{props.title}</h2>
                    <img src={props.img} alt="Image" />
                    <h3 className="price">{props.price}</h3>
                    <p className="details"><b>Details:-</b>{props.detail}</p>
                </div>
            </div>
        </>
    )
}

export default Card;