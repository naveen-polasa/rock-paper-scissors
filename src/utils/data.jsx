import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";

export const data = [
  {
    id: 1,
    name: "rock",
    img: rock,
  },
  {
    id: 2,
    name: "paper",
    img: paper,
  },
  {
    id: 3,
    name: "scissors",
    img: scissors,
  },
];

export const checkResult = (op, op1) => {
  let final = "";
  if (op === op1) {
    final = "Game Is TIE!";
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
