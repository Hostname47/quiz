import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../../app/hooks';

const avatars = [
  require('../../../assets/avatars/0.png'),
  require('../../../assets/avatars/1.png'),
  require('../../../assets/avatars/2.png'),
  require('../../../assets/avatars/3.png'),
  require('../../../assets/avatars/4.png'),
  require('../../../assets/avatars/5.png'),
  require('../../../assets/avatars/6.png'),
];

const UserSection = () => {
  const user = useAppSelector(state => state.user);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.4}>
      <Image
        source={user.initialized ? avatars[user.avatar] : avatars[6]} // When the user is not initialized yet, the image bacjkground will shown as a glimmer
        style={styles.avatar}
      />
      <Text numberOfLines={1} style={styles.pseudo}>
        {user.initialized ? '#' + user.pseudo : '- - -'}
      </Text>
    </TouchableOpacity>
  );
};

export default UserSection;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40444f',
    paddingVertical: 4,
    paddingHorizontal: 12,
    width: 80,
  },
  avatar: {
    height: 40,
    width: 40,
    marginBottom: 4,
    backgroundColor: '#a0b2bc',
    borderRadius: 30,
  },
  pseudo: {
    fontSize: 11,
  },
});
