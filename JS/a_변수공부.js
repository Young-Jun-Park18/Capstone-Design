    //변수 = " "; 문자는 따옴표로 꼭 감싸줘야한다. 


    //경고창을 띄우는 함수 alert(변수명); 
    //콘솔 로그에 띄우는 함수 consol.log(변수명);
 
    name = "young-jun"
    age = 24;

    console.log(name);



    //협업을 할 때에는 name같은 흔한 변수는 다른 개발자도 사용할 수 있으므로
    //let or const를 사용하자


    let child = 25;
    child = 30;      //let을 빼고 같은 변수를 사용하면 값이 변경된다. 따라서 이 변수이름이 이미 사용되고 있는지 알고 싶을 때에만 사용한다
    console.log(child); //Identifier 'child' has already been declared 라는 문구가 나온다.
 

    const trye = 30;
    trye = 25;      //const는 절대 불변하기 때문에 const를 빼고 다시 선언해도 에러가난다.
    console.log(trye); //Assignment to constant variable.