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