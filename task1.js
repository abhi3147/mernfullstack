function reverseNumber(num) {
    const strNum = num.toString();
    const reversedStrNum = strNum.split("").reverse().join("");
    const reversedNum = parseInt(reversedStrNum);

    return reversedNum;
  }