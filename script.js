function calculateRevenue() {
  var initialAmount = parseFloat(document.getElementById("initialInvestment").value);
  var initialYear = parseInt(document.getElementById("initialYear").value);
  var interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
  var initialCPI = parseFloat(document.getElementById("initialCPI").value);
  var currentCPI = parseFloat(document.getElementById("currentCPI").value);
  // var cpiDifference = parseFloat(document.getElementById("cpiDifference").value);
  const currentYear = new Date().getFullYear(); // Get the current year
  const timePeriod = currentYear - initialYear; // Calculate the time period
  
  // Calculate the revenue
  var inflationRate = currentCPI - initialCPI;
  var revenue = initialAmount * Math.pow((1 + interestRate), timePeriod) * inflationRate;
  
  // Display the revenue result
  var resultElement = document.getElementById("revenueResult");
  resultElement.textContent = revenue.toFixed(2) + " NIS";
}
