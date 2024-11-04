const transactions = [100, -50, 200, -10, 300];
for (let transaction of transactions) {
    if (transaction < 0) {
        continue; // Skip invalid transactions
    }
    console.log("Processing transaction:", transaction);
}
