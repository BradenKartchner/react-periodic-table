import { Rect, Text } from "react-konva";
import { useState } from "react";

function SideBarInfo(props) {
    let width;
    let height;
    if (window.innerWidth < 1400 || window.innerWidth > 1600) {
        width = 1422;
    } else {
        width = window.innerWidth;
    }
    if (window.innerHeight < 700 || window.innerWidth > 800) {
        height = 710;
    } else {
        height = window.innerHeight;
    }

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let myStrokeWidth = 2;
    let myStrokeColor = "black";

    const handleMouseOver = (eve) => {
        //console.log(eve.target.attrs);
        props.setHighlightY(eve.target.attrs.y);
        props.setHighlightStrokeColor("rgb(88, 143, 253)");
    };

    const handleLinkClick = (eve) => {
        props.setWikiActive((currValue) => !currValue);
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
                    props.leftText == "Info (click on right)"
                        ? "rgb(88, 143, 253)"
                        : "white"
                }
                textDecoration={
                    props.leftText == "Info (click on right)" ? "underline" : ""
                }
                padding={10}
                onMouseOver={handleMouseOver}
                onClick={
                    props.leftText == "Info (click on right)"
                        ? handleLinkClick
                        : ""
                }
                x={props.x}
                y={props.y}
            />
        </>
    );
}

export default SideBarInfo;
