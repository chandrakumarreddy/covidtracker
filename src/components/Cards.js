import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Cards({bg, icon, title, number, onPress}) {
  return (
    <Container $bg={bg}>
      <Cover>
        <Icon name={icon} size={30} color={bg == 'red' ? '#FFF' : 'red'} />
        <TouchableOpacity onPress={onPress}>
          <Icon2
            style={{marginLeft: 50}}
            name="dots-vertical"
            size={30}
            color="#b8b8aa"
          />
        </TouchableOpacity>
      </Cover>
      <Title>{title}</Title>
      <Number $bg={bg}>{number}</Number>
    </Container>
  );
}

const Container = styled.View`
  height: 160px;
  width: 130px;
  border-radius: 30px;
  padding: 15px;
  margin-left: 20px;
  background-color: ${({$bg}) => $bg};
`;

const Cover = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
  margin-top: 55px;
  color: #b8b8aa;
  font-weight: bold;
  font-size: 12px;
`;

const Number = styled.Text`
  font-weight: bold;
  margin-top: 6px;
  font-size: 22px;
  color: ${({$bg}) => ($bg == 'red' ? '#FFF' : '#000')};
`;
