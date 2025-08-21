import styled from '@emotion/styled';

export const CommonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Bt = styled.button`
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    background-color: #aeaeae;
  }
`;
