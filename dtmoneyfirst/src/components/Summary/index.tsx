import { Container } from "./styles";
import upImg from '../../assets/Up.svg'
import downImg from '../../assets/Down.svg'
import totalImg from '../../assets/Total.svg'


export function Summary() {
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