import { Stage } from "react-konva";
import ElementLayer from "./ElementLayer";
import LabelsLayer from "./LabelsLayer";
import SideBar from "./SideBar";
import LegendBar from "./LegendBar";
import { useState } from "react";

function AppStage() {
    const [activeElement, setActiveElement] = useState("Hydrogen");

    return (
        <>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <LabelsLayer />
                <ElementLayer setActiveElement={setActiveElement} />
                <SideBar activeElement={activeElement} />
                <LegendBar />
            </Stage>
        </>
    );
}

export default AppStage;
