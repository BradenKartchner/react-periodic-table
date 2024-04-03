/* Includes: labels for family and period numbers, labels to show where
 * Lanthanides and Actinides fit into the table
 */

import { Layer, Group, Rect } from "react-konva";

function LabelsLayer() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xMultiplier = width / 25;
    let yMultiplier = height / 12;
    let startX = 0;
    let startY = 0;

    const familyLabels = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ];

    return (
        <>
            <Layer>
                {familyLabels.map((fam) => {
                    <Group
                        width={xMultiplier}
                        height={yMultiplier / 2}
                        x={startX + (fam - 1) * xMultiplier + (fam - 1) * 3}
                        y={startY}
                    >
                        <Rect
                            fill="lightblue"
                            width={xMultiplier}
                            height={yMultiplier}
                        />
                    </Group>;
                })}
            </Layer>
        </>
    );
}

export default LabelsLayer;

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
