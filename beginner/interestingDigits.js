/*
  저작권 문제로 문제를 기입하지 않습니다.
 */
{
  function interestingDigits(base) {
    const answer = [];
    for (let n = 2; n < base; n += 1) {
      let ok = true;
      for (let k1 = 0; k1 < base; k1 += 1) {
        for (let k2 = 0; k2 < base; k2 += 1) {
          for (let k3 = 0; k3 < base; k3 += 1) {
            if ((k1 + (k2 * base) + (k3 * base * base)) % n === 0 && (k1 + k2 + k3) % n !== 0) {
              ok = false;
              break;
            }
          }
          if (!ok) break;
        }
        if (!ok) break;
      }
      if (ok) answer.push(n);
    }
    return answer;
  }

  console.log(interestingDigits(10));
  console.log(interestingDigits(3));
  console.log(interestingDigits(7));
}

{
  function interestingDigits(base) {
    const answer = [];
    for (let n = 2; n < base; n += 1) {
      if (((base - 1) % n) === 0) answer.push(n);
    }
    return answer;
  }

  console.log(interestingDigits(10));
  console.log(interestingDigits(3));
  console.log(interestingDigits(7));
}