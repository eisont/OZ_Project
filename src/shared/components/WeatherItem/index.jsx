import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 20px;
  background: #aeaeae;
`;
const Date = styled.div``;
const Icon = styled.div``;
const Description = styled.div``;
const Temperature = styled.div``;

const WeatherItem = () => {
  return (
    <Wrapper>
      <Date>
        <Icon>
          <Description></Description>
          <Temperature></Temperature>
        </Icon>
      </Date>
    </Wrapper>
  );
};

export default WeatherItem;
