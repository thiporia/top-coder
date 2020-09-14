/*
  저작권 문제로 문제를 기입하지 않습니다.
 */
{
  function encrypt(numbers = []) {
    const newNumbers = [...numbers];
    let answer = 0;
    for (let i = 0; i < newNumbers.length; i += 1) {
      const temp = newNumbers[i] + 1;
      let cmpAnswer = 1;
      for (let j = 0; j < newNumbers.length; j += 1) {
        cmpAnswer = i !== j ? cmpAnswer * newNumbers[j] : cmpAnswer * temp;
      }
      answer = Math.max(answer, cmpAnswer);
    }
    return answer;
  }
  console.log(encrypt([1, 2, 3]));
  console.log(encrypt([1, 1, 1, 2]));
  console.log(encrypt([1, 3, 2, 1, 1, 3]));
  console.log(encrypt([1000, 999, 998, 997, 996, 995]));
}

{
  function encrypt(numbers = []) {
    const newNumbers = [...numbers];
    newNumbers.sort((a, b) => a - b);
    newNumbers[0] += 1;
    const answer = newNumbers.reduce((prev, cur) => prev * cur, 1);
    return answer;
  }
  console.log(encrypt([1, 2, 3]));
  console.log(encrypt([1, 1, 1, 2]));
  console.log(encrypt([1, 3, 2, 1, 1, 3]));
  console.log(encrypt([1000, 999, 998, 997, 996, 995]));
}