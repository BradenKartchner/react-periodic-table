/* For the side bar containing expanded element information */

import { Layer, Group, Rect, Text } from "react-konva";
import allElements from "../ElementData";
import colorScheme from "../EleColorScheme";
import SideBarInfo from "./SideBarInfo";

function SideBar(props) {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let elementX = xMultiplier * 0.5;
    let elementY = yMultiplier * 0.75;
    let sideX = elementX + xMultiplier * 18.5 + 54;
    let sideY = elementY;
    let largeBoxMargin = 8;

    // Margins for text
    let leftTextMargin = largeBoxMargin * 2.5 + sideX;
    let vertTextMargin = largeBoxMargin * 2.5 + sideY;

    const handleMouseOver = (e) => {
        console.log(props.activeElement);
    };

    let currEleIndex = -1;

    // search allElements for the correct element index
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].name == props.activeElement) {
            currEleIndex = i;
        }
    }

    return (
        <>
            <Layer>
                <Rect
                    x={sideX}
                    y={sideY}
                    height={yMultiplier * 9.5 + 8.5 * 3}
                    width={xMultiplier * 4}
                    fill="lightgrey"
                    onMouseOver={handleMouseOver}
                />
                <Rect
                    x={sideX + largeBoxMargin}
                    y={sideY + largeBoxMargin}
                    width={xMultiplier * 4 - largeBoxMargin * 2}
                    height={yMultiplier * 4 - largeBoxMargin * 2}
                    fill={colorScheme[allElements[currEleIndex].family][0]}
                    stroke={colorScheme[allElements[currEleIndex].family][1]}
                    strokeWidth={largeBoxMargin}
                />
                <Text
                    x={leftTextMargin}
                    y={vertTextMargin + xMultiplier / 1.35}
                    text={allElements[currEleIndex].symbol}
                    fontStyle="bold"
                    fontSize={72}
                />
                <Text
                    x={leftTextMargin}
                    y={vertTextMargin}
                    text={allElements[currEleIndex].number}
                    fontStyle="bold"
                    fontSize={40}
                />
                <Text
                    x={leftTextMargin}
                    y={vertTextMargin + xMultiplier * 2}
                    text={allElements[currEleIndex].name}
                    fontSize={40}
                    fontFamily={
                        allElements[currEleIndex].name.length < 9
                            ? "Arial"
                            : "Arial Narrow"
                    }
                />
                <Text
                    x={leftTextMargin}
                    y={vertTextMargin + xMultiplier * 2.75}
                    text={allElements[currEleIndex].mass}
                    fontSize={40}
                />
                <Group x={sideX} y={sideY + yMultiplier * 4.25}>
                    <SideBarInfo />
                </Group>
            </Layer>
        </>
    );
}

export default SideBar;
