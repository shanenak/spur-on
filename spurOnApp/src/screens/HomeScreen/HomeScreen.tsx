import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {useCurrentUser} from '../../context/UserContext';

const HomeScreen: FC = () => {
  const {username, setUsername} = useCurrentUser();

  return (
    <View>
      <Text>Home! User: {username}</Text>
    </View>
  );
};

export default HomeScreen;
