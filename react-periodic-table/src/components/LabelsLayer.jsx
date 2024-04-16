/* Includes: labels for family and period numbers, labels to show where
 * Lanthanides and Actinides fit into the table
 */

import { Layer, Group, Rect, Text } from "react-konva";

function LabelsLayer() {
    let width;
    let height;
    if (window.innerWidth < 1400 || window.innerWidth > 1600) {
        width = 1422;
    } else {
        width = window.innerWidth;
    }
    if (window.innerHeight < 700 || window.innerHeight > 800) {
        height = 710;
    } else {
        height = window.innerHeight;
    }

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let startX = xMultiplier * 0.5;
    let startY = yMultiplier * 0.75;

    const familyLabels = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ];

    const periodLabels = [1, 2, 3, 4, 5, 6, 7];

    return (
        <>
            <Layer>
                {familyLabels.map((fam) => (
                    <Group
                        width={xMultiplier}
                        height={yMultiplier / 2}
                        x={startX + (fam - 1) * xMultiplier + (fam - 1) * 3}
                        y={0}
                        key={fam}
                    >
                        <Text
                            text={fam}
                            fontSize={16}
                            fontStyle="bold"
                            align="center"
                            verticalAlign="middle"
                            width={xMultiplier}
                            height={yMultiplier / 2}
                            fill="white"
                        />
                    </Group>
                ))}
                {periodLabels.map((per) => (
                    <Group
                        width={xMultiplier / 2}
                        height={yMultiplier}
                        x={0}
                        y={startY + (per - 1) * yMultiplier + (per - 1) * 3}
                        key={per}
                    >
                        <Text
                            text={per}
                            fontSize={16}
                            fontStyle="bold"
                            align="center"
                            verticalAlign="middle"
                            width={xMultiplier / 2}
                            height={yMultiplier}
                            fill="white"
                        />
                    </Group>
                ))}
                <Group
                    x={startX + 2 * xMultiplier + 6}
                    y={startY + 5 * yMultiplier + 15}
                >
                    <Rect
                        width={xMultiplier}
                        height={yMultiplier * 4.5 + 10.5}
                        fill="darkslateblue"
                    />
                    <Text
                        text="57-71"
                        fill="white"
                        width={xMultiplier}
                        align="center"
                        fontSize={14}
                        height={yMultiplier}
                        verticalAlign="middle"
                    />
                    <Text
                        text="89-103"
                        fill="white"
                        y={yMultiplier + 3}
                        width={xMultiplier}
                        height={yMultiplier}
                        align="center"
                        verticalAlign="middle"
                        fontSize={14}
                    />
                    <Text
                        text="6"
                        fill="white"
                        fontStyle="bold"
                        fontSize={16}
                        width={xMultiplier / 2}
                        height={yMultiplier}
                        y={yMultiplier * 2.5 + 7.5}
                        x={xMultiplier / 2}
                        align="center"
                        verticalAlign="middle"
                    />
                    <Text
                        text="7"
                        fill="white"
                        fontStyle="bold"
                        fontSize={16}
                        width={xMultiplier / 2}
                        height={yMultiplier}
                        y={yMultiplier * 3.5 + 10.5}
                        x={xMultiplier / 2}
                        align="center"
                        verticalAlign="middle"
                    />
                </Group>
            </Layer>
        </>
    );
}

export default LabelsLayer;

/* 
    <Group
                        width={xMultiplier}
                        height={yMultiplier / 2}
                        x={startX + (fam - 1) * xMultiplier + (fam - 1) * 3}
                        y={startY}
                    >
                        <Rect
                            fill="lightblue"
                            width={xMultiplier}
                            height={yMultiplier / 2}
                        />
                    </Group>;
*/

/* 
    {familyLabels.map((num) => {
                    <Group
                        width={xMultiplier}
                        height={yMultiplier / 2}
                        x={startX + (num - 1) * xMultiplier + (num - 1) * 3}
                        y={startY}
                    >
                        <Rect
                            fill="lightblue"
                            width={xMultiplier}
                            height={yMultiplier}
                        />
                    </Group>;
                })}
*/
