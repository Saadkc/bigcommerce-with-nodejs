
// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const userType = urlParams.get("dummy");

// Update the form based on the user type
const userTypeDropdown = document.getElementById("user-type");
const paymentMethodDropdown = document.getElementById("payment-method");

userTypeDropdown.value = userType;

userTypeDropdown.addEventListener("change", () => {
  const selectedUserType = userTypeDropdown.value;

  if (selectedUserType === "retailer") {
    paymentMethodDropdown.value = "cod";
    paymentMethodDropdown.querySelector("option[value='bank-transfer']").style.display = "none";
  } else {
    paymentMethodDropdown.querySelector("option[value='bank-transfer']").style.display = "block";
  }
});
