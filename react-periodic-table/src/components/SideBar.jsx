/* For the side bar containing expanded element information */

import { useState } from "react";
import { Layer, Group, Rect, Text } from "react-konva";
import allElements from "../ElementData";
import colorScheme from "../EleColorScheme";
import SideBarInfo from "./SideBarInfo";
import { Html } from "react-konva-utils";

function SideBar(props) {
    let width = window.innerWidth;
    let height = window.innerHeight;

    // vars for side bar layout
    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let elementX = xMultiplier * 0.5;
    let elementY = yMultiplier * 0.375;
    let sideX = elementX + xMultiplier * 18.5 + 54;
    let sideY = elementY;
    let largeBoxMargin = 8;

    // vars for popup wiki info box
    let popUpHeight = (height * 3) / 4;
    let popUpWidth = (width * 3) / 4;
    let popUpX = width / 12;
    let popUpY = height / 12;
    let buttonWidth = (xMultiplier * 2) / 3;
    let buttonMargin = 10;
    let buttonX = popUpX + popUpWidth + buttonMargin;
    let buttonY = popUpY - buttonMargin - buttonWidth;
    let boxStrokeWidth = 10;

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

    // State vars for wiki pop up
    const [wikiActive, setWikiActive] = useState(false);

    const handleMouseOver = (e) => {
        //console.log(props.activeElement);
    };

    const handleXClick = (eve) => {
        setWikiActive((currState) => !currState);
    };

    let currEleIndex = -1;

    // search allElements for the correct element index
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].name == props.activeElement) {
            currEleIndex = i;
        }
    }

    if (!wikiActive) {
        return (
            <>
                <Layer>
                    <Rect
                        x={sideX}
                        y={sideY}
                        height={yMultiplier * 9.5 + 8.5 * 3}
                        width={xMultiplier * 4}
                        fill="black"
                        onMouseOver={handleMouseOver}
                    />
                    <Rect
                        x={sideX + largeBoxMargin}
                        y={sideY + largeBoxMargin}
                        width={xMultiplier * 4 - largeBoxMargin * 2}
                        height={yMultiplier * 4 - largeBoxMargin * 2}
                        fill={colorScheme[allElements[currEleIndex].family][0]}
                        stroke={
                            colorScheme[allElements[currEleIndex].family][1]
                        }
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
                                    setWikiActive={setWikiActive}
                                    wikiActive={wikiActive}
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
    } else {
        return (
            <>
                <Layer>
                    <Rect
                        x={sideX}
                        y={sideY}
                        height={yMultiplier * 9.5 + 8.5 * 3}
                        width={xMultiplier * 4}
                        fill="black"
                        onMouseOver={handleMouseOver}
                    />
                    <Rect
                        x={sideX + largeBoxMargin}
                        y={sideY + largeBoxMargin}
                        width={xMultiplier * 4 - largeBoxMargin * 2}
                        height={yMultiplier * 4 - largeBoxMargin * 2}
                        fill={colorScheme[allElements[currEleIndex].family][0]}
                        stroke={
                            colorScheme[allElements[currEleIndex].family][1]
                        }
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
                    <Rect
                        fill="black"
                        x={0}
                        y={0}
                        width={width}
                        height={height}
                        opacity={0.5}
                    />
                    <Rect
                        x={popUpX}
                        y={popUpY}
                        width={popUpWidth}
                        height={popUpHeight}
                        fill="white"
                        stroke="lightgrey"
                        strokeWidth={boxStrokeWidth}
                        shadowColor="black"
                        shadowOpacity={0.5}
                        shadowBlur={0}
                        shadowOffset={{ x: 10, y: 10 }}
                    />
                    <Rect
                        x={buttonX}
                        y={buttonY}
                        width={buttonWidth}
                        height={buttonWidth}
                        fill="lightgrey"
                        cornerRadius={4}
                    />
                    <Text
                        x={buttonX}
                        y={buttonY}
                        width={buttonWidth}
                        height={buttonWidth}
                        text="X"
                        align="center"
                        verticalAlign="middle"
                        fontStyle="bold"
                        fontSize={24}
                        onClick={handleXClick}
                    />
                    <Html>
                        <iframe
                            style={{
                                marginTop: popUpY + boxStrokeWidth + "px",
                                marginLeft: popUpX + boxStrokeWidth + "px",
                            }}
                            src={allElements[currEleIndex].wiki_source}
                            width={popUpWidth - 2 * boxStrokeWidth}
                            height={popUpHeight - 2 * boxStrokeWidth}
                        ></iframe>
                    </Html>
                </Layer>
            </>
        );
    }
}

export default SideBar;

// `margin-top:${popUpY}px; margin-left:${popUpX};`
/*
<SideBarInfo
                        x={0}
                        y={0}
                        leftText={"name"}
                        rightText={allElements[currEleIndex].name}
                    /> 
*/
