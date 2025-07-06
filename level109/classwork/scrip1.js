const car = {
  brand: "Toyota",
  model: "Corolla",
  color: "ვერცხლისფერი"
};

// თვისებების სახელების გამოქვეყნება
for (let key in car) {
  console.log("თვისების დასახელება:", key);
}

// თვისებების მნიშვნელობების გამოქვეყნება
for (let key in car) {
  console.log("თვისების მნიშვნელობა:", car[key]);
}

// გაერთიანებული ტექსტის გამოქვეყნება
console.log("ეს არის " + car.brand + " ბრენდი, კონკრეტულად " + car.model + " მოდელი, ფერში: " + car.color + ".");