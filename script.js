let courseName = "Базовый JS";
let stepNumber = 1;
let userAge = 25;
let isStudent = true;

console.log(`Тип переменной courseName: ${typeof courseName}`);
console.log(`Тип переменной stepNumber: ${typeof stepNumber}`);
console.log(`Тип переменной userAge: ${typeof userAge}`);
console.log(`Тип переменной isStudent: ${typeof isStudent}`);

const a = 10;
const b = "10";
const isStrictEqual = a === b;
const isLooseEqual = a == b;

console.log(`False потому-что типы данных разные: ${isStrictEqual}`);
console.log(`True потому-что значения равны: ${isLooseEqual}`);

let userAvatar = null;
const defaultAvatar = "default-avatar.png";

// Вариант с let:
let currentAvatar = userAvatar ?? defaultAvatar;
console.log(`Текущий аватар: ${currentAvatar}`); // "default-avatar.png"

userAvatar = "my-photo.png";
currentAvatar = userAvatar ?? defaultAvatar; // Пересчитываем значение
console.log(`Текущий аватар: ${currentAvatar}`); // "my-photo.png"

let userScore = 75;

if (userScore >= 90) {
  console.log("Оценка: Отлично");
} else if (userScore >= 70) {
  console.log("Оценка: Хорошо");
} else if (userScore >= 50) {
  console.log("Оценка: Удовлетворительно");
} else {
  console.log("Оценка: Незачет");
}

const hasAccess = userScore >= 50 ? "Доступ получен" : "Доступ отклонен";

console.log(hasAccess);

const dayNumber = 6;

switch (dayNumber) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Рабочий день");
    break;
  case 6:
  case 7:
    console.log("Выходной день");
    break;
  default:
    console.log("Некорректный день недели");
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  if (i === 8) {
    break;
  }
  console.log(`Число: ${i}`);
}

let counter = 5;

while (counter > 0) {
  console.log(`Обратный отчет: ${counter}`);
  counter--;
}
console.log("Старт!");

let attempts = 0;
do {
  console.log(`Попытка №${attempts + 1}`);
  attempts++;
} while (attempts < 3);

console.log(calcStandard(5, 10));

function calcStandard(x, y) {
  return x + y;
}
const calcArrow = (x, y) => x * y;

const makeOrder = (product, quantity = 1, ...tags) => {
  return `Заказ: ${product}, Количество: ${quantity}, Теги: ${tags.join(", ")}`;
};

console.log(makeOrder("Ноутбук"));
console.log(makeOrder("Телефон", 2, "Электроника", "распродажа"));

const createDiscountCalculator = (discount) => {
  return (price) => price - price * (discount / 100);
};

const tenPercentDiscount = createDiscountCalculator(10);
const twentyPercentDiscount = createDiscountCalculator(20);
console.log(`Цена со скидкой 10%: ${tenPercentDiscount(1000)}`);
console.log(`Цена со скидкой 20%: ${twentyPercentDiscount(1000)}`);

let student = {
  name: "Иван",
  age: 20,
  skills: ["HTML", "CSS", "JS"],
};

let studentName = student.name;
let studentFirstSkill = student.skills[0];
// Деструктуризация объекта и массива:
const { name, skills } = student;
const [firstSkill] = skills;

// Или всё в одну строку:
const {
  name: studentNamee,
  skills: [studentFirstSkillls],
} = student;

student.isGraduated = true;
console.log(student);

const products = [
  { id: 1, title: "Телефон", price: 30000, category: "electronics" },
  { id: 2, title: "Книга", price: 1500, category: "books" },
  { id: 3, title: "Ноутбук", price: 80000, category: "electronics" },
  { id: 4, title: "Футболка", price: 2000, category: "clothes" },
];

const electronicsProducts = products.filter(
  (product) => product.category === "electronics",
);

const electronicsTitles = electronicsProducts.map((product) =>
  product.title.toUpperCase(),
);
console.log(electronicsTitles);

const productsTotalPrice = products.reduce(
  (total, product) => total + product.price,
  0,
);

console.log(`Общая стоимость товаров: ${productsTotalPrice} руб`);

const detailsButton = document.querySelector("article button");

detailsButton.addEventListener("click", (event) => {
  event.preventDefault();

  // detailsButton.classList.toggle("active");
  // detailsButton.textContent = detailsButton.classList.contains("active")
  //   ? "Скрыть подробности"
  //   : "Показать подробности";

  const article = detailsButton.closest("article");
  article.classList.toggle("active");
  detailsButton.textContent = article.classList.contains("active")
    ? "Скрыть подробности"
    : "Показать подробности";
});

const stepsList = document.querySelector("ol");
const newStep = document.createElement("li");
newStep.textContent = "Шаг 4: Завершение";
stepsList.appendChild(newStep);

const gridContainer = document.querySelector(".grid-fixed");
gridContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("grid-item")) {
    event.target.classList.toggle("active");
    event.target.style.backgroundColor = event.target.classList.contains(
      "active",
    )
      ? "gold"
      : "";

    console.log(event.target.textContent);
  }
});
