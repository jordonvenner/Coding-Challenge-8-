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


//Task 5: Returning Values

//Function to calculate total loan payment
function calculateLoanPayment(principal, rate, time) {
    //1st: Calculate the interest
    let interest = principal * rate * time;

    //2nd: Compute total payment
    let totalPayment = principal + interest;

    //3rd: Format and return the result
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}

//Test data
console.log(calculateLoanPayment(1000, 0.05, 2));  // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3));  // Expected output: "Total Payment: $6050.00"



//Task 6: Higher-Order Functions

//1st: Declare an array of transactions
let transactions = [200, 1500, 3200, 800, 2500];

//2nd: Higher-order function to filter large transactions
function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

//3rd: Call the function with a filter condition (amount > 1000)
let largeTransactions = filterLargeTransactions(transactions, amount => amount > 1000);

//4th: Print the result
console.log(largeTransactions); // Expected output: [1500, 3200, 2500]


//Task 7: Closures

//1st: Define the createCartTracker function
function createCartTracker() {
    let total = 0; // This variable remembers the running total

    //2nd: Return an inner function that adds to the total
    return function (amount) {
        total += amount; // Add the new amount to total
        return `Total Cart Value: $${total}`;
    };
}

//3rd: Create a new cart tracker
let cart = createCartTracker();

//4th: Test the function by adding items
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"
console.log(cart(15)); // Expected output: "Total Cart Value: $70"
