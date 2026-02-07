const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      console.log("Data received!");
      
    } else {
        console.log("Error: Failed to fetch");
        
    }
  }, 2000);
});