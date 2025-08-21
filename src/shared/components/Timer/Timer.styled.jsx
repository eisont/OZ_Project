import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 300px;
  height: 200px;

  border: ${(pr) => (pr.isOn ? '3px dashed green' : '3px solid red')};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Time = styled.div`
  font-size: 30px;
  font-weight: 600;

  color: ${(pr) => (pr.startTime === 0 && !pr.isOn ? '#aeaeae' : 'green')};
`;
export const BtBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
`;

export const Bt = styled.div`
  padding: 10px 12px;
  border-radius: 10px;
  font-weight: 600;

  :hover {
    cursor: pointer;
    font-weight: 600;
  }
`;
