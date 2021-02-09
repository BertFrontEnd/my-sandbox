const test1 = new Test1();

const myTest1 = (test1.testProp = 'My first Test');
console.log(myTest1);
console.log(test1.testProp);

//

const test2 = new Test2();

const myTest2 = (test2.testProp = 'bbb');
console.log(myTest2);
console.log(test2.testProp);

//

const myTest21 = (test2.testProp = '');
console.log(myTest21);
console.log(test2.testProp);

//

const myTest22 = test2.setTestProp('');
console.log(myTest22);
console.log(test2);

//

const myTest23 = test2.testProp;
console.log(myTest23);

//

const test3 = new Test3();
const myTest3 = (test3.testProp = 'My third Test');
console.log(myTest3);
console.log(test3.testProp);

//

const test4 = new Test4();
const myTest4 = (test4.testProp = 40);
console.log(myTest4);
console.log(test4.testProp);
