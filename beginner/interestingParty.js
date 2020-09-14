/*
  저작권 문제로 문제를 기입하지 않습니다.
 */
{
  function interestingParty(first = [], second = []) {
    const interestingObj = {};

    for (let i = 0; i < first.length; i += 1) {
      if (typeof interestingObj[first[i]] === 'undefined') {
        interestingObj[first[i]] = 1;
      } else {
        interestingObj[first[i]] += 1;
      }
    }

    for (let i = 0; i < second.length; i += 1) {
      if (typeof interestingObj[second[i]] === 'undefined') {
        interestingObj[second[i]] = 1;
      } else {
        interestingObj[second[i]] += 1;
      }
    }
    
    return  Math.max(...Object.values(interestingObj));
  }
  console.log(interestingParty(['f', 'g', 's', 'f'], ['h', 'f', 'f', 'b']));
}

{
  function interestingParty(first = [], second = []) {
    const interestingObj = {};

    for (let i = 0; i < first.length; i += 1) {
      interestingObj[first[i]] = 0;
      interestingObj[second[i]] = 0;
    }

    for (let i = 0; i < first.length; i += 1) {
      interestingObj[first[i]] += 1;
      interestingObj[second[i]] += 1;
    }
    
    return  Math.max(...Object.values(interestingObj));
  }
  console.log(interestingParty(['f', 'g', 's', 'f'], ['h', 'f', 'f', 'b']));
}