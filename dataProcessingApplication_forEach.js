const transactions = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
    { id: 3, amount: -50 }
];

transactions.forEach(transaction => {
    if (transaction.amount > 0) {
        console.log(`Processing transaction ID ${transaction.id} for amount $${transaction.amount}`);
    } else {
        console.log(`Skipping transaction ID ${transaction.id} due to negative amount.`);
    }
});
