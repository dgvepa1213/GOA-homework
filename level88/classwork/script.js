let academy = {
    name: "Tech Academy",
    courses: ["Web Development", "Data Science", "AI & Machine Learning"],
    socialLink: "https://www.techacademy.com",
    reviews: {
      review1: {
        name: "გიორგი",
        status: "parent",
        review: "მომწონს აკადემია, ბევრი ახალი ცოდნა მივიღე!"
      },
      review2: {
        name: "მარიამი",
        status: "child",
        review: "ძალიან კარგია, თუმცა ცოტათი რთული იყო ზოგიერთ საკითხზე."
      },
      review3: {
        name: "თამარი",
        status: "parent",
        review: "შესანიშნავი ტრენერები და სასწავლო გარემო!"
      }
    }
  };

  const academyProperties = Object.keys(academy);
console.log("Academy ობიექტის თვისებები:", academyProperties);


const academyValues = Object.values(academy);
console.log("Academy ობიექტის მნიშვნელობები:", academyValues);


const hasCourses = academy.hasOwnProperty("courses");
console.log("Academy ობიექტს გააჩნია 'courses' თვისება:", hasCourses);


const extendedAcademy = Object.assign({}, academy, { member: "Yes" });
console.log("გახანგრძლივებული Academy ობიექტი:", extendedAcademy);



///////////////Academy ობიექტი: ობიექტი შეიცავს name, courses, socialLink, და reviews.
//Object.keys(): ნორმალურად გამოაქვს ობიექტის თვისებები.
//Object.values(): გამოაქვს ობიექტის მნიშვნელობები.
//hasOwnProperty(): შეამოწმებს, აქვს თუ არა ობიექტს რაიმე თვისება.
//Object.assign(): აერთიანებს ორ ობიექტს, აქ ერთი ახალი member თვისების დამატება ხდება.
//Object.freeze(): ობიექტი გაყინულია, რის შედეგადაც მის თვისებებს არ შეუძლია ცვლილება.
//Object.isFrozen(): შეამოწმებს, არის თუ არა ობიექტი გაყინული.
  



//Academy ობიექტის თვისებების სია: გამოიტანს name, courses, socialLink, reviews.
//Academy ობიექტის მნიშვნელობების სია: გამოიტანს შესაბამისი მნიშვნელობები.
//გაყინვა: academy ობიექტი გაყინული იქნება, ამიტომ მისი თვისებების შეცვლა აღარ იქნება შესაძლებელი.