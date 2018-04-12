import styled from 'styled-components';

export const App = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

export const A = styled.a`
  color: ${props => props.theme.colors.main};

  &:active,
  &:hover {
    text-decoration: none;
    color: #52b6ac;
  }
`;

export const P = styled.p`
  font-size: ${props => props.theme.font.sizes.normal};
  line-height: ${props => props.theme.font.sizes.bigger};
`;

export const Article = styled.article`
  margin: ${props => props.theme.alignment.horizontalcenter};
  max-width: 650px;
`;

export const Button = styled.button`
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.theme.colors.main};
  border: 0;
  color: ${props => props.theme.colors.textAlt};
  display: flex;
  padding: ${props => props.theme.spacing.smaller};
  &:active {
    background-color: ${props =>
      props.theme
        .helper(props.theme.colors.main)
        .darken(0.2)
        .string()};
    transition: background-color 0.3s;
  }
  &:focus {
    outline: none;
  }
`;

export const I = styled.i`
  color: inherit;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  border-radius: 0;
  outline: none;
  height: 30px;
  font-size: 18px;
  margin: auto;
  padding: 5px;
  box-shadow: none;
  box-sizing: content-box;
  transition: box-shadow 0.3s, border 0.3s;

  &:focus {
    border-bottom: 1px solid #52b6ac;
  }
`;

export const Msg = styled.h6`
  width: 100%;
  font-size: 18px;
  height: auto;
  color: white;
  border-radius: 0;
  border: none;
  padding: 5px;
  margin: 10px 0;
`;

export const Success = Msg.extend`
  background-color: #50ae54;
`;

export const Error = Msg.extend`
  background-color: #f2453d;
`;
