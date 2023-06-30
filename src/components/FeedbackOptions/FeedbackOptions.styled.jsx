import styled from 'styled-components';

export const FormFeedback = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: space-around;
  gap: 10px;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  padding: 5px;
  background: #ff8500;
  color: #fff;
  box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
  width: 100%;
  :hover {
    background: #ea7b00;
    color: #fff;
  }
`;
