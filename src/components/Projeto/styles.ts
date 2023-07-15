import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corBotao};
  text-decoration: none;
  padding: 8px;
  margin-top: 24px;
  display: inline-block;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 200px;
    text-align: center;
    font-size: 16px;
    margin-left: 16px;
    border-radius: 4px;
  }
`
