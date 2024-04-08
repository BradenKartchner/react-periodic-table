import { Rect, Text } from "react-konva";

function SideBarInfo() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let myStrokeWidth = 2;
    let myStrokeColor = "black";

    return (
        <>
            <Rect
                width={xMultiplier * 4}
                height={yMultiplier / 2}
                stroke={myStrokeColor}
                strokeWidth={myStrokeWidth}
                fill="rgb(48, 48, 48)"
            />
            <Text />
        </>
    );
}

export default SideBarInfo;
