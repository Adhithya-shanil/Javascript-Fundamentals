fetch("https://api.adviceslip.com/advice")
  .then(response => {
      console.log(response);  // Shows full Response object
      return response.json();
  })
  .then(data => {
      console.log("data");
      console.log("\n\n",data);  // Shows parsed JSON data
      console.log(data.slip.advice);
  })
  .catch(error => console.error("Error:", error));
