import styled from '@emotion/styled';

const Wrapper = styled.input`
  height: 100%;
  width: 75%;
  outline: none;
`;

const EditTodo = (pr) => {
  return <Wrapper ref={pr.ref} placeholder='여기에 작성해주세요.'></Wrapper>;
};

export default EditTodo;
