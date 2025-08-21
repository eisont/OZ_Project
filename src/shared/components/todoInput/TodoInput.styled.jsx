import styled from '@emotion/styled';
import { Bt } from '../../ui/Common.styled';

export const Wrapper = styled.div``;

export const InputBox = styled.input`
  padding: 20px 10px;
  margin: 20px;
  width: 500px;

  font-size: 20px;

  box-shadow: 1px 1px 10px #aeaeae;
  border-radius: 10px;
  outline: none;
  border: none;
`;

export const AddBt = styled(Bt)`
  padding: 10px 20px;
  background: #ededed;

  :hover {
    background: #aeaeae;
    font-weight: 900;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
`;
