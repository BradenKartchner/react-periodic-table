/* Includes: labels for family and period numbers, labels to show where
 * Lanthanides and Actinides fit into the table
 */

import { Layer, Group, Rect, Text } from "react-konva";

function LabelsLayer() {
    let width = window.innerWidth;
    let height = window.innerHeight;

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
                        width={xMultiplier}
                        height={yMultiplier / 2}
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
                <Group>
                    <Rect
                        width={xMultiplier}
                        height={yMultiplier * 4.5 + 10.5}
                        x={startX + 2 * xMultiplier + 6}
                        y={startY + 5 * yMultiplier + 15}
                        fill="white"
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