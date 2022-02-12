import styled from 'styled-components';

export const FormContent = styled.div`
  background: rgb(0 0 0 /60%);
  border-radius: 5px;
  margin: 90px 30px;
  padding: 50px; 
  display: flex;
  align-items: center;
  flex-direction: column;

  h1{
    color: #ddd;
    margin-bottom: 32px;
  }

  form {
    width: 100%;
  }
`;

export const ButtonForm = styled.button`
  width: 100%;
  padding: 16px;
  color: #fff;
  background: #f00;
  border-radius: 5px;
  font-weight: 700;
  margin-top: 32px;
`