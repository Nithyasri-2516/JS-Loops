function whileLoop(inputPassword) {
    const correctPassword = "secret";
    let attempts = 0;
    const maxAttempts = 3; // Optional: max attempts allowed
    while (inputPassword !== correctPassword &&  maxAttempts < attempts ) {
        console.log("Access denied. Please try again.");
        attempts++;
    }

    if (inputPassword === correctPassword) {
        console.log("Access granted!");
    } else {
        console.log("Too many attempts. Access locked.");
    }
}
whileLoop("secret"); 