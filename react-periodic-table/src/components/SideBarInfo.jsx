import { Rect, Text } from "react-konva";
import { useState } from "react";

function SideBarInfo(props) {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let myStrokeWidth = 2;
    let myStrokeColor = "black";

    const handleMouseOver = (eve) => {
        //console.log(eve.target.attrs);
        props.setHighlightY(eve.target.attrs.y);
        props.setHighlightStrokeColor("rgb(88, 143, 253)");
    };

    /*
     * TODO: add <iframe> element containing wikipedia page for each element as a click popup
     */

    return (
        <>
            <Rect
                width={xMultiplier * 4}
                height={yMultiplier / 2}
                stroke={myStrokeColor}
                strokeWidth={myStrokeWidth}
                fill="rgb(48, 48, 48)"
                onMouseOver={handleMouseOver}
                x={props.x}
                y={props.y}
            />
            <Text
                width={xMultiplier * 4}
                height={yMultiplier / 2}
                align="left"
                verticalAlign="middle"
                text={props.leftText}
                fill="white"
                padding={10}
                onMouseOver={handleMouseOver}
                x={props.x}
                y={props.y}
            />
            <Text
                width={xMultiplier * 4}
                height={yMultiplier / 2}
                align="right"
                verticalAlign="middle"
                text={props.rightText}
                fill={
                    props.leftText == "More info"
                        ? "rgb(88, 143, 253)"
                        : "white"
                }
                textDecoration={
                    props.leftText == "More info" ? "underline" : ""
                }
                padding={10}
                onMouseOver={handleMouseOver}
                x={props.x}
                y={props.y}
            />
        </>
    );
}

export default SideBarInfo;
