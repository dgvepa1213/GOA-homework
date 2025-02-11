function factorial(N) {
    let result = 1;
    
    for (let i = 1; i <= N; i++) {
        result *= i;
    }
    
    return result;
}

// მაგალითი: მომხმარებელს შეაქვს რიცხვი და ვაჩვენებთ ფაქტორიალს
let N = parseInt(prompt("შეიყვანეთ რიცხვი:"));
if (N >= 0) {
    alert(`რიცხვი ${N}-ის ფაქტორიალია: ${factorial(N)}`);
} else {
    alert("20");
}
