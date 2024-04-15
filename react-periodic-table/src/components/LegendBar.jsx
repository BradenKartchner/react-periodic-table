/* For the legend above the table containing all the families */
import { Layer, Group, Rect } from "react-konva";
import colorScheme from "../EleColorScheme";

function LegendBar() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let elementX = xMultiplier * 0.5;
    let elementY = yMultiplier * 0.75;
    let legendX = elementX + xMultiplier * 2 + 6;
    let legendY = elementY;
    let backgroundWidth = xMultiplier * 9.5 + 27;
    let backgroundHeight = yMultiplier * 2.75 + 6;
    let startX = backgroundWidth / 6;
    let startY = (backgroundHeight * 1) / 5;
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
                        height={backgroundHeight}
                        fill="black"
                    />
                    <Rect
                        width={eleWidth * 6 + famMargin * 5}
                        height={backgroundHeight / 5 - famMargin}
                        x={startX}
                        fill="black"
                        stroke="white"
                        cornerRadius={2}
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX}
                        y={startY}
                        fill={colorScheme["Alkali Metals"][0]}
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX + eleWidth + famMargin}
                        y={startY}
                        fill={colorScheme["Alkaline Earth Metals"][0]}
                    />
                    <Rect
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={startY}
                        fill={colorScheme["Transition Metals"][0]}
                    />
                    <Rect
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={startY + transitionEleHeight + (famMargin * 4) / 3}
                        fill={colorScheme["Transactinides"][0]}
                    />
                    <Rect
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={
                            startY +
                            transitionEleHeight * 2 +
                            (famMargin * 2 * 4) / 3
                        }
                        fill={colorScheme["Lanthanides"][0]}
                    />
                    <Rect
                        width={eleWidth * 3 + famMargin * 2}
                        height={transitionEleHeight}
                        x={startX + eleWidth * 2 + famMargin * 2}
                        y={
                            startY +
                            transitionEleHeight * 3 +
                            (famMargin * 3 * 4) / 3
                        }
                        fill={colorScheme["Actinides"][0]}
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX + eleWidth * 5 + famMargin * 5}
                        y={startY}
                        fill={colorScheme["Post-transition Metals"][0]}
                    />
                    <Rect
                        width={eleWidth}
                        height={backgroundHeight}
                        x={startX + eleWidth * 6 + famMargin * 6}
                        y={0}
                        fill={colorScheme["Metalloids"][0]}
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX + eleWidth * 7 + famMargin * 7}
                        y={startY}
                        fill={colorScheme["Reactive Nonmetals"][0]}
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX + eleWidth * 8 + famMargin * 8}
                        y={startY}
                        fill={colorScheme["Halogens"][0]}
                    />
                    <Rect
                        width={eleWidth}
                        height={eleHeight}
                        x={startX + eleWidth * 9 + famMargin * 9}
                        y={startY}
                        fill={colorScheme["Noble Gases"][0]}
                    />
                </Group>
            </Layer>
        </>
    );
}

export default LegendBar;
