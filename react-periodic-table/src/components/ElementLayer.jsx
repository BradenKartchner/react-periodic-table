import { Layer, Group, Text, Rect } from "react-konva";
import { React, useRef, useState } from "react";
import allElements from "../ElementData";
import colorScheme from "../EleColorScheme";

function ElementLayer(props) {
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

    // TODO: make boxes vary in size based on screen resolution, but not resize to be smaller
    // than a certain amount
    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let startX = xMultiplier * 0.5;
    let startY = yMultiplier * 0.75;
    let xTextMargin = 3;
    let startTextMargin = 3;
    let myFontSize = yMultiplier / 5;
    let mainBarWidth = xMultiplier * 18.75 + xTextMargin * 18.5;
    let mainBarHeight = yMultiplier * 10.5 + xTextMargin * 9.5;

    // React vars
    // Idea: use CSS for mouse hover effects??
    const [highlightX, setHighlightX] = useState(startX);
    const [highlightY, setHighlightY] = useState(startY);
    const [highlightStroke, setHighlightStroke] = useState(null);
    const [highlightStrokeWidth, setHighlightStrokeWidth] = useState(0);
    const [hasClicked, setHasClicked] = useState(false);

    const handleMouseOver = (e) => {
        //console.log(e.target);
        if (!hasClicked) {
            setHighlightX(e.target.parent.attrs.x);
            setHighlightY(e.target.parent.attrs.y);
            setHighlightStroke("magenta");
            setHighlightStrokeWidth(3);
            //console.log(e.target.attrs.id);
            props.setActiveElement(e.target.attrs.id);
        }
    };

    const handleClick = (e) => {
        console.log(e.target);
        if (!hasClicked) {
            setHasClicked(true);
        }
        setHighlightX(e.target.parent.attrs.x);
        setHighlightY(e.target.parent.attrs.y);
        setHighlightStroke("magenta");
        setHighlightStrokeWidth(3);
        if (e.target.index != 0) {
            props.setActiveElement(e.target.parent.children[0].attrs.id);
        } else {
            props.setActiveElement(e.target.attrs.id);
        }
    };

    return (
        <>
            <Layer>
                <Rect
                    x={0}
                    y={0}
                    fill="rgb(48, 48, 48)"
                    width={mainBarWidth}
                    height={mainBarHeight}
                />
                {allElements.map((ele) => (
                    <Group
                        width={xMultiplier}
                        height={yMultiplier}
                        key={ele.number}
                        x={
                            startX +
                            (ele.col - 1) * xMultiplier +
                            (ele.col - 1) * 3
                        }
                        y={
                            startY +
                            (ele.row - 1) * yMultiplier +
                            (ele.row - 1) * 3
                        }
                        onClick={handleClick}
                    >
                        <Rect
                            fill={
                                ele.family == props.activeFamily ||
                                props.activeFamily == "None"
                                    ? colorScheme[ele.family][0]
                                    : "rgb(48, 48, 48"
                            }
                            stroke={
                                ele.family != props.activeFamily ||
                                props.activeFamily != "None"
                                    ? "none"
                                    : "black"
                            }
                            width={xMultiplier}
                            height={yMultiplier}
                            onMouseOver={handleMouseOver}
                            id={ele.name}
                        />
                        <Text
                            text={ele.number}
                            x={xTextMargin}
                            y={startTextMargin}
                            fontStyle="bold"
                            fontSize={myFontSize}
                        />
                        <Text
                            text={ele.symbol}
                            fontStyle="bold"
                            x={xTextMargin}
                            y={startTextMargin + myFontSize}
                            fontSize={myFontSize * 1.7}
                        />
                        <Text
                            text={ele.name}
                            x={xTextMargin}
                            y={startTextMargin + myFontSize * 2.5 + 1}
                            fontSize={myFontSize * 0.9}
                            fontFamily={
                                ele.name.length < 9 ? "Arial" : "Arial Narrow"
                            }
                        />
                        <Text
                            text={ele.mass}
                            fontSyle="bold"
                            x={xTextMargin}
                            y={startTextMargin + myFontSize * 3.4 + 1}
                        />
                    </Group>
                ))}
                <Rect
                    x={highlightX}
                    y={highlightY}
                    width={xMultiplier}
                    height={yMultiplier}
                    fillEnabled={false}
                    id="highlightBox"
                    stroke={highlightStroke}
                    strokeWidth={highlightStrokeWidth}
                />
            </Layer>
        </>
    );
}

export default ElementLayer;
