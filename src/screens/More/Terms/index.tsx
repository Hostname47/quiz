import {Text, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenTitle from '../../../components/ScreenTitle';
import TermsIcon from '../../../components/icons/TermsIcon';

const Terms = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScreenTitle
        title="Terms and Conditions"
        Icon={TermsIcon}
        handleBack={navigation.goBack}
      />

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>
            Please read these Terms of Service carefully before accessing or
            using our application. By accessing or using any part of the app,
            you agree to be bound by these Terms of Service. If you do not agree
            to all the terms and conditions of this agreement, then you may not
            access the application.
          </Text>
          <Text style={styles.title}>Responsibility</Text>
          <Text style={styles.text}>
            This app is designed for entertainment and educational purposes
            only. Users are responsible for their actions within the app,
            including the accuracy of their responses to quiz questions. We
            reserve the right to modify or discontinue the app at any time
            without prior notice.
          </Text>
          <Text style={styles.text}>
            Users must respect intellectual property rights when using content
            within the app and refrain from any unauthorized distribution or
            reproduction of app materials. In the event of any disputes or
            concerns, please contact us for assistance.
          </Text>
          <Text style={styles.title}>Purpose</Text>
          <Text style={styles.text}>
            Our [---] quiz app is your go-to destination for testing and
            enhancing your [---] knowledge while having a blast. Dive into a
            world of engaging quizzes, featuring different question types and
            levels, all designed to entertain and educate [---] enthusiasts.
            Whether you're a seasoned fan or a newcomer to the game, our app is
            here to fuel your love for [---] and challenge your expertise.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  title: {
    fontWeight: '600',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 8,
    color: '#36baf7',
  },
});

export default Terms;
