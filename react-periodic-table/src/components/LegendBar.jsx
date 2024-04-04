/* For the legend above the table containing all the families */
import { Layer, Rect } from "react-konva";

function LegendBar() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let elementX = xMultiplier * 0.5;
    let elementY = yMultiplier * 0.75;
    let legendX = elementX + xMultiplier * 2 + 6;
    let legendY = elementY;

    return (
        <>
            <Layer>
                <Rect
                    x={legendX + 0.25 * xMultiplier}
                    y={legendY + 0.25 * yMultiplier}
                    width={xMultiplier * 9.5 + 27}
                    height={yMultiplier * 2.5 + 6}
                    fill="lightgrey"
                />
            </Layer>
        </>
    );
}

export default LegendBar;
