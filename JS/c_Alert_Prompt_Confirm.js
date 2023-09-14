//alert = 뭔가를 알려줌
//prompt = 뭔가를 입력받을 때 사용한다
//confirm = 뭔가를 확인받음

const name = prompt("이름을 입력하세요.");  //scanf와 같은 기능이다. 확인만 있다.
alert("환영합니다, " + name + "님");

const isAdult = confirm("당신은 성인입니까?"); //confirm은 확인과 취소가 있다 확인누르면 true, 취소 누르면 false
console.log(isAdult);