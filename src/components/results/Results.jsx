import {
    calculateInvestmentResults,
    formatter,
    getInitialInvestment,
    getTotalAmountInvested,
    getTotalInterest
} from "../../util/investment.js";

const Results = ({userInput}) =>{
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = getInitialInvestment(resultsData[0]);
    return <table id="result">
        <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Invest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {resultsData.map(yearData => {
            const totalInterest = getTotalInterest( yearData, initialInvestment)
            return <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(getTotalAmountInvested(yearData.valueEndOfYear,totalInterest))}</td>
            </tr>
        })}
        </tbody>
    </table>
}

export default Results;