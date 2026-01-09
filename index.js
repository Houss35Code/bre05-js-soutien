/* Exercice 2 : Afficher un tableau à l'envers */

function displayArrayReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

/* Exercice 3a : Afficher les données d'un tableau */

function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

/* Exercice 3b : Trouver le mot le plus long */

function findLongestWord(words) {
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

/* Exercice 4 : Éliminer les doublons */

function removeDuplicates(array) {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray;
}

/* Exercice 5 : Classer les nombres par ordre croissant */

function sortAscending(numbers) {
    let sortedNumbers = numbers.slice();

    for (let i = 0; i < sortedNumbers.length; i++) {
        for (let j = i + 1; j < sortedNumbers.length; j++) {
            if (sortedNumbers[i] > sortedNumbers[j]) {
                let temp = sortedNumbers[i];
                sortedNumbers[i] = sortedNumbers[j];
                sortedNumbers[j] = temp;
            }
        }
    }

    return sortedNumbers;
}

/* Exercice 6 : Calculer la moyenne des nombres */

function calculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

/* Exercice 7 : Vérifier si un nombre est premier */

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

/* Exercice 8 : Afficher les mots au nombre impair de lettres */

function displayOddLengthWords(words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 !== 0) {
            console.log(words[i]);
        }
    }
}

/* Exercice 9 : Afficher un décompte */

function countdown(start) {
    for (let i = start; i >= 0; i--) {
        console.log(i);
    }
}

/* Exercice 10 : Calculer la moyenne de tableaux imbriqués */

function calculateAverageNested(arrays) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            sum += arrays[i][j];
            count++;
        }
    }

    return sum / count;
}

/* TESTS */

// Exercice 2
console.log("Exercice 2 : Tableau à l'envers");
displayArrayReverse([1, 2, 3, 4, 5]);

// Exercice 3a
console.log("Exercice 3a : Affichage du tableau");
displayArray([10, 20, 30, 40, 50]);

// Exercice 3b
console.log("Exercice 3b : Mot le plus long");
let longestWord = findLongestWord(['hello', 'world', 'javascript', 'python', 'java']);
console.log(longestWord);

// Exercice 4
console.log("Exercice 4 : Suppression des doublons");
let noDuplicates = removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
console.log(noDuplicates);

// Exercice 5
console.log("Exercice 5 : Tri croissant");
let sortedNumbers = sortAscending([5, 3, 1, 4, 2]);
console.log(sortedNumbers);

// Exercice 6
console.log("Exercice 6 : Moyenne");
let average = calculateAverage([1, 2, 3, 4, 5]);
console.log(average);

// Exercice 7
console.log("Exercice 7 : Nombres premiers");
for (let i = 2; i <= 19; i++) {
    let result = isPrime(i);
    console.log(i, "=>", result);
}

// Exercice 8
console.log("Exercice 8 : Mots de longueur impaire");
displayOddLengthWords(['cat', 'dog', 'elephant', 'fox']);

// Exercice 9
console.log("Exercice 9 : Décompte");
countdown(10);

// Exercice 10
console.log("Exercice 10 : Moyenne des tableaux imbriqués");
let nestedAverage = calculateAverageNested([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(nestedAverage);
