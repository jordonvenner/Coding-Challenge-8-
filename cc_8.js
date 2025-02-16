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
