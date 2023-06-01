import avatarIcon from '../../assets/icons/avatar.svg'
import cartIcon from '../../assets/icons/cart.svg'
import arrowDownIcon from '../../assets/icons/arrow-down.svg'
import arrowLeftIcon from '../../assets/icons/arrow-left.svg'
import deliverize from '../../assets/images/deliverize.png'

import { Actions, ActionsDetails, Container, Input } from './styles'

export function Header() {
  return (
    <Container>
      <div className="header-mobile">
        <img
          src={deliverize}
          alt="Logo da Deliverize: uma ilustração de um pacote de entrega com pernas correndo e ao lado o nome 'Deliverize' em vermelho. Logo abaixo, o slogan da marca escrito 'precisou, comprou, chegou'"
        />
      </div>

      <img className="arrow-left" src={arrowLeftIcon} alt="" />

      <Actions>
        <div className="delivery">
          <div className="address">
            <p>Entrega:</p>

            <span>R. Antonio Braune, 222</span>
          </div>

          <img src={arrowDownIcon} alt="" />
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
