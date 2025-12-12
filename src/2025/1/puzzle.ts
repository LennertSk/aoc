const first = (input: string) => {
  const instructions = input.trim().split("\n");

  let pos = 50,
    passesZeroTimes = 0,
    stopsAtZeroTimes = 0;

  instructions.forEach((instruction) => {
    const turn = parseInt(instruction.replaceAll("L", "-").replaceAll("R", ""));

    const absTurn = Math.abs(turn);
    const distanceToZero = (turn < 0 ? pos : 100 - pos) % 100;

    if (absTurn >= distanceToZero) {
      passesZeroTimes +=
        Math.floor((absTurn - distanceToZero) / 100) + (pos === 0 ? 0 : 1);
    }

    pos = (pos + (turn % 100) + 100) % 100;

    if (pos === 0) {
      stopsAtZeroTimes++;
    }
  });

  return stopsAtZeroTimes;
};

const expectedFirstSolution = "solution 1";

const second = (input: string) => {
  const instructions = input.trim().split("\n");

  let pos = 50,
    passesZeroTimes = 0;

  instructions.forEach((instruction) => {
    const turn = parseInt(instruction.replaceAll("L", "-").replaceAll("R", ""));

    const absTurn = Math.abs(turn);
    const distanceToZero = (turn < 0 ? pos : 100 - pos) % 100;

    if (absTurn >= distanceToZero) {
      passesZeroTimes +=
        Math.floor((absTurn - distanceToZero) / 100) + (pos === 0 ? 0 : 1);
    }

    pos = (pos + (turn % 100) + 100) % 100;
  });

  return passesZeroTimes;
};

const expectedSecondSolution = "solution 2";

export { expectedFirstSolution, expectedSecondSolution, first, second };
