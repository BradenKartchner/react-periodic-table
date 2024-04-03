import { Stage } from "react-konva";
import ElementLayer from "./ElementLayer";
import LabelsLayer from "./LabelsLayer";
import SideBar from "./SideBar";
import LegendBar from "./LegendBar";

function AppStage() {
    return (
        <>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <LabelsLayer />
                <ElementLayer />
                <SideBar />
                <LegendBar />
            </Stage>
        </>
    );
}

export default AppStage;
