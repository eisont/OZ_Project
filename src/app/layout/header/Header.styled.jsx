import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 900px;
`;
export const MenuBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Menu = styled.div`
  padding: 20px 20px;
  border-radius: 10px;
  border: 1px solid #aeaeae;
`;

export const Linkst = styled(Link)`
  text-decoration: none;
  color: #000;
`;
