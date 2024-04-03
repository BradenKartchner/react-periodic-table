/* For the side bar containing expanded element information */

import { Layer, Group, Rect } from "react-konva";

function SideBar() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let elementX = xMultiplier * 0.5;
    let elementY = yMultiplier * 0.75;
    let sideX = elementX + xMultiplier * 18.5 + 54;
    let sideY = elementY;

    return (
        <>
            <Layer>
                <Rect
                    x={sideX}
                    y={sideY}
                    height={yMultiplier * 9.5 + 8.5 * 3}
                    width={xMultiplier * 4}
                    fill="lightblue"
                />
            </Layer>
        </>
    );
}

export default SideBar;
