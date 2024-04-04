/* For the side bar containing expanded element information */

import { Layer, Group, Rect, Text } from "react-konva";
import allElements from "../ElementData";
import colorScheme from "../EleColorScheme";

function SideBar(props) {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let elementX = xMultiplier * 0.5;
    let elementY = yMultiplier * 0.75;
    let sideX = elementX + xMultiplier * 18.5 + 54;
    let sideY = elementY;

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
                    fill="lightblue"
                    onMouseOver={handleMouseOver}
                />
                <Rect
                    x={sideX}
                    y={sideY}
                    width={xMultiplier * 4}
                    height={yMultiplier * 4}
                    fill={
                        currEleIndex == -1
                            ? null
                            : colorScheme[allElements[currEleIndex].family]
                    }
                />
                <Text
                    x={sideX}
                    y={sideY}
                    width={xMultiplier * 4}
                    height={yMultiplier * 4}
                    text={
                        currEleIndex == -1
                            ? null
                            : allElements[currEleIndex].symbol
                    }
                    align="center"
                    verticalAlign="middle"
                    fontStyle="bold"
                    fontSize={32}
                />
            </Layer>
        </>
    );
}

export default SideBar;
