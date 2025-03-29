// 1. SportsClub ობიექტის შექმნა
let sportsClub = {
    clubName: "City Football Club",
    sportType: "Football",
    foundedYear: 1995,
    achievements: {
      title1: {
        year: 2010,
        title: "National Champions"
      },
      title2: {
        year: 2015,
        title: "Cup Winners"
      },
      title3: {
        year: 2020,
        title: "Super Cup Champions"
      }
    }
  };
  
  // 2. ობიექტის თვისებების სია
  let sportsClubProperties = Object.keys(sportsClub);
  console.log("SportsClub ობიექტის თვისებები:", sportsClubProperties);
  
  // 3. ობიექტის მნიშვნელობების სია
  let sportsClubValues = Object.values(sportsClub);
  console.log("SportsClub ობიექტის მნიშვნელობები:", sportsClubValues);
  
  // 4. შეამოწმეთ, არსებობს თუ არა sponsors ველი
  let hasSponsors = sportsClub.hasOwnProperty("sponsors");
  console.log("SportsClub ობიექტს გააჩნია 'sponsors' თვისება:", hasSponsors);
  
  // 5. დაამატეთ ახალი თვისება stadiumCapacity ახალი ობიექტით გაერთიანების გზით
  let extendedSportsClub = Object.assign({}, sportsClub, { stadiumCapacity: 50000 });
  console.log("გახანგრძლივებული SportsClub ობიექტი:", extendedSportsClub);
  
  // 6. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა
  Object.freeze(sportsClub);
  console.log("SportsClub ობიექტი გაყინულია:", Object.isFrozen(sportsClub));
  
  // სცადეთ შეცვლა
  sportsClub.clubName = "New City Football Club"; // ეს არ იმოქმედებს, რადგან ობიექტი გაყინულია
  console.log("განახლებული სახელით კლუბი:", sportsClub.clubName);
  
  // 7. შეამოწმეთ, გაყინულია თუ არა ობიექტი
  let isFrozen = Object.isFrozen(sportsClub);
  console.log("SportsClub ობიექტი გაყინულია:", isFrozen);
  