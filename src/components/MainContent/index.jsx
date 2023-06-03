import { useEffect, useState } from 'react'

import * as Popover from '@radix-ui/react-popover'

import { api } from '../../services/api'

import hamburguer from '../../assets/images/hamburguer.png'
import subtractIcon from '../../assets/icons/subtract.svg'
import addIcon from '../../assets/icons/add.svg'

import {
  Container,
  Ingredients,
  PopoverContent,
  ProductDetails,
} from './styles'

export function MainContent() {
  const [data, setData] = useState([])
  const [quantities, setQuantities] = useState(0)

  function handleIncrease(itemId) {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities }
      if (updatedQuantities[itemId] === undefined) {
        updatedQuantities[itemId] = 1
      } else {
        updatedQuantities[itemId] += 1
      }
      return updatedQuantities
    })
  }

  function handleDecrease(itemId) {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities }
      if (updatedQuantities[itemId] > 0) {
        updatedQuantities[itemId] -= 1
      }
      return updatedQuantities
    })
  }

  useEffect(() => {
    api
      .get('/products')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      {data.map((item) => (
        <ProductDetails key={item.id}>
          <img src={hamburguer} alt="" />

          <p>{item.nm_product}</p>

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

        {data[0]?.ingredients?.map((group) => {
          if (group.group === 'Ingredientes Extras') {
            return group.itens.map((item) => (
              <div className="container" key={item.id}>
                <div className="accompaniments">
                  <div className="left-box">
                    <p>{item.nm_item}</p>
                    <span>+ R${item.vl_item.toFixed(2)}</span>
                  </div>

                  <div className="right-box">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      type="button"
                    >
                      <img src={subtractIcon} alt="" />
                    </button>
                    <p>{quantities[item.id] || 0}</p>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      type="button"
                    >
                      <img src={addIcon} alt="" />
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    border: '1px solid #e8a634',
                    margin: '8px 0',
                    width: '344px',
                  }}
                />
              </div>
            ))
          }
          return null
        })}

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
            <p>1</p>
            <button type="button">
              <img src={addIcon} alt="" />
            </button>
          </div>

          <Popover.Root>
            <Popover.Trigger className="add-to-cart">Adicionar</Popover.Trigger>
            <Popover.Portal>
              <PopoverContent side="bottom" align="center">
                <header>
                  <strong>Adicionado com sucesso</strong>
                </header>

                <div className="badges">
                  <p>Oferta Cheddar Bacon</p>

                  <div className="ingredients">
                    <p>Ingredientes</p>
                    <ul>
                      <li>1 Carne 250gr</li>
                      <li>2 Queijo Cheddar</li>
                      <li>1 Bacon</li>
                      <li>Molho Especial</li>
                    </ul>
                  </div>
                </div>
                <Popover.Arrow className="popover-arrow" />
              </PopoverContent>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </Ingredients>
    </Container>
  )
}
