export const shuffle = (arr, n) => {
    let currentIndex = arr.length, randomIndex, tempValue;

    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex-=1;
        tempValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = tempValue
    }

    return arr.slice(0,n);
}