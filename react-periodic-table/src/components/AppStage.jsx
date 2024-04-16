import { Stage } from "react-konva";
import ElementLayer from "./ElementLayer";
import LabelsLayer from "./LabelsLayer";
import SideBar from "./SideBar";
import LegendBar from "./LegendBar";
import { useState } from "react";

function AppStage() {
    const [activeElement, setActiveElement] = useState("Hydrogen");
    const [activeFamily, setActiveFamily] = useState("None");

    return (
        <>
            <Stage width={window.innerWidth} height={window.innerHeight}>
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
