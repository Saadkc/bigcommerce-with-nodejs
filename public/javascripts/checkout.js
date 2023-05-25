
const userTypeDropdown = document.getElementById("user-type");
const paymentMethodDropdown = document.getElementById("payment-method");

// Static data for wholesaler dropdown
const wholesalerOptions = ["Cod", "bank_deposit"];

// Retrieve the dummy data from the query parameter in the URL
const urlParams = new URLSearchParams(window.location.search);
const dummyString = urlParams.get("dummy");
const dummy = JSON.parse(dummyString);

// Dynamic data for retailer dropdown based on dummy data
const retailerOptions = dummy.retailer;

// Function to populate the dropdown options
const populateDropdown = (dropdown, options) => {
    dropdown.innerHTML = ""; // Clear existing options

    options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
    });
};

// Populate the wholesaler and retailer dropdowns initially
populateDropdown(userTypeDropdown, ["Wholesaler", "Retailer"]);
populateDropdown(paymentMethodDropdown, wholesalerOptions);

// Event listener for user type change
userTypeDropdown.addEventListener("change", () => {
    const userType = userTypeDropdown.value;

    if (userType === "retailer") {
        paymentMethodDropdown.value = "Cod";
        paymentMethodDropdown.querySelector("option[value='bank-transfer']").style.display = "none";
        populateDropdown(paymentMethodDropdown, retailerOptions);
    } else {
        paymentMethodDropdown.querySelector("option[value='bank-transfer']").style.display = "block";
        populateDropdown(paymentMethodDropdown, wholesalerOptions);
    }
});
