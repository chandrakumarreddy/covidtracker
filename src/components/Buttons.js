import React from 'react';
import styled from 'styled-components/native';

export default function Buttons({textInfo, name, number}) {
  console.log(name, number);
  return (
    <Container>
      <Circle>
        <TextInfo>{textInfo}</TextInfo>
      </Circle>
      <Name>{name}</Name>
      <Number>{number}</Number>
    </Container>
  );
}

const Container = styled.View`
  border-width: 0.3px;
  border-color: #6a706e;
  border-radius: 15px;
  padding: 16px 20px;
  margin: 8px 30px;
  flex-direction: row;
  align-items: center;
`;
const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #2b3240;
`;
const TextInfo = styled.Text`
  color: #6a706e;
  font-weight: bold;
`;
const Name = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 12px;
  margin-left: 20px;
`;
const Number = styled.Text`
  font-weight: bold;
  color: red;
  font-size: 14px;
  margin-left: 90px;
`;
