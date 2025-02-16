//Task 1: Function Declaration

function calculateSalary(baseSalary, bonus, taxRate) {
    //1st: Calculate tax amount
    let taxAmount = baseSalary * taxRate;

    //2nd: Compute net salary
    let netSalary = (baseSalary + bonus) - taxAmount;

    //3rd: Format the result to 2 decimal places and return it
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

//Test data
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"



//Task 2: Function Expression

// Function expression to calculate the final price after discount
const calculateDiscount = function(price, discountRate) {
    //1st: Calculate discount amount
    let discountAmount = price * discountRate;

    //2nd: Compute final price
    let finalPrice = price - discountAmount;

    //3rd: Format the result to 2 decimal places and return it
    return `Final Price: $${finalPrice.toFixed(2)}`;
};

//Test data
console.log(calculateDiscount(100, 0.2));  // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"


//Task 3: Arrow Function

//Arrow function to calculate service fee
const calculateServiceFee = (amount, serviceType) => {
    // Determine the fee rate based on service type
    let feeRate = serviceType === "Premium" ? 0.15 :
                  serviceType === "Standard" ? 0.10 :
                  serviceType === "Basic" ? 0.05 : 0; // Default to 0 if invalid type

    //Calculate the service fee
    let serviceFee = amount * feeRate;

    //Format and return the result
    return `Service Fee: $${serviceFee.toFixed(2)}`;
};

//Test data
console.log(calculateServiceFee(200, "Premium"));  // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"
console.log(calculateServiceFee(1000, "Basic"));   // Expected output: "Service Fee: $50.00"


//Task 4: Parameters and Arguments

//Function to calculate car rental cost
function calculateRentalCost(days, carType, insurance = false) {
    //Determine the daily rate based on the car type
    let dailyRate = carType === "Economy" ? 40 :
                    carType === "Standard" ? 60 :
                    carType === "Luxury" ? 100 : 0; // Default to 0 if invalid type

    //Calculate the base rental cost
    let baseCost = days * dailyRate;

    //Add insurance cost if selected ($20 per day)
    let insuranceCost = insurance ? days * 20 : 0;

    //Calculate total cost
    let totalCost = baseCost + insuranceCost;

    //Return formatted result
    return `Total Rental Cost: $${totalCost}`;
}

//Test data
console.log(calculateRentalCost(3, "Economy", true));  // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false));  // Expected output: "Total Rental Cost: $500"
console.log(calculateRentalCost(2, "Standard", true)); // Expected output: "Total Rental Cost: $160"