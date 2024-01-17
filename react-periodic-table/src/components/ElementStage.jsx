import { Stage, Layer, Text, Rect } from "react-konva";
import React from "react";

function ElementStage() {
    return (
        <>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Rect fill="red" width={200} height={100} x={300} y={150} />
                </Layer>
            </Stage>
        </>
    );
}

export default ElementStage;
