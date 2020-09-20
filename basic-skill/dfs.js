/*
    Depth-First Search
    fib.js가 전형적인 dfs이다.
    1. 모든 경로를 탐색하고 그 결과를 확인해야 하는 경우
    2. 문자열 등을 탐색할 때 "사전 순서로 앞에 오는 것"처럼 앞부터 검색해서 찾는 것이 빠를 경우.
 */
{
  function dfs(now) {
    if (현재 상태 now가 끝나는 조건) return 현재 상태 now의 값;
    let ret = -1;
    for (let i = 0; i < 다음 상태 개수; i += 1) {
      let next = i번째 다음 상태;
      if (next가 조건을 만족하는 경우) ret = Math.max(dfs(next), ret);
    }
    return ret;
  }
}
