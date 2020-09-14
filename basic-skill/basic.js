// if else
{
  const a = 7;
  // const a = 10;
  if (a % 2 === 0) console.log('even number');
  else console.log('odd number');
}

// for
{
  let sum = 0;
  for (let i = 0; i <= 10; i += 1) {
    sum += i;
  }
  console.log(sum);
}

// array
{
  const ret = [];
  for (let i = 0; i <= 10; i += 1) {
    ret[i] = i;
  }
  console.log(ret);
}

/*
  제출 형식
  문제 : 숫자 타입의 매개변수 a, b 가 주어질 때 a+b를 리턴하세요.
  function: aPlusBProblem
*/
{
  function aPlusBProblem(a, b) {
    return a + b;
  }
  console.log(aPlusBProblem(1, 3));
}

// 정렬
{
  const arr = [0, 4, 3, 2, 6, 1];
  const ascArr = [...arr].sort((a, b) => a - b);
  const descArr = [...arr].sort((a, b) => b - a);
  console.log('asc sort: ', ascArr);
  console.log('desc sort: ', descArr);
}

// 연관 배열이라고 나오지만 Javascript로는 Object 흡사하다 생각.
{
  const a = {
    name: 'thiporia',
    age: 23,
    sex: 'male',
  };

  for (const key in a) {
    console.log(`${key}: ${a[key]}`);
  }
}

