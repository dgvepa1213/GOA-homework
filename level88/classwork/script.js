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
