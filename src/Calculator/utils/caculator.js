// const simpleCalculate = (formula) => {
//   //TODO: not yet implemented
//   // FIXME:
// };

// const findInternalParentheses = (formula) => {
//   //TODO: not yet implemented
// };

// export function calculate(formula = "") {
//   const [firstIndex, lastIndex] = findInternalParentheses(formula);

//   // TODO: do this while any Parentheses exists

//   const nonParenthesesFormula = formula.substring(firstIndex + 1, lastIndex);
//   const result = simpleCalculate(nonParenthesesFormula);

//   const part1 = formula.substring(0, firstIndex - 1);
//   const part2 = formula.substring(lastIndex + 1);
//   const newFormula = part1 + result + part2;

//   return formula;
// }

// export function main() {
//   console.log(simpleCalculate("2+3"));
// }


// 
const infixTopostfix = (infixexpr) => {
  let prec = {};

  prec["*"] = 3;
  prec["/"] = 3;
  prec["+"] = 2;
  prec["-"] = 2;
  prec["("] = 1;

  let opStack = [];
  let postFixList = [];

  let tokenList = infixexpr.split();
  let NumberList = "0123456789".split("");
  let topToken;

  for (let i = 0; i < tokenList.length; i++) {
    NumberList.forEach((num) => {
      if (tokenList[i] === num) postFixList.push(tokenList[i]);
      else if (tokenList[i] === "(") opStack.push(tokenList[i]);
      else if (tokenList[i] === ")") {
        topToken = opStack.pop();
        while (topToken != "(") {
          postFixList.push(topToken);
          topToken = opStack.pop();
        }
      } else {
        while (
          opStack.length != 0 &&
          prec[opStack[opStack.length - 1]] >= prec[tokenList[i]]
        ) {
          postFixList.push(opStack.pop());
        }

        opStack.push(tokenList[i]);
      }
    });
  }

  while (opStack.length != 0) {
    postFixList.push(opStack.pop());
  }

  return postFixList.join("");

}


export function main() {
  console.log(infixTopostfix("3+2"))
}

