const first = (input: string) => {
//  const [freshRanges, availableIngredients] = input.trim().split('\n\n');

//  let amountOfFreshIngredients = 0;

//  availableIngredients
//    .split('\n')
//    .forEach((ingredient: any) => {
//      // Check if id is in any of the fresh ranges
//      const isInFreshRanges = freshRanges.split('\n').some(range => {
//         const [start, end] = range.split('-').map(Number);
//         return ingredient >= start && ingredient <= end;
//      });
//      if (isInFreshRanges) {
//         amountOfFreshIngredients++;
//      }
//    });

//    return amountOfFreshIngredients;
};

const second = (input: string) => {
    const ranges = input
        .trim()
        .split('\n')
        .map(line => {
            const [start, end] = line.split('-').map(Number);
            return [start, end] as [number, number];
        });

    // Sort ranges by start
    ranges.sort((a, b) => a[0] - b[0]);

    let merged: [number, number][] = [];
    for (const [start, end] of ranges) {
        if (!merged.length || start > merged[merged.length - 1][1] + 1) {
            merged.push([start, end]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
        }
    }

    // Calculate unique ingredient count from merged ranges
    let total = 0;
    for (const [start, end] of merged) {
        total += end - start + 1;
    }

    // console.log(merged); // for debugging if desired
    return total;
};

export { first, second };