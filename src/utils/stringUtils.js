

function splitStrings(arr) {
    let nu = [];
    for (let index = 0; index < arr.length; index++) {
        const e = arr[index].split('');
        nu[index] = e;
    }
    setSplitChars(nu);
    randomChopConcat(nu);
}


// randomize array of chars
function randomChopConcat(arr) {
    let temp = arr.slice();
    let nuArr = [];

    // 1. get length of array
    while (temp.length > 0) {
        // setInterval(
        //     () => {
        let ceil = Math.ceil(temp.length);
        let floor = Math.floor(0);

        // 2. use length as index in math.random ("randomIndex")
        let randIndex = Math.floor(Math.random() * (floor - ceil) + ceil);

        // 3. splicedChar = arr.splice(randomIndex, 1)
        let splicedChar = temp.splice(randIndex, 1);

        // 4. nuArr.push(splicedChar)
        nuArr.push(splicedChar);
        let disp = nuArr.concat('');
        setDisplayed(disp);
        // }, 1000
        // )

        // 5. <<<< repeat "1." - "4."
    }
}

function iterateCurrIndex() {
    if (currI < BKGRD_TEXT.length - 1) {
        setCurrI(currI + 1)
    } else {
        setCurrI(0);
    }
}

export { splitStrings, randomChopConcat, iterateCurrIndex }