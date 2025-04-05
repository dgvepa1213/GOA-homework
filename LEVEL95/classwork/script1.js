function loveCalculator() {
    const name1 = prompt("შეიყვანე პირველი ადამიანის სახელი:");
    const name2 = prompt("შეიყვანე მეორე ადამიანის სახელი:");
  
    if (!name1 || !name2) {
      alert("გთხოვ, ორივე სახელი შეიყვანე!");
      return;
    }
  
    // გენერირდება შემთხვევითი რიცხვი 1-დან 100-მდე
    const lovePercentage = Math.floor(Math.random() * 100) + 1;
  
    alert(`${name1} და ${name2}, თქვენი სიყვარულის პროცენტია ${lovePercentage}%`);
  }
  
  loveCalculator();
  