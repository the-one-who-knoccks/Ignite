import { useEffect } from 'react';
import { Container } from './styles';

import { api } from '../../services/api';

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(res  => console.log(res.data));
  }, []);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de software</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>06/05/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1.100</td>
            <td>Casa</td>
            <td>04/05/2021</td>
          </tr>
          <tr>
            <td>Pagamento do mês</td>
            <td className="deposit">R$3.500</td>
            <td>Foton Tech</td>
            <td>06/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}