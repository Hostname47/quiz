import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import React, {useState, useRef} from 'react';
import {useAppSelector} from '../../app/hooks';
import Modal from '../../components/Modal';
import PenIcon from '../../components/icons/PenIcon';
import Animated, {FadeInDown, FadeOutUp} from 'react-native-reanimated';
import TickIcon from '../../components/icons/TickIcon';
import {globalStyles} from '../../styles/globals';
import XIcon from '../../components/icons/XIcon';
import TextButton from '../../components/buttons/TextButton';
import Space from '../../components/common/Space';
import TextualInput from '../../components/controls/TextualInput';
import ErrorMessage from '../../components/message/ErrorMessage';

const avatars = [
  require('../../assets/avatars/0.png'),
  require('../../assets/avatars/1.png'),
  require('../../assets/avatars/2.png'),
  require('../../assets/avatars/3.png'),
  require('../../assets/avatars/4.png'),
  require('../../assets/avatars/5.png'),
];
const loadingAvatar = require('../../assets/avatars/6.png');

const UserSection = () => {
  const pseudoRef = useRef(null);
  const user = useAppSelector(state => state.user);
  const [avatarPickerState, setAvatarPickerState] = useState(false);
  const [pseudoError, setPseudoError] = useState('');
  const [pseudoEdit, setPseudoEdit] = useState(false);
  const [modalState, setModalState] = useState(true);
  const [pseudoValue, setPseudoValue] = useState(user.pseudo);

  const closeModal = () => {
    setModalState(false);
  };

  const closePseudoError = () => {
    setPseudoError('');
  };

  const cancelPseudoUpdate = () => {
    setPseudoValue(user.pseudo);
    setPseudoEdit(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.4}
        disabled={!user.initialized}
        onPress={() => setModalState(true)}>
        <Image
          testID="user-avatar"
          source={user.initialized ? avatars[user.avatar] : loadingAvatar} // When the user is not initialized yet, the image bacjkground will shown as a glimmer
          style={styles.avatar}
        />
        <Text numberOfLines={1} style={styles.pseudo}>
          {user.initialized ? '#' + user.pseudo : '- - -'}
        </Text>
      </TouchableOpacity>

      <Modal
        isVisible={modalState}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}>
        <View style={styles.settingsContainer}>
          {/* Avatar section */}
          <View style={styles.settingsSection}>
            <View>
              <Image source={avatars[user.avatar]} style={styles.sAvatar} />
              <TouchableOpacity
                onPress={() => setAvatarPickerState(true)}
                style={[styles.settingsButton, styles.avatarEditButton]}
                activeOpacity={0.5}>
                <PenIcon style={styles.settingsButtonIcon} />
              </TouchableOpacity>
            </View>
            {avatarPickerState && (
              <Animated.View
                style={styles.sAvatarsContainer}
                entering={FadeInDown}
                exiting={FadeOutUp}>
                <View
                  style={[globalStyles.rowCenter, globalStyles.spaceBetween]}>
                  <Text style={styles.sAvatarsLabel}>Change your avatar :</Text>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setAvatarPickerState(false)}>
                    <XIcon style={styles.closeIcon} />
                  </TouchableOpacity>
                </View>
                <View style={styles.sAvatars}>
                  {avatars.map((avatar, index) => (
                    <TouchableOpacity
                      key={index}
                      disabled={index === user.avatar}
                      activeOpacity={0.5}>
                      <Image source={avatar} style={styles.sAvatarChoice} />
                      {index === user.avatar && (
                        <View style={styles.userAvatar}>
                          <TickIcon style={styles.userAvatarTick} />
                        </View>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              </Animated.View>
            )}
          </View>
          <Space vertical distance={12} />

          {pseudoEdit ? (
            <Animated.View
              style={globalStyles.center}
              entering={FadeInDown}
              exiting={FadeOutUp}>
              {pseudoError && (
                <ErrorMessage
                  error={pseudoError}
                  handleClose={closePseudoError}
                />
              )}
              <View style={globalStyles.rowCenter}>
                <TextualInput
                  placeholder="Your pseudo here.."
                  value={pseudoValue}
                  onChangeText={() => {}}
                  styles={styles.pseudoInput}
                  ref={pseudoRef}
                />
                <TextButton title="X" onPress={cancelPseudoUpdate} />
              </View>
            </Animated.View>
          ) : (
            <Text style={styles.sPseudo}>
              # <Text style={globalStyles.blue}>{user.pseudo}</Text>
            </Text>
          )}
          <Space vertical distance={16} />
          {pseudoEdit ? (
            <TextButton title="Update Pseudo" onPress={() => {}} />
          ) : (
            <TextButton
              title="Edit Pseudo"
              onPress={() => setPseudoEdit(true)}
            />
          )}
        </View>
      </Modal>
    </>
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
  settingsContainer: {
    marginTop: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  sAvatar: {
    width: 86,
    height: 86,
    marginBottom: 16,
  },
  settingsButton: {
    padding: 10,
    borderRadius: 60,
  },
  avatarEditButton: {
    position: 'absolute',
    right: -16,
    top: -16,
    backgroundColor: '#222528',
  },
  settingsButtonIcon: {
    width: 20,
    height: 20,
    fill: 'white',
  },
  sAvatarsContainer: {
    paddingHorizontal: 12,
    paddingTop: 0,
    paddingBottom: 16,
    borderRadius: 6,
    backgroundColor: '#222528',
  },
  sAvatars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  sAvatarChoice: {
    width: 60,
    height: 60,
    margin: 10,
  },
  userAvatar: {
    position: 'absolute',
    right: -4,
    top: -4,
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: '#2d3035',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userAvatarTick: {
    width: 14,
    height: 14,
    fill: '#6cdd6e',
  },
  closeButton: {
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  closeIcon: {
    width: 16,
    height: 16,
    fill: 'white',
  },
  settingsSection: {
    width: '100%',
    alignItems: 'center',
  },
  sAvatarsLabel: {
    letterSpacing: 1,
    color: '#d5dae2',
  },
  sPseudo: {
    fontWeight: '600',
    letterSpacing: 1,
    fontSize: 16,
  },
  pseudoInput: {
    height: 50,
    backgroundColor: '#1a1b1e',
    width: 170,
    marginRight: 8,
  },
});
