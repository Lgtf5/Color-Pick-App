import React, {useState} from "react";

function PickApp() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }


    return (
        <div className="bodyContainer">
            <h1>Color Picker</h1>
            <div className="cardContainer" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
           
            </div>
            <p >Select a Color: </p>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default PickApp;