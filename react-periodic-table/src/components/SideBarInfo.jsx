import { Rect, Text } from "react-konva";
import { useState } from "react";

function SideBarInfo() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let myStrokeWidth = 2;
    // let myStrokeColor = "black";

    // State vars
    let [myStrokeColor, setMyStrokeColor] = useState("black");

    const handleMouseOver = (eve) => {
        console.log(eve.target);
    };

    return (
        <>
            <Rect
                width={xMultiplier * 4}
                height={yMultiplier / 2}
                stroke={myStrokeColor}
                strokeWidth={myStrokeWidth}
                fill="rgb(48, 48, 48)"
                onMouseOver={handleMouseOver}
            />
            <Text />
        </>
    );
}

export default SideBarInfo;
