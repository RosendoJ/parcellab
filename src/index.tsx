import React from "react";
import ReactDOM from "react-dom";
const styles = require('./scssStyles.scss');
const imgIco = require("./content/icoNLGD.png");

const img = document.createElement('img');
img.src = imgIco;
document.getElementById("icoContainer").appendChild(img);

ReactDOM.render(
    <div className ={styles.colorBackground}>
        <h2>Texto desde ReactDom</h2>
    </div>,
    document.getElementById("root")
);

const sampleNumber = 1;
console.log(`hello Parcel ${sampleNumber}!`);