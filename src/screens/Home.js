import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StatusBar,
  Platform,
  StyleSheet,
  View,
  Button,
  ScrollView,
  Text,
} from 'react-native';
import Buttons from '../components/Buttons';
import Cards from '../components/Cards';
import Deck from '../components/Deck';

const DATA = [
  {
    id: 1,
    title: 'CORONAVIRUS CASES',
    number: '1 838 456',
  },
  {
    id: 2,
    title: 'TOTAL DEATHS',
    number: '1 29 863',
  },
  {
    id: 3,
    title: 'RECOVERED',
    number: '838 456',
  },
];

export default function Home({navigation}) {
  const renderNoMoreCards = (callback) => (
    <NoCards>
      <NoCardsTitle>NO MORE CARDS HERE</NoCardsTitle>
      <Button backgroundColor="#03A9F4" title="Get more!" onPress={callback} />
    </NoCards>
  );
  const renderCard = (item) => (
    <CardContainer>
      <Card>
        <View>
          <CardTitle style={styles.title}>{item.title}</CardTitle>
          <Icon
            name="ios-remove"
            size={40}
            color="red"
            style={{marginTop: 25}}
          />
          <CardNumber style={styles.number}>{item.number}</CardNumber>
        </View>
      </Card>
      <CardContent>
        <Icon name="md-options" size={24} color="#FFF" />
        <TextCovid>COVID-19</TextCovid>
      </CardContent>
    </CardContainer>
  );
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={require('../images/unnamed.jpg')}>
        <Header>
          <Menu>
            <Icon name="md-remove" color="#FFF" size={26} />
            <RemoveIcon name="md-remove" color="#FFF" size={26} />
          </Menu>
          <Avatar source={require('../images/1.jpeg')} />
        </Header>
        <Title>CORONA DASH</Title>
        <Countries>
          <Country selected>GLOBAL</Country>
          <Country>RUSSIA</Country>
          <View style={styles.refreshIcon}>
            <Icon name="md-refresh" size={24} color="red" />
          </View>
        </Countries>
      </ImageBackground>
      <Deck
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
      <ScrollContent>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Cards
            onPress={() => navigation.navigate('Details')}
            icon="md-pulse"
            title="TOTAL CASES"
            bg="red"
            number="113 329"
          />
          <Cards
            icon="ios-git-network"
            title="RECOVERED"
            bg="#FFF"
            number="442 329"
          />
          <Cards
            icon="ios-heart-dislike"
            title="DEATH CASES"
            bg="#FFF"
            number="113 329"
          />
          <Text>hi</Text>
        </ScrollView>
      </ScrollContent>
      <ButtonsContainer>
        <Buttons name="ASYMPTOMATIC" number="1 778" />
        <Buttons name="SYMPTOMATIC" number="1 578" />
      </ButtonsContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #1c2732;
  padding: 16px;
  padding-top: ${Platform.OS === 'ios' ? 56 : `StatusBarManager.HEIGHT`}px;
`;
const ImageBackground = styled.ImageBackground`
  height: 200px;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.View``;
const RemoveIcon = styled(Icon)`
  margin-top: -20px;
  margin-left: 5px;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
const Title = styled.Text`
  color: white;
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
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
const NoCardsTitle = styled.Text`
  color: white;
  margin-bottom: 10px;
  align-self: center;
`;
const CardContainer = styled.View`
  height: 150px;
  width: 320px;
  background-color: #6a706e;
  align-self: center;
  border-radius: 30px;
  flex-direction: row;
`;
const Card = styled.View`
  height: 150px;
  width: 260px;
  padding: 20px 30px 0 30px;
  background-color: #2b3240;
  border-radius: 30px;
  flex-direction: row;
  justify-content: space-between;
`;
const CardTitle = styled.Text`
  color: #6a706e;
  width: 100px;
  font-size: 12px;
  font-weight: bold;
`;
const CardNumber = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-top: -10px;
`;
const CardContent = styled.View`
  margin-top: 20px;
  margin-left: -20px;
  align-items: center;
  align-self: flex-start;
`;
const TextCovid = styled.Text`
  transform: rotate(90deg);
  font-size: 14px;
  color: #3a4b4f;
  width: 90px;
  margin-left: 0px;
  margin-top: 44px;
  font-weight: bold;
`;
const NoCards = styled.View`
  margin-bottom: 30px;
`;
const ScrollContent = styled.View`
  height: 180px;
`;
const ButtonsContainer = styled.View`
  margin-top: 16px;
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
