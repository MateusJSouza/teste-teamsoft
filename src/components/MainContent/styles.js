import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 24px;
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: 10px;

    width: 528px;
    height: 92px;

    font-size: 20px;
    font-weight: 500;
  }

  span {
    margin-top: 10px;

    width: 598px;
    height: 66px;
    font-size: 20px;
  }

  .price {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 10px;

    h1 {
      color: ${({ theme }) => theme.colors.yellow.primary};
      font-weight: 400;
    }

    s {
      font-size: 32px;
      font-weight: 400;
    }
  }
`

export const Ingredients = styled.div`
  width: 439px;
  height: 662px;
  max-width: 100%;

  padding: 32px;

  border: 1px solid #686868;
  border-radius: 8px;

  .add-ingredients {
    margin-bottom: 16px;

    background: ${({ theme }) => theme.colors.yellow.light};
    padding: 8px 16px;

    p {
      font-size: 14px;
      font-weight: 500;
    }

    span {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.yellow.primary};
    }
  }

  .accompaniments {
    width: 360px;
    height: 88px;
    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-box {
      height: 100%;
      display: flex;
      flex-direction: column;

      p {
        width: 244px;
        height: 16px;

        font-size: 14px;
        font-weight: 500;

        margin-bottom: 4px;
      }

      span {
        margin-top: 40px;
        width: 244px;
        height: 16px;

        font-size: 14px;
        color: ${({ theme }) => theme.colors.yellow.primary};
      }
    }

    .right-box {
      display: flex;
      align-items: center;
      justify-content: space-around;

      padding: 8px;
      margin: 8px 0 8px 0;

      width: 90px;
      height: 32px;

      border: 1px solid ${({ theme }) => theme.colors.yellow.primary};
      border-radius: 5px;

      margin-bottom: 4px;

      button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
      }
    }
  }

  .option {
    background: ${({ theme }) => theme.colors.yellow.light};
    padding: 8px 16px 24px 16px;

    p {
      font-size: 14px;
      font-weight: 500;
    }
  }

  .choice {
    display: flex;
    flex-direction: column;

    .yes {
      margin-top: 8px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      input[type='radio'] {
        border: 1px solid ${({ theme }) => theme.colors.yellow.dark};
      }
    }

    .no {
      margin-top: 8px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      input[type='radio'] {
        border: 1px solid ${({ theme }) => theme.colors.yellow.dark};
      }
    }
  }

  .total {
    margin-top: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .counter {
      display: flex;
      align-items: center;
      justify-content: space-around;

      padding: 8px;
      margin: 8px 0 8px 0;

      width: 140px;
      height: 40px;

      border: 1px solid ${({ theme }) => theme.colors.yellow.primary};
      border-radius: 5px;

      margin-bottom: 4px;

      button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
      }
    }

    .add-to-cart {
      background: ${({ theme }) => theme.colors.yellow.primary};
      color: white;

      border: none;
      border-radius: 4px;

      width: 220px;
      height: 40px;

      font-size: 14px;
      font-weight: 500;
    }
  }
`
