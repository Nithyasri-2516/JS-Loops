function checkPassword(inputPassword) {
    const correctPassword = "secret";
    while (inputPassword !== correctPassword ) { 
        console.log("Access denied. Please try again.");
        break;
    }
    if (inputPassword === correctPassword) {
        console.log("Access granted!");
    }
}
checkPassword("secret"); 
checkPassword("nithu")