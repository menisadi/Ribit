function calculateRevenue() {
  var initialAmount = parseFloat(document.getElementById("initialInvestment").value);
  var timePeriod = parseFloat(document.getElementById("timePeriod").value);
  var interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
  var initialCPI = parseFloat(document.getElementById("initialCPI").value);
  var currentCPI = parseFloat(document.getElementById("currentCPI").value);
  
  // Calculate the revenue
  var inflationRate = currentCPI / initialCPI;
  var revenue = initialAmount * Math.pow((1 + interestRate), timePeriod) * inflationRate;
  
  // Display the revenue result
  var resultElement = document.getElementById("revenueResult");
  resultElement.textContent = revenue.toFixed(2) + " NIS";
}
