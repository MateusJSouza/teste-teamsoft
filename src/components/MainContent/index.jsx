import { Container, Ingredients, ProductDetails } from './styles'

import subtractIcon from '../../assets/icons/subtract.svg'
import addIcon from '../../assets/icons/add.svg'
import hamburguer from '../../assets/images/hamburguer.png'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function MainContent() {
  const [data, setData] = useState([])

  useEffect(() => {
    api
      .get('/products')
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      {data.map((item) => (
        <ProductDetails key={item.id}>
          <img src={hamburguer} alt="" />

          <p key={item.id}>{item.nm_product}</p>

          <span>{item.description}</span>

          <div className="price">
            <h1>R${item.vl_discount}</h1>
            <s>R${item.vl_price}</s>
          </div>
        </ProductDetails>
      ))}

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
