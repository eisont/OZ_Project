import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Bt } from '../../../shared/ui/Common.styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Menu = styled(Bt)`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #aeaeae;
`;

export const Linkst = styled(Link)`
  text-decoration: none;
  color: #000;
`;
