let obj1 = new Object();
let obj2 = {};
let obj3 = new Date();
let person = {
  name: "장용미",
  age: 10,
  hobby: "테니스",
  eat: () => {
    console.log("hi");
  },
};
//let { age, name } = person;

let nameVar = person.name;
let age = person["age"];

person.job = "developer"; //속성 추가
delete person.job; //속성 삭제

const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal = { age: 1 }; //error

let arrA = new Array();
let arrB = [];

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
arrC[0] += "Hello";

//구조분해 할당 : 배열

let array1 = [1, 2, 3];
let [one, two, three, four = 1] = array1; //갯수가 없어서 할당되지 않는 변수는 저 값으로 초기화 되는거

const func = (a1) => {
  console.log(a1[0], a1[1], a1[2]);
};

func(array1);

//Truthy와 Falsy : 참이나 거짓을 의미하는 않는 값도 조건문내에서는 판단되니ㅡㄴ 값을 의미
//false (false,0(-0),null,undefined, NaN, "", ..)빼고 다 true

let truthyVar = "hi";

function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { age: 1 };
printName(person);

function functA() {
  console.log("false return");
  return false;
}
function functB() {
  console.log("true return");
  return true;
}
console.log(functA() && functB());

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
repeat(5, (idx) => {
  console.log(idx * 3);
});
