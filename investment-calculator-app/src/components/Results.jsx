import { calculateInvestmentResults } from "../util/investment";

const Results = function ({ input }) {
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);
};

export default Results;
