import { Container } from "./styles";
import upImg from '../../assets/Up.svg'
import downImg from '../../assets/Down.svg'
import totalImg from '../../assets/Total.svg'
import { TransactionsContext} from "../../TransactionsContext";
import React, { useContext } from 'react'


export function Summary() {

  const {transactions} = useContext(TransactionsContext);

  // const totalDeposits = transactions.reduce((acc, transaction)=>{
  //   if (transaction.type === 'deposit' ) {
  //     return acc + transaction.amount;
  //   }

  //   return acc;
  // }, 0)

  const summary = transactions.reduce((acc, transaction) => {

    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;

    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,

  })

  return(
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={upImg} alt="Entradas" />
          </header>
          <strong>
          {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL' 
              }).format(summary.deposits)}
            
            </strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <img src={downImg} alt="Saidas" />
          </header>
          <strong>
            - {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL' 
                      }).format(summary.withdraws)}
            </strong>
        </div>

        <div className="Total">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>
          {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL' 
                      }).format(summary.total)}
            </strong>
        </div>

      </Container>
  )
}