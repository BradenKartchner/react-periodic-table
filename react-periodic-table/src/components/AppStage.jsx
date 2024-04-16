import { Stage } from "react-konva";
import ElementLayer from "./ElementLayer";
import LabelsLayer from "./LabelsLayer";
import SideBar from "./SideBar";
import LegendBar from "./LegendBar";
import { useState } from "react";

function AppStage() {
    const [activeElement, setActiveElement] = useState("Hydrogen");
    const [activeFamily, setActiveFamily] = useState("None");
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

    return (
        <>
            <Stage width={width} height={height}>
                <ElementLayer
                    setActiveElement={setActiveElement}
                    activeFamily={activeFamily}
                />
                <LabelsLayer />
                <LegendBar
                    activeFamily={activeFamily}
                    setActiveFamily={setActiveFamily}
                />
                <SideBar activeElement={activeElement} />
            </Stage>
        </>
    );
}

export default AppStage;
