// Code your solution in this file!
const returnFirstTwoDrivers = function(namesArray) {
    let firstTwoNames = namesArray.slice(0, namesArray.length - 2);
    return firstTwoNames
}

const returnLastTwoDrivers = function(namesArray) {
    let lastTwoNames = namesArray.slice(-2);
    return lastTwoNames
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    function fareMultiplier(newX){
        let fare = newX * x
        return fare
    };
    return fareMultiplier;
}

console.log(createFareMultiplier(8)(6))
//const fareDoubler = createFareMultiplier(2)
//console.log(fareDoubler(4))

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)
console.log(fareTripler(6))

console.log(fareDoubler(4))
console.log(fareDoubler(8))

function selectDifferentDrivers(namesArray, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(namesArray)
}