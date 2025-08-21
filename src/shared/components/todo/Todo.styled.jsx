import styled from '@emotion/styled';
import { Bt } from '../../ui/Common.styled';

export const Wrapper = styled.div`
  margin: 10px 0;
`;

export const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  height: 60px;
  width: 600px;
  box-shadow: 1px 1px 10px #aeaeae;
  border-radius: 10px;
`;
export const Content = styled.div`
  height: 100%;
  width: 75%;
  text-align: start;
  font-size: 20px;
`;

export const BtBox = styled.div`
  width: 25%;
`;
export const EditBt = styled(Bt)`
  padding: 10px 20px;

  background: #caffca;
  :hover {
    font-weight: 600;
    background: #00ff00;
  }
`;
export const DeleteBt = styled(Bt)`
  padding: 10px 20px;
  background: #ff8585;

  :hover {
    color: #fff;
    font-weight: 600;
    background: red;
  }
`;
