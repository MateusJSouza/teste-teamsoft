import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.colors.headerBackground};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 40px;

  position: relative;

  .header-mobile {
    display: flex;
    justify-content: center;
  }

  .arrow-left {
    position: absolute;
    top: 36px;
    left: 20px;
  }

  @media screen and (max-width: 1120px) {
    justify-content: space-around;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (max-width: 1120px) {
    display: none;
  }

  .delivery {
    width: 230px;
    height: 48px;

    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    gap: 10px;

    p {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.red.dark};
    }

    span {
      font-size: 12px;
      font-weight: 700;
      /* line-height: 12px; */
      color: ${({ theme }) => theme.colors.gray.light};
    }

    .address {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`

export const Input = styled.input`
  width: 320px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.red.primary};
  border-radius: 4px;
  padding: 16px 16px;

  outline: none;
  font-size: 14px;
  line-height: 10px;
`

export const ActionsDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 26px;
    height: 26px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.red.primary};
  }
`
