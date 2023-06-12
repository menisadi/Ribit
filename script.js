function calculateRevenue() {
  var initialAmount = parseFloat(document.getElementById("initialAmount").value);
  var initialYear = parseInt(document.getElementById("initialYear").value);
  var interestRate = parseFloat(document.getElementById("interestRate").value);
  var initialCPI = parseFloat(document.getElementById("initialCPI").value);
  var currentCPI = parseFloat(document.getElementById("currentCPI").value);

  // Calculate the revenue
  var revenue = initialAmount * (1 + interestRate) * (currentCPI - initialCPI);
  
  // Display the revenue result
  var resultElement = document.getElementById("revenueResult");
  resultElement.textContent = revenue.toFixed(2) + " NIS";
}
