import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <S.Linkst to='/'>Home</S.Linkst>
      </S.Menu>
      <S.Menu>
        <S.Linkst to='/Todo_List'>Todo_List</S.Linkst>
      </S.Menu>
      <S.Menu>
        <S.Linkst to='/Timer_StopWatch_CurrentTime'>Timer_StopWatch_CurrentTime</S.Linkst>
      </S.Menu>
      {/* <S.Menu>
        <S.Linkst to='/Weather_Project'>Weather_Project</S.Linkst>
      </S.Menu> */}
      <S.Menu>
        <S.Linkst to='/TailwindCss_Project'>TailwindCss_Project</S.Linkst>
      </S.Menu>
    </S.Wrapper>
  );
};

export default Header;
