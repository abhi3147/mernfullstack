function validateRequiredField(field) {
    if (field.value === "") {
      throw new Error("The field " + field.name + " is required.");
    }
  }
  