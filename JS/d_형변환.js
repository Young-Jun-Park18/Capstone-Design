const MathScore = prompt("수학 점수? ");
const EngScore = prompt("영어 점수? ");
const result = (MathScore + EngScore) / 2;
console.log(result);

//prompt로 입력받은 것은 무조건 문자형이기 때문에 정수끼리 덧셈이 아니라 문자 + 문자가 된다.
//따라서 형변환이 필요하다

// String(3) = 3을 문자로 바꿔준다

// Numver("1234") = "1234"를 숫자1234로 바뀐다.

// Boolean() = 0이나 null은 false, 나머지는 true로 변환
