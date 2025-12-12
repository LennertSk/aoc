const first = (input: string) => {
    const inputArr = input.trim().split("\n");

    const toiletPaper = "@";
    let amountOfFindableToiletPaper = 0;

    let mutableGrid: Array<Array<string>> = inputArr.map(row => row.split(""));

    const y = mutableGrid.length;
    const x = mutableGrid[0].length;

    for (let rowIdx = 0; rowIdx < y; rowIdx++) {
        for (let colIdx = 0; colIdx < x; colIdx++) {
            if (mutableGrid[rowIdx][colIdx] === toiletPaper) {
                let amountOfToiletPaper = 0;

                const positions = [
                    [rowIdx - 1, colIdx - 1],
                    [rowIdx - 1, colIdx],
                    [rowIdx - 1, colIdx + 1],
                    [rowIdx, colIdx - 1],
                    [rowIdx, colIdx + 1],
                    [rowIdx + 1, colIdx - 1],
                    [rowIdx + 1, colIdx],
                    [rowIdx + 1, colIdx + 1],
                ];

                for (const [nRow, nCol] of positions) {
                    if (
                        nRow < 0 || nRow >= y ||
                        nCol < 0 || nCol >= x
                    ) {
                        continue;
                    }
                    if (mutableGrid[nRow][nCol] === toiletPaper) {
                        amountOfToiletPaper++;
                    }
                }

                // Place an "x" if there are more than 3 "@" in the 8 positions around
                if (amountOfToiletPaper < 4) {
                    amountOfFindableToiletPaper++;
                }
            }
        }
    }

    return amountOfFindableToiletPaper;
};

const second = (input: string) => {
    const inputArr = input.trim().split("\n");
    let mutableGrid: Array<Array<string>> = inputArr.map(row => row.split(""));

    function countIsolatedToiletPaper(grid: Array<Array<string>>): { count: number, grid: Array<Array<string>> } {
        const y = grid.length;
        const x = grid[0].length;
        let amountOfToiletPaper = 0;
        for (let rowIdx = 0; rowIdx < y; rowIdx++) {
            for (let colIdx = 0; colIdx < x; colIdx++) {
                if (grid[rowIdx][colIdx] === "@") {
                    let neighborCount = 0;
                    const positions = [
                        [rowIdx - 1, colIdx - 1],
                        [rowIdx - 1, colIdx],
                        [rowIdx - 1, colIdx + 1],
                        [rowIdx, colIdx - 1],
                        [rowIdx, colIdx + 1],
                        [rowIdx + 1, colIdx - 1],
                        [rowIdx + 1, colIdx],
                        [rowIdx + 1, colIdx + 1],
                    ];
                    for (const [nRow, nCol] of positions) {
                        if (
                            nRow < 0 || nRow >= y ||
                            nCol < 0 || nCol >= x
                        ) {
                            continue;
                        }
                        if (grid[nRow][nCol] === "@") {
                            neighborCount++;
                        }
                    }
                    // Only count if there are fewer than 4 adjacent @
                    if (neighborCount < 4) {
                        amountOfToiletPaper++;
                    }
                }
            }
        }
        return { count: amountOfToiletPaper, grid };
    }

    const { count: amountOfToiletPaper, grid: finalGrid } = countIsolatedToiletPaper(mutableGrid);
    return amountOfToiletPaper;
};

export { first, second };