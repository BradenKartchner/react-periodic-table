/* For the legend above the table containing all the families */
import { Layer, Group, Rect, Text } from "react-konva";
import colorScheme from "../EleColorScheme";

function LegendBar() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let elementX = xMultiplier * 0.5;
    let elementY = yMultiplier * 0.5;
    let legendX = elementX + xMultiplier * 2 + 6;
    let legendY = elementY;
    let backgroundWidth = xMultiplier * 9.5 + 27;
    let backgroundHeight = yMultiplier * 2.75 + 6;
    let backHeight = yMultiplier * 2.875 + 9;
    let startX = backgroundWidth / 6;
    let startY = (backgroundHeight * 1) / 5;
    let yOffset = (yMultiplier * 0.125) / 2 + 3;
    let famMargin = 3;
    let eleWidth = (backgroundWidth * 2) / 30 - famMargin;
    let eleHeight = (backgroundHeight * 4) / 5;
    let transitionEleHeight = eleHeight / 4 - famMargin;

    return (
        <>
            <Layer>
                <Group x={legendX + 0.25 * xMultiplier} y={legendY}>
                    <Rect
                        width={backgroundWidth}
                        height={backHeight}
                        fill="rgb(48, 48, 48)"
                    />
                    <Rect
                        width={eleWidth * 6 + famMargin * 5}
                        height={backgroundHeight / 5 - famMargin}
                        x={startX}
                        y={yOffset}
                        fill="black"
                        stroke="white"
                        cornerRadius={2}
                        dash={[5, 10]}
                        dashEnabled="true"
                    />
                    <Text
                        width={eleWidth * 6 + famMargin * 5}
                        height={backgroundHeight / 5 - famMargin}
                        x={startX}
                        y={yOffset}
                        fill="white"
                        text="Metals"
                        verticalAlign="middle"
                        align="center"
                        fontSize={18}
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth * 3 + famMargin * 2}
                        height={backgroundHeight / 5 - famMargin}
                        x={startX + eleWidth * 7 + famMargin * 7}
                        y={yOffset}
                        fill="black"
                        stroke="white"
                        cornerRadius={2}
                        dash={[5, 10]}
                        dashEnabled="true"
                    />
                    <Text
                        width={eleWidth * 3 + famMargin * 2}
                        height={backgroundHeight / 5 - famMargin}
                        x={startX + eleWidth * 7 + famMargin * 7}
                        y={yOffset}
                        fill="white"
                        text="Nonmetals"
                        verticalAlign="middle"
                        align="center"
                        fontSize={18}
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX}
                        y={startY + yOffset}
                        fill={colorScheme["Alkali Metals"][0]}
                    />
                    <Text
                        width={eleHeight}
                        height={eleWidth}
                        x={startX + eleWidth}
                        y={startY + yOffset}
                        rotation={90}
                        text="Alkali Metals"
                        fill="black"
                        align="center"
                        verticalAlign="middle"
                        fontSize={14}
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX + eleWidth + famMargin}
                        y={startY + yOffset}
                        fill={colorScheme["Alkaline Earth Metals"][0]}
                    />
                    <Text
                        width={eleHeight}
                        height={eleWidth}
                        x={startX + eleWidth * 2 + famMargin}
                        y={startY + yOffset}
                        rotation={90}
                        text="Alkaline Earth Metals"
                        fill="black"
                        align="center"
                        verticalAlign="middle"
                        fontSize={14}
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={startY + yOffset}
                        fill={colorScheme["Transition Metals"][0]}
                    />
                    <Text
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={startY + yOffset}
                        text="Transition Metals"
                        align="center"
                        verticalAlign="middle"
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={
                            startY +
                            transitionEleHeight +
                            (famMargin * 4) / 3 +
                            yOffset
                        }
                        fill={colorScheme["Transactinides"][0]}
                    />
                    <Text
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={
                            startY +
                            transitionEleHeight +
                            (famMargin * 4) / 3 +
                            yOffset
                        }
                        text="Transactinides"
                        align="center"
                        verticalAlign="middle"
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={
                            startY +
                            transitionEleHeight * 2 +
                            (famMargin * 2 * 4) / 3 +
                            yOffset
                        }
                        fill={colorScheme["Lanthanides"][0]}
                    />
                    <Text
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={
                            startY +
                            transitionEleHeight * 2 +
                            (famMargin * 2 * 4) / 3 +
                            yOffset
                        }
                        text="Lanthanides"
                        align="center"
                        verticalAlign="middle"
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={
                            startY +
                            transitionEleHeight * 3 +
                            (famMargin * 3 * 4) / 3 +
                            yOffset
                        }
                        fill={colorScheme["Actinides"][0]}
                    />
                    <Text
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={
                            startY +
                            transitionEleHeight * 3 +
                            (famMargin * 3 * 4) / 3 +
                            yOffset
                        }
                        text="Actinides"
                        align="center"
                        verticalAlign="middle"
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX + eleWidth * 5 + famMargin * 5}
                        y={startY + yOffset}
                        fill={colorScheme["Post-transition Metals"][0]}
                    />
                    <Text
                        width={eleHeight}
                        height={eleWidth}
                        x={startX + eleWidth * 6 + famMargin * 5}
                        y={startY + yOffset}
                        rotation={90}
                        text="Post-transition Metals"
                        fill="black"
                        align="center"
                        verticalAlign="middle"
                        fontSize={14}
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth}
                        height={backgroundHeight}
                        x={startX + eleWidth * 6 + famMargin * 6}
                        y={0 + yOffset}
                        fill={colorScheme["Metalloids"][0]}
                    />
                    <Text
                        width={backgroundHeight}
                        height={eleWidth}
                        x={startX + eleWidth * 7 + famMargin * 6}
                        y={0 + yOffset}
                        rotation={90}
                        text="Metalloids"
                        fill="black"
                        align="center"
                        verticalAlign="middle"
                        fontSize={14}
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX + eleWidth * 7 + famMargin * 7}
                        y={startY + yOffset}
                        fill={colorScheme["Reactive Nonmetals"][0]}
                    />
                    <Text
                        width={eleHeight}
                        height={eleWidth}
                        x={startX + eleWidth * 8 + famMargin * 7}
                        y={startY + yOffset}
                        rotation={90}
                        text="Reactive Nonmetals"
                        fill="black"
                        align="center"
                        verticalAlign="middle"
                        fontSize={12}
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX + eleWidth * 8 + famMargin * 8}
                        y={startY + yOffset}
                        fill={colorScheme["Halogens"][0]}
                    />
                    <Text
                        width={eleHeight}
                        height={eleWidth}
                        x={startX + eleWidth * 9 + famMargin * 8}
                        y={startY + yOffset}
                        rotation={90}
                        text="Halogens"
                        fill="black"
                        align="center"
                        verticalAlign="middle"
                        fontSize={14}
                        fontStyle="bold"
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX + eleWidth * 9 + famMargin * 9}
                        y={startY + yOffset}
                        fill={colorScheme["Noble Gases"][0]}
                    />
                    <Text
                        width={eleHeight}
                        height={eleWidth}
                        x={startX + eleWidth * 10 + famMargin * 9}
                        y={startY + yOffset}
                        rotation={90}
                        text="Noble Gases"
                        fill="black"
                        align="center"
                        verticalAlign="middle"
                        fontSize={14}
                        fontStyle="bold"
                    />
                </Group>
            </Layer>
        </>
    );
}

export default LegendBar;
