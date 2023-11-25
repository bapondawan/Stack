import React, { Component } from "react";

class BestDoc extends Component {
  render() {
    const doc = [
        {
            Name: "Bapon",
            Age: "22",
            Address:"Jugia",
            City: "Kushtia"
        },
        {
            Name: "Abir",
            Age: "23",
            Address:"Rab Camp",
            City: "Kushtia"
        },
        {
            Name: "Sharthok",
            Age: "22",
            Address:"Housing",
            City: "Kushtia"
        },
        {
            Name: "Bapon",
            Age: "22",
            Address:"Jugia",
            City: "Kushtia"
        },
        {
            Name: "Abir",
            Age: "23",
            Address:"Rab Camp",
            City: "Kushtia"
        },
        {
            Name: "Sharthok",
            Age: "22",
            Address:"Housing",
            City: "Kushtia"
        },
        {
            Name: "Bapon",
            Age: "22",
            Address:"Jugia",
            City: "Kushtia"
        },
        {
            Name: "Abir",
            Age: "23",
            Address:"Rab Camp",
            City: "Kushtia"
        },
        {
            Name: "Sharthok",
            Age: "22",
            Address:"Housing",
            City: "Kushtia"
        },
        {
            Name: "Bapon",
            Age: "22",
            Address:"Jugia",
            City: "Kushtia"
        },
        {
            Name: "Abir",
            Age: "23",
            Address:"Rab Camp",
            City: "Kushtia"
        },
        {
            Name: "Sharthok",
            Age: "22",
            Address:"Housing",
            City: "Kushtia"
        },
    ];
    let para;
    let home =  "<li className='bg-red-500 m-2 hover:bg-blue-600'><p>Name: ";
    let mark =  "</p></li>";

    doc.forEach((item)=>{ document.getElementById("root").innerHTML = home + item.Name + mark;});


return (
    <div>
        <div >
            <ul className='grid grid-cols-4' id="root">
                {
                    doc.map((item,index)=>
                        <li className='bg-red-500 m-2 hover:bg-blue-600 p-3 border-4 rounded-xl border-blue-950'>
                            <p>ID: {index + 1}</p>
                            <p>Name: {item.Name}</p>
                            <p>Age: {item.Age}</p>
                            <p>Address: {item.Address}</p>
                            <p>City: {item.City}</p>
                            </li>
                    )
                }
            </ul>
        </div>
    </div>
    );
  }
}

export default BestDoc;
