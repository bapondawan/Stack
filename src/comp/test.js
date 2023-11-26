import React from 'react';
import { ReactDOM } from 'react';
const TestComp = () => {
    console.log("bapon");
    const vass= document.querySelector("#hange");
    const list = ["Development","Mobile","shit","Cow"];

    for(let i=0;i<list.length;i++){console.log(list[i])}
    console.log(vass);
    return (
        <div>
            <div>
            <p className="">Every <div id="hange"></div> has a tab open to Stafdsfdsck Overflow</p>
            </div>
        </div>
    );
};

export default TestComp;