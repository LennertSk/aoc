const first = (input: string) => {
  const ranges = input.split(",");

  let total = 0;

  for (const range of ranges) {
    const tokens = range.split("-");

    const begin = parseInt(tokens[0]);
    const end = parseInt(tokens[1]);

    for (let number = begin; number <= end; number++) {
      const token = number.toString();
      const tokenLength = token.length;

      // Check if length is even
      if (tokenLength % 2 === 0) {
        const halfLength = tokenLength / 2;
        const a = token.slice(0, halfLength);
        const b = token.slice(halfLength);

        if (a === b) {
          total += number;
        }
      }
    }
  }

  return 'first solution: ' + total;
};

const expectedFirstSolution = "solution 1";

const second = (input: string) => {
  const ranges = input.split(",");

  let total = 0;

  for (const range of ranges) {
    const tokens = range.split("-");

    const begin = parseInt(tokens[0]);
    const end = parseInt(tokens[1]);

    for (let number = begin; number <= end; number++) {
      const token = number.toString();
      const tokenLength = token.length;

      // Check all possible pattern lengths (1 to tokenLength - 1)
      for (let len = 1; len < tokenLength; len++) {
        if (checkNumber(token, tokenLength, len)) {
          total += number;
          break; // Found a match, no need to check other lengths
        }
      }
    }
  }

  return 'second solution: ' + total;
};

function checkNumber(token: string, tokenLength: number, len: number): boolean {
  // Pattern length must be less than token length and token must be divisible by pattern length
  if (tokenLength <= len || tokenLength % len !== 0) {
    return false;
  }

  const pattern = token.slice(0, len);
  const repetitions = tokenLength / len;

  // Check if pattern repeats throughout the token
  for (let i = 1; i < repetitions; i++) {
    const start = i * len;
    const segment = token.slice(start, start + len);
    if (pattern !== segment) {
      return false;
    }
  }

  return true;
}

const expectedSecondSolution = "solution 2";

export { expectedFirstSolution, expectedSecondSolution, first, second };
