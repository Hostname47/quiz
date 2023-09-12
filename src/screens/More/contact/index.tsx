import {
  Linking,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useRef, useReducer} from 'react';
import TextualInput from '../../../components/controls/TextualInput';
import TextButton from '../../../components/buttons/TextButton';
import EnvelopeIcon from '../../../components/icons/EnvelopeIcon';
import {globalStyles} from '../../../styles/globals';
import ErrorMessage from '../../../components/message/ErrorMessage';
import SuccessMessage from '../../../components/message/SuccessMessage';
import Space from '../../../components/common/Space';
import DropdownList from '../../../components/controls/DropdownList';
import ScreenTitle from '../../../components/ScreenTitle';
import TextIconButton from '../../../components/buttons/TextIconButton';
import {DropdownOptionType} from '../../../components/controls/types';

const APP_NAME = 'Quiz app';
const CONTACT_EMAIL_ADDRESS = 'your-email@gmail.com';
const CONTACT_SUBJECTS: DropdownOptionType[] = [
  {value: 'Propose an improvement'},
  {value: 'Suggest a feature'},
  {value: 'Error or bug report'},
  {value: 'Other'},
];

type InitialState = {
  message: string;
  subject: string;
  error: string;
  messageSent: boolean;
};

const initialState: InitialState = {
  message: '',
  subject: CONTACT_SUBJECTS[0].value,
  error: '',
  messageSent: false,
};

type ActionWithPayload = {
  type: 'set-subject' | 'set-message' | 'set-error';
  payload: string;
};

type ActionWithoutPayload = {
  type: 'set-message-sent' | 'close-message-sent';
};

type ActionProps = ActionWithPayload | ActionWithoutPayload;

const reducer = (state: InitialState, action: ActionProps) => {
  switch (action.type) {
    case 'set-subject':
      return {
        ...state,
        subject: action.payload,
      };
    case 'set-message':
      return {
        ...state,
        message: action.payload,
      };
    case 'set-error':
      return {
        ...state,
        error: action.payload,
      };
    case 'close-message-sent':
      return {
        ...state,
        messageSent: false,
      };
    case 'set-message-sent':
      return {
        ...state,
        error: '',
        subject: CONTACT_SUBJECTS[0].value,
        message: '',
        messageSent: true,
      };
    default:
      return state;
  }
};

function Contact({navigation}: {navigation: any}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const messageChangeTimout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const setError = (error = '') => {
    dispatch({type: 'set-error', payload: error});
  };

  const handleSubjectChange = (option: string) => {
    dispatch({type: 'set-subject', payload: option});
  };
  const handleMessageChange = (message: string) => {
    if (messageChangeTimout.current) {
      clearTimeout(messageChangeTimout.current);
    }
    messageChangeTimout.current = setTimeout(() => {
      dispatch({type: 'set-message', payload: message.trim()});
    }, 800);
  };

  const handleSend = () => {
    /**
     * Handle message sending
     */
    if (state.message === '') {
      setError('Message field is required');
      return;
    }

    Linking.openURL(
      `mailto:${CONTACT_EMAIL_ADDRESS}?subject=${APP_NAME} : ${state.subject}&body=${state.message}`,
    );

    setTimeout(() => {
      /**
       * Reset all inputs and show a success message by setting messageSent state to true
       */
      dispatch({type: 'set-message-sent'});
    }, 1000);
  };

  return (
    <View style={styles.screen}>
      <ScreenTitle
        title="Contact us"
        Icon={EnvelopeIcon}
        handleBack={navigation.goBack}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>
          Fell free to contact us If you have any idea or feature that can make
          the app better or If you notice some error or bug.
        </Text>
        <Text style={styles.text}>
          If you have an attachment you want to include with your message, make
          sure to include it with your email message as an attachment after
          clicking on 'send' button.
        </Text>

        {/* Error */}
        {state.error && (
          <ErrorMessage error={state.error} handleClose={() => setError('')} />
        )}
        {/* Success message */}
        {state.messageSent && (
          <SuccessMessage
            message="Thank you for contacting us ! We will review your message as soon as possible."
            handleClose={() => dispatch({type: 'close-message-sent'})}
          />
        )}

        <Text style={[styles.label, styles.blue]}>Subject :</Text>

        <Space distance={8} vertical />

        <DropdownList
          options={CONTACT_SUBJECTS}
          dropDownTop={54}
          dropDownBoxStyles={styles.subjectDropdown}
          value={state.subject}
          onChange={handleSubjectChange}
        />

        <Space distance={12} vertical />

        <Text style={[styles.label, styles.blue]}>Message body :</Text>

        <Space distance={8} vertical />

        <TextualInput
          placeholder="Your message here"
          multiline={true}
          value={state.message}
          onChangeText={handleMessageChange}
        />

        <Space distance={12} vertical />

        <TextIconButton
          Icon={EnvelopeIcon}
          title="Send message"
          onPress={handleSend}
          primary
          padding={18}
        />

        <Space distance={12} vertical />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ...globalStyles,
  screen: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 12,
  },
  subjectDropdown: {
    width: Dimensions.get('window').width - 24, // 24 = 12 + 12 margin on container (h and v)
  },
  text: {
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  label: {
    fontWeight: '600',
  },
});

export default Contact;
