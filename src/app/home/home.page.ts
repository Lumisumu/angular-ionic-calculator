import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentNumber: any = ''; //Number that is being typed
  firstNumber: any = ''; //First number is stored here after the first operator is typed
  operator: any = null;
  remainder: any = '0'; //jakojäännös
  result: any = null;

  operatorTyped = false;

  //Text containers
  activeScreen: string = '0';
  historyScreen1: string = '';
  historyScreen2: string = '';
  historyScreen3: string = '';

  //Calculator functions

  public addNumber(num: string) {
    if (this.activeScreen === '0') {
      this.activeScreen = '';
    }
    this.currentNumber += num;
    this.activeScreen += num;
  }

  public addOperator(oper: string) {
    if (this.currentNumber === '' && oper === '-') {
      this.activeScreen = '';
      this.currentNumber += oper;
      this.activeScreen += oper;
    } else if (this.currentNumber != '' && this.operatorTyped == false) {
      this.operatorTyped = true;
      this.operator = oper;
      this.firstNumber = this.currentNumber;
      this.currentNumber = '';
      this.activeScreen += ' ' + oper + ' ';
    }
  }

  public addDecimalPoint() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
      this.activeScreen += '.';
    }
  }

  public addBracket() {}

  public calculate() {
    //If second number was left empty after operator and user presses =, returns result of first number
    if (this.operator != null && this.currentNumber === '') {
      this.activeScreen = this.firstNumber + ' = ' + this.firstNumber;
      this.updateHistory();
      this.removeAll();
    } else if (this.operator == null && this.currentNumber != '') {
      this.activeScreen = this.currentNumber + ' = ' + this.currentNumber;
      this.updateHistory();
      this.removeAll();
    } else {
      //Final calculation

      this.activeScreen += ' = ';

      if (this.operator === '+') {
        this.result = Number(this.firstNumber) + Number(this.currentNumber);
        this.activeScreen = this.activeScreen += this.result;
        this.updateHistory();
        this.removeAll();
      } else if (this.operator === '-') {
        this.result = Number(this.firstNumber) - Number(this.currentNumber);
        this.activeScreen = this.activeScreen += this.result;
        this.updateHistory();
        this.removeAll();
      } else if (this.operator === '*') {
        this.result = Number(this.firstNumber) * Number(this.currentNumber);
        this.activeScreen = this.activeScreen += this.result;
        this.updateHistory();
        this.removeAll();
      } else if (this.operator === '/') {
        this.result = Number(this.firstNumber) / Number(this.currentNumber);
        this.remainder = Number(this.firstNumber) % Number(this.currentNumber);

        if (this.remainder != '0' && this.remainder != 1) {
          this.result = String(this.result);
          this.result = this.result.substring(0, this.result.length - 1);
        }

        this.activeScreen = this.activeScreen += this.result;
        this.updateHistory();
        this.removeAll();
      }
    }
  }

  private updateHistory() {
    this.historyScreen3 = this.historyScreen2;
    this.historyScreen2 = this.historyScreen1;
    this.historyScreen1 = this.activeScreen;
  }

  public removeAll() {
    this.currentNumber = '';
    this.firstNumber = '';
    this.operator = null;
    this.operatorTyped = false;
    this.activeScreen = '0';
    this.remainder = '0';
  }

  public copyToClipboard() {
    //make function that copies the active screen to clipboard
  }
}
