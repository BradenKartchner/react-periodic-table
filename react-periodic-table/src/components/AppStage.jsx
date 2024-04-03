import { Stage } from "react-konva";
import ElementLayer from "./ElementLayer";
import LabelsLayer from "./LabelsLayer";

function AppStage() {
    return (
        <>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <LabelsLayer />
                <ElementLayer />
            </Stage>
        </>
    );
}

export default AppStage;
