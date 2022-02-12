import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background:#2c173a;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 32px;
  display: flex;

  input {
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: none;
    background: transparent;
    color: #fff;
    ::placeholder {
      color: #ffffff45;
    }
  }
`;