import dayjs from 'dayjs';

const someSchedule = {
  study: '2025-04-03',
  election: '2025-06-03',
  trip: '2025-08-01'
};

//TODO: 날짜 포맷을 YYYY.MM.DD로 변경
//! FormatDate함수를 이용하여 변경하세요
//! study, election, trip의 날짜를 반복문을 통하여 변경하세요
// 출력은 someSchedule로 해야하기에 새로운 변수를 만들지 말고 내용을 수정해야합니다

const formatDate = (date: string): string => {
  return dayjs(date).format('YYYY.MM.DD');
};

for (const key in someSchedule) {
  //someSchedule의 key값을 반복문을 통해 가져왔다는 뜻임 //자주 쓰는 문법이니 기억해두기
  someSchedule[key] = formatDate(someSchedule[key]); //someSchedule의 key값을 formatDate함수에 넣어주고, 그 값을 다시 someSchedule[key]에 넣어줌
}

console.log(someSchedule);

enum Category { //Category를 작성한 이유:? //cart의 type을 string으로 정의했는데, string은 너무 광범위하기에, Category라는 enum을 만들어서 그 안에 있는 값만 사용하도록 하기 위함
  FRUIT = 'fruit',
  VEGETABLE = 'vegetable',
  MEAT = 'meat'
}

interface Item {
  name: string;
  type: Category;
  price: number;
  quantity: number;
}

const cart = [
  {
    name: '사과',
    type: Category.FRUIT,
    price: 3000,
    quantity: 3
  },
  {
    name: '바나나',
    type: 'fruit',
    price: 5000,
    quantity: 2
  },
  {
    name: '양배추',
    type: Category.VEGETABLE,
    price: 7000,
    quantity: 1
  },
  {
    name: '소고기',
    type: Category.MEAT,
    price: 20000,
    quantity: 1
  }
  {
    name: '돼지고기',
    type: Category.MEAT,
    price: 15000,
    quantity: 2
  },
  {
    name: '당근',
    type: Category.VEGETABLE,
    price: 4000,
    quantity: 5
  }
];

const calcTotal = (cart: Item[]): number => {
  //cart의 타입을 Item[]으로 정의 //cart는 Item이라는 타입의 배열이다라는 뜻
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }
  return total;
};

const total = calcTotal(cart);
console.log('total:', total);
