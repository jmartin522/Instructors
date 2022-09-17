var loans = [
 customer = {
    id: 01,
    customerName: 'John Brown',
    phoneNumber: '404-555-1212',
    address: '123 Spring St.',
    loanAmount: 250,
    interest: 0.005,
    loanTermYears: 48,
    loanType: 'personal',
    description: 'Assist with bills',
    calculatedLoanAmount: function calculate(){
        return (this.loanAmount / this.interest) * [1 - (1 / ((1 + this.interest) ** this.loanTermYears))];
    }
 },
customer2 = {
    id: 02,
    customerName: 'Jane Smith',
    phoneNumber: '404-352-9975',
    address: '945 Peachtree Blvd.',
    loanAmount: 500,
    interest: 0.005,
    loanTermYears: 72,
    loanType: 'business',
    description: 'Purchase office equipment',
    calculatedLoanAmount: function calculate(){
        return (this.loanAmount / this.interest) * [1 - (1 / ((1 + this.interest) ** this.loanTermYears))];
    }
},
customer3 = {
    id: 03,
    customerName: 'Kim Martin',
    phoneNumber: '678-900-5267',
    address: '9267 Biltmore Way',
    loanAmount: 200,
    interest: 0.002,
    loanTermYears: 24,
    loanType: 'personal',
    description: 'Assist with bills',
    calculatedLoanAmount: function calculate(){
        return (this.loanAmount / this.interest) * [1 - (1 / ((1 + this.interest) ** this.loanTermYears))];
    }
},    
customer4 = {
    id: 04,
    customerName: 'Christina Hanson',
    phoneNumber: '770-560-1234',
    address: '98 MLK Blvd.',
    loanAmount: 700,
    interest: 0.002,
    loanTermYears: 72,
    loanType: 'business',
    description: 'Purchase company vehicle',
    calculatedLoanAmount: function calculate(){
        return (this.loanAmount / this.interest) * [1 - (1 / ((1 + this.interest) ** this.loanTermYears))];
    }
}
]
loans.push(customer);
loans.push(customer2);
loans.push(customer3);
loans.push(customer4);

console.log(customer.customerName, customer.loanAmount, customer.interest, customer.loanTermYears, customer.calculatedLoanAmount());
console.log(customer2.customerName, customer2.loanAmount, customer2.interest, customer2.loanTermYears, customer2.calculatedLoanAmount());
console.log(customer3.customerName, customer3.loanAmount, customer3.interest, customer3.loanTermYears, customer3.calculatedLoanAmount());
console.log(customer4.customerName, customer4.loanAmount, customer4.interest, customer4.loanTermYears, customer4.calculatedLoanAmount());