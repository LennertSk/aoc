import readFile from './utils/readFile.js';

const args = process.argv.slice(2);
const dayToSolve = args[0];

if (!dayToSolve) {
  console.error('No day specified run with npm run dev {day}');
  process.exit(1);
}
console.log(`Solving Day #${args[0]}`);

let input = '';
const puzzleName = args[0];
try {
  const puzzlePath = `src/2025/${puzzleName}`;
  input = await readFile(`${puzzlePath}/input.txt`);
} catch (error) {
  console.error(error);
  process.exit(1);
}
const { first, second } = await import(
  `./2025/${puzzleName}/Puzzle.ts`
);

console.log(first(input));
console.log(second(input));