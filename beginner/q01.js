/*
  저작권 문제로 문제를 기입하지 않습니다.
 */
{
  function kiwiJuiceEasy(capacities = [], bottles = [], fromId = [], toId = []) {
    const newBottles = [...bottles];
    for (let i = 0; i < fromId.length; i += 1) {
      const f = fromId[i];
      const t = toId[i];

      const space = capacities[t] - newBottles[t];

      if (newBottles[f] <= space) {
        const vol = newBottles[f];
        newBottles[t] += vol;
        newBottles[f] = 0;
      } else {
        const vol = space;
        newBottles[t] += vol;
        newBottles[f] -= vol;
      }
    }
    return newBottles;
  }

  console.log(kiwiJuiceEasy([20, 20], [5, 8], [0], [1]));
}

{
  function kiwiJuiceEasy(capacities = [], bottles = [], fromId = [], toId = []) {
    const newBottles = [...bottles];
    for (let i = 0; i < fromId.length; i += 1) {
      const f = fromId[i];
      const t = toId[i];

      const vol = Math.min(newBottles[f], capacities[t] - newBottles[t]);

      newBottles[f] -= vol;
      newBottles[t] += vol;
    }
    return newBottles;
  }
  console.log(kiwiJuiceEasy([20, 20], [5, 8], [0], [1]));
}