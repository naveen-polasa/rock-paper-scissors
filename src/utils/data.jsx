export const data = [
  {
    id: 1,
    name: "rock",
    img: "./src/assets/rock.png",
  },
  {
    id: 2,
    name: "paper",
    img: "./src/assets/paper.png",
  },
  {
    id: 3,
    name: "scissors",
    img: "./src/assets/scissors.png",
  },
];

export const checkResult = (op, op1) => {
  let final = "";
  if (op === op1) {
    final = "Game is TIE!";
  } else if (
    (op == 1 && op1 == 2) ||
    (op == 2 && op1 == 3) ||
    (op == 3 && op1 == 1)
  ) {
    final = "Computer WON!";
  } else {
    final = "You WON! 🎉";
  }
  return final;
};
