import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TUser} from '../../types/types';

type HomeScreenProps = {
  user: TUser;
};

const HomeScreen: FC<HomeScreenProps> = ({user}) => {
  return (
    <View>
      <Text>Home! User: {user.username}</Text>
    </View>
  );
};

export default HomeScreen;
