const simpleCalculate = (formula) => {
  //TODO: not yet implemented
  // FIXME:
};

const findInternalParentheses = (formula) => {
  //TODO: not yet implemented
};

export function calculate(formula = "") {
  const [firstIndex, lastIndex] = findInternalParentheses(formula);

  // TODO: do this while any Parentheses exists

  const nonParenthesesFormula = formula.substring(firstIndex + 1, lastIndex);
  const result = simpleCalculate(nonParenthesesFormula);

  const part1 = formula.substring(0, firstIndex - 1);
  const part2 = formula.substring(lastIndex + 1);
  const newFormula = part1 + result + part2;

  return formula;
}

export function main() {
  console.log(simpleCalculate("2+3"));
}

