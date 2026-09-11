import React from "react";
import ICard from "./ICard";
import ragahav from "../images/ragahav.jpg";

function ICardGallery() {
    return (
        <div>
            <ICard
                pic={ragahav}
                roll="2424"
                name="Ram"
                branch="AIML"
            />

            <ICard
                roll="2423"
                name="Raj"
                branch="DS"
            />

            <ICard
                roll="2724"
                name="Rahul"
                branch="CSE"
            />

            <ICard
                roll="2824"
                name="Rohan"
                branch="ECE"
            />
        </div>
    );
}

export default ICardGallery;