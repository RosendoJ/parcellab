import React from "react";
import ReactDOM from "react-dom";
import './scssStyles.scss';
import imgIco from "./content/icoNLGD.png";

const img = document.createElement('img');
img.src = imgIco;
document.getElementById("icoContainer").appendChild(img);

ReactDOM.render(
    <div>
        <h2>Texto desde ReactDom</h2>
    </div>,
    document.getElementById("root")
);

const sampleNumber = 1;
console.log(`hello Parcel ${sampleNumber}!`);