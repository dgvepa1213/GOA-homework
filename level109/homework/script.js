const person = {
  სახელი: "ნიკოლოზი",
  ასაკი: 28,
  ქალაქი: "ბათუმი"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}