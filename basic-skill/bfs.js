/*
    Breadth-First Search
    큐를 사용한다. 큐는 FIFO(선입선출)
    배열을 사용한다. 배열의 .push, .shift를 쓸 수 있다.
    1. 시작 지점에서 가장 가까운 것을 구하고 싶은 경우
    2. 탐색 범위 자체는 넓지만 어느 정도 근처에 구하고 싶은 해가 존재하는 것을 알고 있는 경우
    3. 탐색 범위가 굉장히 넓으며 깊이 우선 탐색을 사용할 때는 스택이 대량으로 사용되는 경우
 */
{
  const queue = [];
  queue.add(초기상태);
  while(!queue.length) {
    const now = queue.shift();
    현재 상태 처리
    for (let i = 0; i < 다음 상태 개수; i += 1) {
    const next = i번쨰 다음 상태;
    if (next를 방문했었는지 판정) queue.push(next);
    }
  }
}
