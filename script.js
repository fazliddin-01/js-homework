function countVowels(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let nol = 0;


    for (let char of text) {
        if (vowels.includes(char)) {
            nol++;
        }
    }

    
    return nol;
}
console.log(countVowels[Math.random(countVowels)]);



function test() {
    const tests = ["Hello, World!", "JavaScript", "OpenAI", "Artificial Intelligence"];
    tests.forEach((test, index) => {
        console.log(`${index + 1}: to'g'ri | Unli harflar soni: ${countVowels(test)}`);
    });
}

test();