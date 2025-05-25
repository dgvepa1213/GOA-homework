
const globalVariable = " გლობალური";

function testScope() {
    
    let localVariable = "ლოკალური";
    
    console.log(globalVariable); // შეიძლება გამოყენება, რადგან ის გლობალურია
    console.log(localVariable); //შეიძლება გამოყენება, რადგან ის ამ ფუნქციის შიგნითაა
}

testScope();

console.log(globalVariable); //შეიძლება გამოყენება, რადგან ის გლობალურია
console.log(localVariable); //localVariable-ის გამოყენება შეუძლებელია ფუნქციის გარეთ