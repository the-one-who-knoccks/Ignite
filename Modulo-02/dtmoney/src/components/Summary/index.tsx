import { Container } from './styles';

import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
            <img src={IncomeImg} alt="Entradas"/>
        </header>
        <strong>R$15.500,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
            <img src={OutcomeImg} alt="Saídas"/>
        </header>
        <strong>-R$1.100,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
            <img src={TotalImg} alt="Total"/>
        </header>
        <strong>R$14,400,00</strong>
      </div>
    </Container>
  );
}