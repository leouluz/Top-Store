import styled from 'styled-components';

export const Container = styled.div`
    align-self: center;
    justify-self: center;
    background: #ddd;
    width: 200px;
    border-radius: 0.8rem;
    div {
      display: flex;
      padding: 1.5rem 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    header {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h2 {
        margin-bottom: 8px;
      }
      img {
        width: 120px;
        height: 120px;
        border-radius: 0.8rem;
      }
    }
    strong {
      margin-top: 1.5rem;
      font-size: 26px;
      background: #2cc;
      padding: 10px;
      border-radius: 8px;
    }
`;

export const ButtonAdd = styled.button`
  height: 25px;
  width: 100%;
  background: #18604A;
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  p {
    font-weight: bold;
    color: #ddd;
  }
`;

export const ButtonRemove = styled.button`
  height: 25px;
  width: 100%;
  background: #D22D23;
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  p {
    font-weight: bold;
    color: #000;
  }
`;