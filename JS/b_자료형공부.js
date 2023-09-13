//문자열은 3가지 방법이있다.

const name1 = "고선영"
const name2 = '박영준'
const name3 = `박영준`

// 숫자 1 옆에있는 ` 기호는 문자열안에 변수를 집어넣을 때 사용한다.
// 변수를 넣는 방법은 ${변수이름} 달러+중괄호이다

const name4 = `My name is ${name1 + "박영준"}`;
console.log(name4);  //python에서 print()에 해당하는게 console.log();이다.


// 사칙연산은 파이썬과 동일하다
const a = 3 + 1;
const b = 3 - 1;
const c = 3 * 1;
const d = 3 / 1;
const e = 3 % 1;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
// if NaN이 나오면 NOT A NUMBER라는 뜻이니까 ERROR이다.


//참 거짓 판별도 똑같이 boolean 파이썬과 같다.
const ex1 = name2;
const ex2 = name1;
console.log(ex1 == name1);
console.log(a > b);


//null : 존재하지 않는값, undefined : 값이 할당되지 않음
let tan;
console.log(tan); //초기값 정의되지 않았다.

let user = null;
console.log(null); // 빈 null값을 가진다.


//typeof 연산자를 통해 해당 변수의 타입을 알 수 있다.
//다른 개발자의 코드를 보고 type을 알고싶을 때 사용한다
console.log(typeof name2);                                        /* shift + alt + 방향키로 빠른복사가능 */
console.log(typeof "xxx");                                         /* shift + 방향키는 줄이동 가능 */
console.log(typeof a);
console.log(typeof null);         //object라는 타입은 객체형이라는 것이다. 하지만 null = 객체가 아니다.
console.log(typeof undefined);
console.log(typeof 3);



