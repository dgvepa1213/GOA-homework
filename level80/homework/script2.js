function countdown() {
    let seconds = 100;

    let interval = setInterval(function() {
        console.log(`დარჩენილია ${seconds} წამი`);
        
        if (seconds === 0) {
            clearInterval(interval); // ვაჩერებთ ციკლს
            console.log("დრო ამოიწურა!");
        }

        seconds--; // ვაკლებთ 1-ს
    }, 1000); // კოდი შესრულდება ყოველ 1 წამში
}

countdown();
