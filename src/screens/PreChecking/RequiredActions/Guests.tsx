import {Box, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import TextSection from '../../../components/NativeBase/TextSection';
import TitleCentered from '../../../components/NativeBase/TitleCentered';
import {useNavigation} from '@react-navigation/native';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import {IGuest} from '../../../interfaces/IReservations';
import GuestCard from './components/GuestCard';
import AddGuestButton from './components/AddGuestButton';
import {palette} from '../../../theme/palette';

interface Props {
  guests?: IGuest[];
}
const data: IGuest[] = [
  {
    name: 'Juan',
    lastname: 'Perez',
    id: 1,
    status: 'Pending',
    img: require('../../../assets/images/guests/1.png'),
  },
  {
    name: 'Juan',
    lastname: 'Perez',
    id: 2,
    status: 'Pending',
    img: require('../../../assets/images/guests/2.png'),
  },
  {
    name: 'Sebastian',
    lastname: 'Tarango',
    id: 3,
    status: 'Pending',
    img: require('../../../assets/images/guests/3.png'),
  },
  {
    name: 'Juan',
    lastname: 'Perez',
    id: 4,
    status: 'Pending',
    img: require('../../../assets/images/guests/4.png'),
  },
  {
    name: 'Sebastian',
    lastname: 'Tarango',
    id: 5,
    status: 'Pending',
    img: require('../../../assets/images/guests/5.png'),
  },
];

const Guests = () => {
  const navigation = useNavigation();
  return (
    <BackgroundwithGradient>
      <TitleCentered
        title="GUEST DETAILS"
        onPress={() => navigation.goBack()}
      />
      <TextSection>
        We are oblished to provide the authoristies the information about all
        our guests. So in order to speed up the process we need you to enter the
        information of all the guests.
      </TextSection>
      <SectionTitle title="Guests" />
      <ScrollView>
        {/* render guest card with data  */}
        <VStack mx={30}>
          {data &&
            data.map(guest => {
              return (
                <GuestCard
                  key={guest.id}
                  name={guest.name}
                  lastname={guest.lastname}
                  id={guest.id}
                  img={guest.img}
                  status={guest.status}
                />
              );
            })}
          <AddGuestButton />
        </VStack>
        <Text
          mt={2}
          color={palette.secondary}
          fontFamily="Analogue"
          fontStyle="italic"
          fontWeight={400}
          fontSize={16}
          lineHeight={24}
          textAlign="center"
          textTransform="uppercase">
          DO YOU HAVE ANY QUESTION?
        </Text>
        <TextSection>
          Write us on the chat support, we will be pleased to help you.
        </TextSection>

        <Box mx={30} mt={10}>
          <ButtonBig name="OPEN CHAT" />
        </Box>
      </ScrollView>
    </BackgroundwithGradient>
  );
};

export default Guests;