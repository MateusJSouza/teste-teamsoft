import styled from 'styled-components'

import * as Popover from '@radix-ui/react-popover'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 24px 66px;

  position: relative;

  @media screen and (max-width: 1180px) {
    flex-direction: column;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: 10px;

    width: 528px;
    height: 34px;

    font-size: 28px;
    font-weight: 500;
  }

  span {
    margin-top: 54px;

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

  @media screen and (max-width: 1080px) {
    img {
      width: 520px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 70%;
    }

    p {
      font-size: 24px;
    }

    span {
      font-size: 18px;
    }

    .price {
      h1,
      s {
        font-size: 28px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 420px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }

    p {
      width: 344px;
      height: 38px;
      font-size: 18px;
      margin-top: 16px;
    }

    span {
      margin-top: 0;

      width: 344px;
      height: 78px;
      font-size: 16px;
    }

    .price {
      h1,
      s {
        font-size: 14px;
      }
    }
  }
`

export const Ingredients = styled.div`
  width: 440px;
  min-width: 375px;
  height: 662px;

  display: flex;
  flex-direction: column;

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
    padding: 8px 14px 24px 14px;

    p {
      font-size: 14px;
      font-weight: 500;
    }
  }

  .choice {
    display: flex;
    flex-direction: column;

    .yes {
      display: none;
    }

    .no {
      display: none;
    }
  }

  .total {
    margin-top: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .counter {
      display: flex;
      align-items: center;
      justify-content: space-around;

      padding: 8px;

      width: 140px;
      height: 40px;

      border: 1px solid ${({ theme }) => theme.colors.yellow.primary};
      border-radius: 5px;

      position: relative;

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

  @media screen and (max-width: 1180px) {
    border: none;

    .choice {
      .yes,
      .no {
        font-size: 14px;
        margin-top: 8px;

        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .total {
      margin-top: 8px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 410px;

    margin-top: 32px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .total {
      .add-to-cart {
        width: 195px;
      }
    }

    .accompaniments {
      width: 346px;
    }
  }
`

export const PopoverContent = styled(Popover.Content)`
  background: #f8f8f8;

  header {
    padding: 8px 8px 4px 8px;
    background: #f09035;
    border-radius: 4px 4px 0px 0px;

    strong {
      font-size: 18px;
      font-weight: 700;
      color: white;
    }
  }

  .badges {
    padding: 8px 10px;

    p {
      font-size: 14px;
      font-weight: 700;
      color: #bc2e31;
    }

    .ingredients {
      p {
        margin-top: 8px;
        font-size: 12px;
        font-weight: normal;
        color: ${({ theme }) => theme.colors.gray.dark};
      }

      ul {
        margin-top: 8px;

        display: flex;
        flex-direction: column;
        font-size: 12px;

        li {
          font-size: 12px;
          margin-left: 26px;
        }
      }
    }
  }

  .popover-arrow {
    fill: ${({ theme }) => theme.colors.yellow.primary};
  }
`
