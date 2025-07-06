

// გაუმჯობესებული ტიპის ობიექტი
const userNew = {
  name: "გიორგი",
  age: 28,
  getInfo() {
    return `მომხმარებელია ${this.name}, ასაკი: ${this.age}`;
  }
};





const userNew1 = {
  name: "ნინო",
  age: 32,
  profession: "დეველოპერი",
  getInfo() {
    return `მომხმარებელია ${this.name}, ასაკი: ${this.age}, პროფესია: ${this.profession}`;
  }
};

console.log(userNew1.getInfo());










/*
გაუმჯობესებები:
- ფუნქცია `getInfo` დაწერილია შემოკლებული სახით), რაც კოდს უფრო სუფთას და მარტივს ხდის.

- საერთო ჯამში, ახალი ვერსია აკმაყოფილებს თანამედროვე JavaScript-ის საუკეთესო პრაქტიკებს.
*/


