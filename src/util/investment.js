
export const calculateInvestmentResults =({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) => {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const getInitialInvestment = (data) => {
  return data.valueEndOfYear - data.interest - data.annualInvestment;
}
export const getTotalInterest = (yearData,initialInvestment) => {
  return yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
}

export const getTotalAmountInvested = (valueEndOfYear , totalInterest) => {
  return valueEndOfYear - totalInterest;
}
