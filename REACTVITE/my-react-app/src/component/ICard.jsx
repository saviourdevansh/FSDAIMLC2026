import React from "react";

function ICard(props) {
    return (
        <div
            style={{
                border: "10px solid red",
                height: "300px",
                width: "200px",
                marginLeft: "200px",
                backgroundColor: "white"
            }}
        >
            <h2 style={{ backgroundColor: "brown", color: "red" }}>
                ABES Engineering College
            </h2>

            <h3>Roll: {props.roll}</h3>
            <h3>Name: {props.name}</h3>
            <h3>Branch: {props.branch}</h3>

            <img
                src={props.pic}
                height={100}
                width={100}
                alt={props.name}
            />
        </div>
    );
}

export default ICard;