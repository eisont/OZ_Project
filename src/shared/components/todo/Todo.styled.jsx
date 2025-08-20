import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  width: 600px;
  box-shadow: 1px 1px 10px #aeaeae;
  border-radius: 10px;
`;
export const Content = styled.div`
  font-size: 20px;
`;
export const BtBox = styled.div``;
export const EditBt = styled.button`
  background: #caffca;
  :hover {
    color: #fff;
    background: #00ff00;
  }
`;
export const DeleteBt = styled.button`
  background: #ff8585;
  :hover {
    color: #fff;
    background: red;
  }
`;
