import { Stage, Layer, Text, Rect } from "react-konva";
import React from "react";
import testAllElements from "../TestElementData";

function ElementStage() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 22;
    let yMultiplier = height / 12;
    let startX = xMultiplier * 2;
    let startY = yMultiplier * 1.5;

    let testArray = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {testAllElements.map((ele) => (
                        <Rect
                            fill="red"
                            width={xMultiplier}
                            height={yMultiplier}
                            x={startX + (ele.col - 1) * xMultiplier}
                            y={startY + (ele.row - 1) * yMultiplier}
                        />
                    ))}
                </Layer>
            </Stage>
        </>
    );
}

export default ElementStage;
