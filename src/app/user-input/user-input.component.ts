import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  investmentResultService = inject(InvestmentResultsService);

  initialInvestment = '0';
  annualInvestment = '0';
  returnRate = '5';
  duration = '10'

  onSubmit() {
    this.investmentResultService.calculateInvestmentResults({
      initialInvestment: parseFloat(this.initialInvestment),
      annualInvestment: parseFloat(this.annualInvestment),
      expectedReturn: parseFloat(this.returnRate),
      duration: parseFloat(this.duration)
    })
  }
}
