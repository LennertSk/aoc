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
    const availableIngredients = input.trim().split('\n');

    let freshRanges: number[] = [];

    availableIngredients.forEach(range => {
        const [start, end] = range.split('-').map(Number);

        for (let i = start; i <= end; i++) {
            if (!freshRanges.includes(i)) {
                freshRanges.push(i);
            }
        }
    });

    console.log(freshRanges);
    return freshRanges.length;
};

export { first, second };