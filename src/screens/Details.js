import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Chart from '../components/Chart';

export default function Details() {
  return (
    <Container>
      <Header>
        <View>
          <Icon name="md-remove" size={26} />
          <Icon2 name="md-remove" size={26} />
        </View>
        <View>
          <Image source={require('../images/1.jpeg')} />
        </View>
      </Header>
      <OptionCard>
        <OptionCol>
          <Linear>LINEAR</Linear>
        </OptionCol>
        <Logarthimic>LOGARTHIMIC</Logarthimic>
      </OptionCard>
      <Countries>
        <Country selected>GLOBAL</Country>
        <Country>RUSSIA</Country>
        <View style={styles.refreshIcon}>
          <Icon name="md-refresh" size={24} color="red" />
        </View>
      </Countries>
      <Chart />
      <BottomCard>
        <BottomCol>
          <TextSymptoms>SYMPTOMS</TextSymptoms>
          <InfoContainer>
            <Text style={{color: '#FFF', textAlign: 'center'}}>i</Text>
          </InfoContainer>
        </BottomCol>
        <Button>
          <BtnText>See more graphs</BtnText>
        </Button>
      </BottomCard>
    </Container>
  );
}

const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 0 16px;
`;
const Header = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;
const Icon2 = styled(Icon)`
  margin-top: -20px;
  margin-left: 5px;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
const OptionCard = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 110px;
`;
const OptionCol = styled.View`
  background-color: #000;
  padding: 2px 5px;
  border-radius: 2px;
`;
const Linear = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;
const Logarthimic = styled.Text`
  color: #b8b8aa;
  font-weight: bold;
  font-size: 12px;
  margin-left: 15px;
`;
const Countries = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: 40px;
  padding: 0 40px;
`;
const Country = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  color: ${({selected}) => (selected ? 'red' : '#6a706e')};
`;
const BottomCard = styled.View`
  background-color: #1c2732;
  height: 220px;
  margin-top: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
const BottomCol = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: 20px;
`;
const TextSymptoms = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;
const InfoContainer = styled.Text`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: red;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
const Button = styled.View`
  border-radius: 15px;
  border-color: red;
  border-width: 1px;
  margin: 0 30px;
  padding: 15px 20px;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 5px;
`;
const BtnText = styled.Text`
  color: red;
  font-size: 16px;
  font-weight: bold;
`;
const styles = StyleSheet.create({
  refreshIcon: {
    backgroundColor: '#FFF',
    elevation: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'white',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 2,
      },
    }),
    borderRadius: 20,
  },
});
