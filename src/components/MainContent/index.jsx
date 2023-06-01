import { Container, Ingredients, ProductDetails } from './styles'

import subtractIcon from '../../assets/icons/subtract.svg'
import addIcon from '../../assets/icons/add.svg'
import hamburguer from '../../assets/images/hamburguer.png'

export function MainContent() {
  return (
    <Container>
      <ProductDetails>
        <img src={hamburguer} alt="" />

        <p>Oferta Picanha Cheddar Bacon</p>

        <span>
          Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo
          cheddar, molho cheddar e pão mix de gergelim
        </span>

        <div className="price">
          <h1>R$31,99</h1>
          <s>R$34,95</s>
        </div>
      </ProductDetails>

      <Ingredients>
        <div className="add-ingredients">
          <p>Adicionar Ingredientes</p>
          <span>Até 8 ingredientes.</span>
        </div>

        <div className="accompaniments">
          <div className="left-box">
            <p>Queijo cheddar</p>
            <span>+ R$4,99</span>
          </div>

          <div className="right-box">
            <button type="button">
              <img src={subtractIcon} alt="" />
            </button>
            <p>2</p>
            <button type="button">
              <img src={addIcon} alt="" />
            </button>
          </div>
        </div>

        <div
          className="divider"
          style={{
            border: '1px solid #e8a634',
            margin: '8px 0',
          }}
        />

        <div className="accompaniments">
          <div className="left-box">
            <p>Queijo cheddar</p>
            <span>+ R$4,99</span>
          </div>

          <div className="right-box">
            <button type="button">
              <img src={subtractIcon} alt="" />
            </button>
            <p>2</p>
            <button type="button">
              <img src={addIcon} alt="" />
            </button>
          </div>
        </div>

        <div
          className="divider"
          style={{
            border: '1px solid #e8a634',
            margin: '8px 0',
          }}
        />

        <div className="option">
          <p>Precisa de talher?</p>
        </div>

        <div className="choice">
          <div className="yes">
            Sim
            <input type="radio" />
          </div>

          <div className="no">
            Não
            <input type="radio" />
          </div>
        </div>

        <div className="total">
          <div className="counter">
            <button type="button">
              <img src={subtractIcon} alt="" />
            </button>
            <p>2</p>
            <button type="button">
              <img src={addIcon} alt="" />
            </button>
          </div>

          <button className="add-to-cart" type="submit">
            Adicionar
          </button>
        </div>
      </Ingredients>
    </Container>
  )
}
