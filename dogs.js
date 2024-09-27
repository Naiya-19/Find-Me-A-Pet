const allDogs = [

    {


        dogName: "Anthony",


        breed: "Terrier",


        age: 6

    },

    {


        dogName: "Axel",


        breed: "Terrier",


        age: 2

    },
    
    {

    dogName: "Beanie",


    breed: "Terrier",


    age: 2

},

 
{

    dogName: "BeBe",


    breed: "Terrier",


    age: 6

},

 
{

    dogName: "Boo Boo",


    breed: "Eskimo Mix",


    age: 9

},

 
{

    dogName: "Bowser",


    breed: "Neutered Mastiff",


    age: 3

},

 
{

    dogName: "Brutus Xavier",


    breed: "Terrier",


    age: 5

},

 
{

    dogName: "ButterBall",


    breed: "Bulldog",


    age: 4

},

 
{

    dogName: "Buttercup",


    breed: "Terrier",


    age: 4

},

 
{

    dogName: "Canelo",


    breed: "Chow Chow",


    age: 5

},



];

function ageDogs() {
    const minAge = document.querySelector('#minAge').value;
    const selectedDogs = [];

    allDogs.forEach(dog => {
        if (dog.age > minAge) {
            selectedDogs.push(dog);
        }
    });

    displayDogs(selectedDogs);
}

function displayDogs(dogs) {
    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = '';

    dogs.forEach(dog => {
        const dogInfo = document.createElement('p');
        dogInfo.textContent = `Name: ${dog.dogName}, Breed: ${dog.breed}, Age: ${dog.age}`;
        resultDiv.appendChild(dogInfo);
    });
}