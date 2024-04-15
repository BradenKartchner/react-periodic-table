/* For the side bar containing expanded element information */

import { useState } from "react";
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
    let elementY = yMultiplier * 0.375;
    let sideX = elementX + xMultiplier * 18.5 + 54;
    let sideY = elementY;
    let largeBoxMargin = 8;

    // Margins for text
    let leftTextMargin = largeBoxMargin * 2.5 + sideX;
    let vertTextMargin = largeBoxMargin * 2.5 + sideY;

    // Side bar object for lookup text
    const sideBarObj = {
        name: "More info",
        family: "Family",
        mass: "Mass (amu)",
        electron_configuration: "Electron config",
        relative_electronegativity: "Electronegativity",
        electron_affinity: "Electron affinity",
        first_ionization_energy: "1st ionization energy",
        melting_point: "Melting point",
        boiling_point: "Boiling point",
    };

    // State vars for side bar highlight
    const [highlightX, setHighlightX] = useState(0);
    const [highlightY, setHighlightY] = useState(0);
    const [highlightStrokeColor, setHighlightStrokeColor] = useState("black");
    const [highlightWidth, setHighlightWidth] = useState(3);

    const handleMouseOver = (e) => {
        //console.log(props.activeElement);
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
                    {Object.entries(sideBarObj).map(([key, val], index) => {
                        return (
                            <SideBarInfo
                                x={0}
                                y={(yMultiplier / 2) * index}
                                leftText={val}
                                rightText={allElements[currEleIndex][key]}
                                key={index}
                                setHighlightX={setHighlightX}
                                setHighlightY={setHighlightY}
                                setHighlightStrokeColor={
                                    setHighlightStrokeColor
                                }
                            />
                        );
                    })}
                    <Rect
                        fillEnabled={false}
                        width={xMultiplier * 4}
                        height={yMultiplier / 2}
                        x={highlightX}
                        y={highlightY}
                        stroke={highlightStrokeColor}
                        strokeWidth={highlightWidth}
                        cornerRadius={2}
                    />
                </Group>
            </Layer>
        </>
    );
}

export default SideBar;
/*
<SideBarInfo
                        x={0}
                        y={0}
                        leftText={"name"}
                        rightText={allElements[currEleIndex].name}
                    /> 
*/
