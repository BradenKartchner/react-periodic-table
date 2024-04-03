import { Stage, Layer, Group, Text, Rect } from "react-konva";
import { React, useRef, useState } from "react";
import allElements from "../ElementData";
import colorScheme from "../EleColorScheme";

function ElementStage() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    // TODO: make boxes vary in size based on screen resolution, but not resize to be smaller
    // than a certain amount
    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let startX = 0;
    let startY = 0;
    //let startX = xMultiplier;
    //let startY = yMultiplier;
    let xTextMargin = 3;
    let startTextMargin = 3;
    let myFontSize = yMultiplier / 5;
    // console.log("box width: " + xMultiplier);
    // console.log("box height: " + yMultiplier);

    // React vars
    const stage = useRef(null);
    const currentGroup = useRef(null);

    const [fillColor, setFillColor] = useState("lightblue");

    const handleMouseOver = (e) => {
        console.log(e.target);
        const myRect = e.target;
        setFillColor("white");
        // USE STATE VARS IN REACT YOU DUMMY
        // myRect.fill = "white";
        // myRect.strokeWidth = 4;
        // myRect.stroke = "white";
    };

    return (
        <>
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                ref={stage}
            >
                <Layer>
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
                        >
                            <Rect
                                fill={colorScheme[ele.family]}
                                width={xMultiplier}
                                height={yMultiplier}
                                onMouseOver={handleMouseOver}
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
                                    ele.name.length < 10
                                        ? "Arial"
                                        : "Arial Narrow"
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
                </Layer>
            </Stage>
        </>
    );
}

export default ElementStage;
