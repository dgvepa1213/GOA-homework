// 1. Cinema ობიექტის შექმნა
let cinema = {
    cinemaName: "Galaxy Cinema",
    moviesCount: 10,
    location: "Tbilisi, Georgia",
    movieReviews: {
      review1: {
        name: "გიორგი",
        rating: 4.5,
        comment: "ძალიან კარგია, მაგრამ ზოგიერთ ფილმს ნაკლებად ძლიერი სცენარი ჰქონდა."
      },
      review2: {
        name: "მარიამი",
        rating: 4.0,
        comment: "კარგი გარემო და სამსახური, მაგრამ ბილეთები ცოტა ძვირი იყო."
      },
      review3: {
        name: "თამარი",
        rating: 5.0,
        comment: "შესანიშნავი კინოთეატრია, ვგიჟდები მათზე!"
      }
    }
  };
  
  // 2. ობიექტის თვისებების და მათი მნიშვნელობების გამოყვანა
  let cinemaProperties = Object.keys(cinema);
  let cinemaValues = Object.values(cinema);
  console.log("Cinema ობიექტის თვისებები:", cinemaProperties);
  console.log("Cinema ობიექტის მნიშვნელობები:", cinemaValues);
  
  // 3. შეამოწმეთ, გააჩნია თუ არა vipSeats ველი
  let hasVipSeats = cinema.hasOwnProperty("vipSeats");
  console.log("Cinema ობიექტს გააჩნია 'vipSeats' თვისება:", hasVipSeats);
  
  // 4. დაამატეთ ახალი თვისება ticketPrice ახალი ობიექტის გაერთიანების გზით
  let extendedCinema = Object.assign({}, cinema, { ticketPrice: 15 });
  console.log("გახანგრძლივებული Cinema ობიექტი:", extendedCinema);
  
  // 5. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა
  Object.freeze(cinema);
  console.log("Cinema ობიექტი გაყინულია:", Object.isFrozen(cinema));
  
  // სცადეთ შეცვლა
  cinema.cinemaName = "New Galaxy Cinema"; // ეს არ იმოქმედებს, რადგან ობიექტი გაყინულია
  console.log("განახლებული სახელით კინოთეატრი:", cinema.cinemaName);
  
  // 6. შეამოწმეთ, გაყინულია თუ არა ობიექტი
  let isFrozen = Object.isFrozen(cinema);
  console.log("Cinema ობიექტი გაყინულია:", isFrozen);
  