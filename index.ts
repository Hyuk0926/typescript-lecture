//객체지향 프로그래밍
//type과 inerface는 비슷한데, type은 객체의 형태를 정의하는 것이고, interface는 객체의 형태를 정의하는 것과 동시에 상속을 지원한다.
//type은 =으로 정의하고, interface는 붙이지 않아도 된다.
//객체를 정의할 때는 ;를 통해 구분
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
  email?: string; //! ?를 붙이면 선택적 속성으로 만들 수 있다.
}

const userA: User = {
  name: 'John Doe',
  age: 30,
  isAdmin: true, //값이 빠지면 에러가 남
  email: 'usera@example.com'
};

const userB: User = {
  name: 'Jane Doe',
  age: 25,
  isAdmin: false,
  email: undefined //undefined로 설정하면 에러가 나지 않음 //변수 설정에서 ?를 주던, undefined로 설정하던 둘 중 하나만 해주면 된다.
};
