import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ScreenTitle from '../../../components/ScreenTitle';
import AboutIcon from '../../../components/icons/AboutIcon';
import Space from '../../../components/common/Space';
import {globalStyles} from '../../../styles/globals';

const About = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <ScreenTitle
        Icon={AboutIcon}
        title="About the app"
        handleBack={navigation.goBack}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          Welcome to our [---] quiz app! It's packed with diverse quizzes and
          levels, where each correct answer takes you to the next challenge.
          We've got text, image, and suggestion-based questions to keep you on
          your toes. Watch your lives, and if you need a hand, use assists to
          cut down answer options. Ready to test your [---] smarts? Let's kick
          it off!.
        </Text>
        <Space vertical distance={10} />
        <Text style={[globalStyles.title, globalStyles.blue]}>
          How it works !?
        </Text>
        <Space vertical distance={6} />
        <Text style={styles.text}>
          The app has a very simple and straightforward UI and logic. You have
          many quizzes in form of levels, you start by pressing start button and
          pick a level.
        </Text>
        <Space vertical distance={8} />
        <Text style={styles.text}>
          The quiz question can be any of the following type:
        </Text>
        <Space vertical distance={6} />
        <Text style={styles.text}>- Text question</Text>
        <Text style={styles.text}>- Image question</Text>
        <Text style={styles.text}>- Image with hints (segments)</Text>
        <Space vertical distance={8} />
        <Text style={styles.text}>
          With every quiz, you have 4 answers you can pick one to answer the
          question, and whenever you get a correct answer, you get +5$, and
          whever you get a wrong answer, you lose one live.
        </Text>
        <Space vertical distance={8} />
        <Text style={styles.text}>
          Please, notice that you cannot play if you don't have any lives left,
          but you can buy lives with coins you have, or you can watch a video
          ads to get +3 lives very quickly.
        </Text>
        <Space vertical distance={8} />
        <Text style={styles.text}>
          Also, you can use 'helps' to help you reduce the number of answers to
          choose from, and to make it easier for you to pick up the right
          answer.
        </Text>
        <Space vertical distance={10} />
        <Text style={[globalStyles.title, globalStyles.blue]}>
          Want to collaborate !?
        </Text>
        <Space vertical distance={6} />
        <Text style={styles.text}>
          In case you have any idea that can improve this application, or
          questions you want to add to the app, feel free to send it to us in
          contact page by including all the details.
        </Text>
        <Space vertical distance={10} />
        <Text style={[globalStyles.title, globalStyles.blue]}>Support us</Text>
        <Space vertical distance={6} />
        <Text style={styles.text}>
          You can support us by sharing this app with your friends, and giving
          us your feedback about the app and rate in the app store. This way,
          you can show us your support to dedicate more time maintaining this
          app and make it better.
        </Text>

        <Space vertical distance={20} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  text: {
    letterSpacing: 0.6,
    lineHeight: 19,
  },
});

export default About;
