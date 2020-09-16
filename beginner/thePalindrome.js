/*
  저작권 문제로 문제를 기입하지 않습니다.
 */
{
  function thePalindrome(str) {
    const len = str.length;
    for (let i = len; ; i += 1) {
      let flag = true;
      for (let j = 0; j < len; j += 1) {
        // 반대쪽에 문자가 존재하는데 다를 경우 플래그를 변경.
        if ((i - j - 1) < len && (str[j] !== str[i - j - 1])) {
          flag = false;
          break;
        }
      }
      if (flag) return i;
    }
  }

  console.log(thePalindrome('aba'));
  console.log(thePalindrome('abbc'));
  console.log(thePalindrome('abbcdde'));
  console.log(thePalindrome('abbcddasdfsdkjfkeksdlivosaybopqwee'));
}