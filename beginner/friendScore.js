/*
  저작권 문제로 문제를 기입하지 않습니다.
 */
{
  function friendScore(friends = []) {
    let maxScore = 0
    for (let i = 0; i < friends.length; i += 1) {
      // 0번째 친구부터 들어가보자.
      let score = 0;
      for (let j = 0; j < friends.length; j +=1) {
        if (friends[i][j] === 'Y' && j !== i) {
          score += 1;
          // 친구의 친구까지 내 친구!
          for (let k = 0; k < friends.length; k += 1) {
            if (friends[j][k] === 'Y' && k !== i && friends[i][k] === 'N' ) {
              score += 1;
            }
          }
        }
      }
      maxScore = Math.max(maxScore, score);
    }

    return maxScore;
  }

  console.log(friendScore(['NYY', 'YNY', 'YYN']));
  console.log(friendScore(['NNN', 'NNN', 'NNN']));
  console.log(friendScore(['NYNNN', 'YNYNN', 'NYNYN', 'NNYNY', 'NNNYN']));
  console.log(friendScore(['NNNNYNNNNN', 'NNNNYNYYNN', 'NNNYYYNNNN', 'NNYNNNNNNN', 'YYYNNNNNNY', 'NNYNNNNNYN', 'NYNNNNNYNN', 'NYNNNNYNNN', 'NNNNNYNNNN', 'NNNNYNNNNN']));
}

{
  function friendScore(friends = []) {
    let ans = 0;
    const n = friends[0].length;

    for (let i = 0; i < n; i += 1) {
      let cnt = 0;
      for (let j = 0; j < n; j +=1) {
        if (i === j) continue;

        if (friends[i][j] === 'Y') {
          cnt += 1;
        } else {
          for (let k = 0; k < n; k += 1) {
            if (friends[j][k] === 'Y' && friends[k][i] === 'Y') {
              cnt += 1;
              break;
            }
          }
        }
      }
      ans = Math.max(ans, cnt);
    }

    return ans;
  }

  console.log(friendScore(['NYY', 'YNY', 'YYN']));
  console.log(friendScore(['NNN', 'NNN', 'NNN']));
  console.log(friendScore(['NYNNN', 'YNYNN', 'NYNYN', 'NNYNY', 'NNNYN']));
  console.log(friendScore(['NNNNYNNNNN', 'NNNNYNYYNN', 'NNNYYYNNNN', 'NNYNNNNNNN', 'YYYNNNNNNY', 'NNYNNNNNYN', 'NYNNNNNYNN', 'NYNNNNYNNN', 'NNNNNYNNNN', 'NNNNYNNNNN']));
}