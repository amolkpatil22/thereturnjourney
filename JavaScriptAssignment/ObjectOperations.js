// Below function takes two objects and returns a new obj with combined data

const mergeCars = (car1, car2) => {
    const mergedCar = {                                   // Adding car1 and car2 properties in a single object
        brand: { car1: car1.brand, car2: car2.brand },
        model: { car1: car1.model, car2: car2.model },
        year: { car1: car1.year, car2: car2.year }
    }
    return mergedCar;
};


const car1 = {                           
    brand: 'TATA',
    model: 'Safari',
    year: 2005
};

const car2 = {
    brand: 'Mahindra',
    model: 'Scorpio',
    year: 2010
};


const mergedCar = mergeCars(car1, car2);  // passing two car objects as a argument
console.log(mergedCar);                   // Logging the output


// Time complexity for this function is O(1).
// Space complexity for this function is O(n).