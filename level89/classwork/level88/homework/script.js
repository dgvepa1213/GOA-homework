// 1. University ობიექტის შექმნა
let university = {
    name: "Tech University",
    departments: 5,
    website: "https://www.techuniversity.com",
    ratings: {
      student1: {
        name: "გიორგი",
        rating: 4.5,
        comment: "ძალიან კარგი უნივერსიტეტია, მაგრამ გამოსავალი შესაძლოა უფრო მარტივი იყოს."
      },
      student2: {
        name: "მარიამი",
        rating: 4.0,
        comment: "მომწონს გარემო და სწავლის ხარისხი, მაგრამ ცოტა უფრო მეტად აქტიურად უნდა გაიწეროს კურსები."
      },
      student3: {
        name: "თამარი",
        rating: 5.0,
        comment: "შესანიშნავი უნივერსიტეტია, შესანიშნავი ტრენერები და შესანიშნავი რესურსები."
      }
    }
  };
  
  // 2. ობიექტის ყველა თვისება და მნიშვნელობა
  let universityProperties = Object.keys(university);
  let universityValues = Object.values(university);
  console.log("University ობიექტის თვისებები:", universityProperties);
  console.log("University ობიექტის მნიშვნელობები:", universityValues);
  
  // 3. შეამოწმეთ, გააჩნია თუ არა scholarship თვისება
  let hasScholarship = university.hasOwnProperty("scholarship");
  console.log("University ობიექტს გააჩნია 'scholarship' თვისება:", hasScholarship);
  
  // 4. დაამატეთ studentsCount ახალი ობიექტის გაერთიანებით
  let extendedUniversity = Object.assign({}, university, { studentsCount: 1200 });
  console.log("გახანგრძლივებული University ობიექტი:", extendedUniversity);
  
  // 5. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა
  Object.freeze(university);
  console.log("University ობიექტი გაყინულია:", Object.isFrozen(university));
  
  // სცადეთ შეცვლა
  university.name = "New Tech University"; // ეს არ იმოქმედებს, რადგან ობიექტი გაყინულია
  console.log("განახლებული სახელით უნივერსიტეტი:", university.name);
  
  // 6. შეამოწმეთ, გაყინულია თუ არა ობიექტი
  let isFrozen = Object.isFrozen(university);
  console.log("University ობიექტი გაყინულია:", isFrozen);
  