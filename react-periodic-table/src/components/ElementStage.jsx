import { Stage, Layer, Group, Text, Rect } from "react-konva";
import { React, useRef } from "react";
import allElements from "../ElementData";

function ElementStage() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let startX = xMultiplier * 3.5;
    let startY = yMultiplier;
    let xTextMargin = 3;
    let startTextMargin = 3;
    let myFontSize = yMultiplier / 5;
    // console.log("box width: " + xMultiplier);
    // console.log("box height: " + yMultiplier);

    // React vars
    const stage = useRef(null);
    const currentGroup = useRef(null);

    function handleMouseOver() {
        console.log("Mouse over event");
    }

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
                            onMouseOver={handleMouseOver}
                        >
                            <Rect
                                fill="lightblue"
                                width={xMultiplier}
                                height={yMultiplier}
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
