////////////////////////////



function checkAlive(health) {
    if (health <= 0) {
      return false;
    } else {
      return true;
    }
  }






//////////////////////////////////////////

  function booleanToString(b) {
    return b.toString();
  }








  /////////////////////////////

  function main(verb, noun) {
    return verb + noun;
  }








  ////////////////////////

  function paperwork(n, m) {
    if (n < 0 || m < 0) {
      return 0;
    }
    return n * m;
  }






  /////////////////////////


  const quarterOf = (month) => {
    if (month >= 1 && month <= 3) return 1;
    if (month >= 4 && month <= 6) return 2;
    if (month >= 7 && month <= 9) return 3;
    return 4; // October - December
  };
  
  
  