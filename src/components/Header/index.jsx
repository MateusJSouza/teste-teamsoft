import avatarIcon from '../../assets/icons/avatar.svg'
import cartIcon from '../../assets/icons/cart.svg'
import arrowDown from '../../assets/icons/arrow-down.svg'
import deliverize from '../../assets/images/deliverize.png'

import { Actions, ActionsDetails, Container, Input } from './styles'

export function Header() {
  return (
    <Container>
      <div>
        <img
          src={deliverize}
          alt="Logo da Deliverize: uma ilustração de um pacote de entrega com pernas correndo e ao lado o nome 'Deliverize' em vermelho. Logo abaixo, o slogan da marca escrito 'precisou, comprou, chegou'"
        />
      </div>

      <Actions>
        <div className="delivery">
          <div className="address">
            <p>Entrega:</p>

            <span>R. Antonio Braune, 222</span>
          </div>

          <img src={arrowDown} alt="" />
        </div>

        <Input placeholder="Busque por estabelecimento ou produtos" />

        <ActionsDetails>
          <img src={avatarIcon} alt="" />
          <a href="/">Entrar</a>
        </ActionsDetails>

        <ActionsDetails>
          <img src={cartIcon} alt="" />
          <a href="/">Carrinho</a>
        </ActionsDetails>
      </Actions>
    </Container>
  )
}
