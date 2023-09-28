function showDate() {
    // Create a new Date object with the current date and time.
    const date = new Date();
  
    // Use the toLocaleDateString() method to format the date according to the user's locale.
    const formattedDate = date.toLocaleDateString();
  
    // Display the formatted date.
    console.log(formattedDate);
  }
  
  function showDateTimeWithTimezone() {
    // Create a new Date object with the current date and time.
    const date = new Date();
  
    // Use the toLocaleString() method to format the date and time according to the user's locale and timezone.
    const formattedDateTime = date.toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  
    // Display the formatted date and time.
    console.log(formattedDateTime);
  }
  