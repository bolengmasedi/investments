import { Injectable, signal } from "@angular/core";
import { AnnualData } from "./investment-results.model";

@Injectable({
  providedIn: "root"
})
export class InvestmentResultsService {
  investmentResults = signal<AnnualData[]>([]);

  constructor() {}

  calculateInvestmentResults(data: {
    initialInvestment: number 
    duration: number, 
    expectedReturn: number, 
    annualInvestment: number
  }) {
    const {
      initialInvestment,
      duration,
      expectedReturn,
      annualInvestment
    } = data;
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    this.investmentResults.set(annualData);
  }
}
