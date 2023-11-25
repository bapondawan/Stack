import React from 'react';
import { ReactDOM } from 'react';
const TestComp = () => {

    function Bapon(){
        const hi = document.getElementById("house");
            const arrre = hi.className; 
            arrre === "invisible" ? hi.className = "visible":hi.className="invisible";
      }
    return (
        <div>
            <button id='button' onClick={Bapon} >Bapon</button>
            <div id='house' className='invisible'>House</div>
        </div>
    );
};

export default TestComp;