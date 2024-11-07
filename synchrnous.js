function authenticateUser(username, password) {
    // Simulate a synchronous authentication process (blocks the code until it's done)
    console.log("Authenticating...");
    
    if (username === "user" && password === "pass") {
      console.log("Authentication Successful!");
      return true;
    } else {
      console.log("Authentication Failed!");
      return false;
    }
  }
  
  function fetchUserProfile(userId) {
    // Simulate fetching user data (blocks until data is retrieved)
    console.log("Fetching user profile...");
    const profile = {
      userId: userId,
      name: "John Doe",
      age: 30
    };
    console.log("User Profile Retrieved:", profile);
    return profile;
  }
  
  function runApp(username, password) {
    console.log("Starting application...");
  
    // Step 1: Authenticate user (synchronously blocking)
    const isAuthenticated = authenticateUser(username, password);
    
    if (isAuthenticated) {
      // Step 2: Fetch user profile (synchronously blocking)
      const profile = fetchUserProfile(1);
    } else {
      console.log("Authentication failed, cannot fetch user data.");
    }
  }
  
  runApp("user", "pass");
  