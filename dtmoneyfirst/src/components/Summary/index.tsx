import { Container } from "./styles";
import upImg from '../../assets/Up.svg'
import downImg from '../../assets/Down.svg'
import totalImg from '../../assets/Total.svg'
import { TransactionsContext} from "../../TransactionsContext";
import React, { useContext } from 'react'


export function Summary() {

  const transactions = useContext(TransactionsContext);
  console.log(transactions);

  return(
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={upImg} alt="Entradas" />
          </header>
          <strong>R$1000,00</strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <img src={downImg} alt="Saidas" />
          </header>
          <strong>- R$500,00</strong>
        </div>

        <div className="Total">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>R$500,00</strong>
        </div>

      </Container>
  )
}