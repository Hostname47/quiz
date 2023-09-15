# Simple Quiz Application

A simple quiz application that offers a simple UI and a straightforward screens and logic.

## Installation Guide

Please **do the following actions before build the app** :

- 1 - run the following command :
  
      cp .env.example .env
  
  _(or manually copy the .env.example file in the root directory and rename it to .env)_

- 2 - Open your **Admob** account (Create one if you don't have already an account), and create two applications: one for Android and one for iOS.

- 3 - After creating the applications on your Admob, copy the **App ID** for your android & ios apps, and past them in **app.json** file in the root directory (within android_app_id & ios_app_id properties). You can find the App ID by going to:

       Admobe Home -> Select the app -> App Settings -> App ID

- 4 - Within your Admobe app, create 3 Ad units: **Banner**, **Interstitial**, and **Rewarded Ads**.
  In rewarded ad, please specify :

    - Reward amount = 10
  
    - reward item = $

- 5 - After creating all the 3 ad units, go to :
  
      Admobe -> Select the app -> Ad Units

    Copy the Ad Unit for each ad (banner, interstitial and rewarded), and past them in .env file properties ADMOB_BANNER_UNIT_ID, ADMOB_INTERSTITIAL_UNIT_ID, ADMOB_REWARDED_UNIT_ID    respectively.

- 6 - Then, install all required libraries and dependencies by running:

      yarn install
  
- 7 - Finally run your app on you device or emulator :
  
      npx react-native run-android

## Usage Guide

The application is very easy to customize and use. All you need to do, is to choose the nich and the subject you want to use this application for.

First, you need to make some changes to make the code match your app requirements :

1. **App name**: change it from .env file
2. **App Logo**: change it in : **src -> assets -> logo.png** (It is used only in Header component within **src -> partials -> Header**)
3. **Bootstrap image**: An image shown in Home screen, and located at : **src -> assets -> bootstrap-image.jpg**
4. **Your name**: specify developer name in Signature component : **src -> components -> dev-signature -> Signature**

   _(This component is used in the 'More' screen to show copyright and developer name in the bottom.)_

5. **More screen**: Screens that display informations about the app. To to: **src -> screens -> More**, and you'll find screens like About, Privacy, and other screens with an example of each screen. All you need to do is to use your app name and twist the text to match your app requirement, like specifying your dev email in contact screen, customize 'share app' message..etc.

### Insert quizzes

Go to quizzes file :

> **src -> data -> quizzes.ts**

This file includes quizzes in form of an array of objects. Each object represent a quiz level, with properties that define quiz informations depends on the type of quiz. The following lines, explain all the properties you can use to add quizzes within your app, and how to use them. If you understand all the properties, you can add quizzes to your app, by going to quizzes file, and simply copy and past the quizzes examples exist as comments at the top of the file.

1. **level**: Every quiz has a level, which MUST be unique, and in ascending order in order to work as expected in quiz- map/player screens.
2. **type**: Specify the type of quiz. The quiz could be of type text, image, or image-with-hints.
   
   2.1. text: A simple text question.
   
   2.2. image: An image along with a text question.
   
   2.3. image-with-hints: An image along with a text question and also an array of hints.
   

   Please take a look at the comments in quizzes file to have an idea about the structure of each quiz type and how to use it.

4. **question**: A text question.
5. **options**: An array of answers. The answer could be a string or a number.
   Please notice that the number of answers should be 4 or more, since the helper functionality that the user can use to reduce the number of answers can make it easier for him to spot the right answer, so the answers must be 4 answers or more. (help feature reduces 2 answers)
6. **image**: The image path using require function, and pass a relative path to the image. The image should exist in src -> data -> quizzes-images as shown in the example quiz within quizzes file. You an use another path, but to make things clean and organized, use this folder (quizzes-images) to store quizzes images.
7. **hints**: an array of objects. Each object represent a hint. The hint could be a text (by specifying type: 'text'), or an image (by specifying type: 'image'). There is an example in quizzes file, that show an example of a quiz with hints.
8. **answer**: The correct answer. This should exists in options property, and should equal the element in options.

It's not neccessary to use all properties in one quiz, every quiz type should have a group of props that match its behavior. To add a quiz, you can simply copy it from the commented quizzes examples, and change the level (remember that this prop should be unique), and put the informations in the props accordingly.

### Notes

  - The default package name is : **com.quiz**. If you decide to change the package name, you have to change it also in .env file (PACKAGE_NAME).
This is important because the package name value inside .env file is used in many places within the app, like sharing the app, testing, rate app..etc.
