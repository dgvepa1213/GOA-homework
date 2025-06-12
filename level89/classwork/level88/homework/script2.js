// 1. Hotel ობიექტის შექმნა
let hotel = {
    hotelName: "Grand Plaza Hotel",
    stars: 5,
    location: "Tbilisi, Georgia",
    guestReviews: {
      review1: {
        name: "მიხეილ",
        rating: 4.8,
        comment: "შესანიშნავი მომსახურება, ძალიან მოწესრიგებული და კომფორტული."
      },
      review2: {
        name: "ანა",
        rating: 4.5,
        comment: "ძალიან კარგი განთავსება, მაგრამ შიდა რესტორნის მენიუში შეიძლება გარკვეული ცვლილებები."
      },
      review3: {
        name: "დავით",
        rating: 5.0,
        comment: "ბევრი კარგი მომსახურება, სასიამოვნო გარემო და ძალიან კარგი პერსონალი!"
      }
    }
  };
  
  // 2. ობიექტის თვისებების და მათი მნიშვნელობების გამოყვანა
  let hotelProperties = Object.keys(hotel);
  let hotelValues = Object.values(hotel);
  console.log("Hotel ობიექტის თვისებები:", hotelProperties);
  console.log("Hotel ობიექტის მნიშვნელობები:", hotelValues);
  
  // 3. შეამოწმეთ, გააჩნია თუ არა spa ველი
  let hasSpa = hotel.hasOwnProperty("spa");
  console.log("Hotel ობიექტს გააჩნია 'spa' თვისება:", hasSpa);
  
  // 4. დაამატეთ ახალი თვისება roomsCount ახალი ობიექტის გაერთიანების გზით
  let extendedHotel = Object.assign({}, hotel, { roomsCount: 150 });
  console.log("გახანგრძლივებული Hotel ობიექტი:", extendedHotel);
  
  // 5. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა
  Object.freeze(hotel);
  console.log("Hotel ობიექტი გაყინულია:", Object.isFrozen(hotel));
  
  // სცადეთ შეცვლა
  hotel.hotelName = "New Grand Plaza Hotel"; // ეს არ იმოქმედებს, რადგან ობიექტი გაყინულია
  console.log("განახლებული სახელით სასტუმრო:", hotel.hotelName);
  
  // 6. შეამოწმეთ, გაყინულია თუ არა ობიექტი
  let isFrozen = Object.isFrozen(hotel);
  console.log("Hotel ობიექტი გაყინულია:", isFrozen);
  