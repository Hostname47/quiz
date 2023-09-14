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

    1. Reward amount = 10
  
    2. reward item = $

- 5 - After creating all the 3 ad units, go to :
  
      Admobe -> Select the app -> Ad Units

    Copy the Ad Unit for each ad (banner, interstitial and rewarded), and past them in .env file properties ADMOB_BANNER_UNIT_ID, ADMOB_INTERSTITIAL_UNIT_ID, ADMOB_REWARDED_UNIT_ID    respectively.

- 6 - Then, install all required libraries and dependencies by running:

      yarn install
  
- 7 - Finally run your app on you device or emulator :
  
      npx react-native run-android

## Usage Guide

Usage guide

### Note

The default package name is by default : **com.quiz**. If you decide to change the package name, you have to change it also in .env file (PACKAGE_NAME).
This is important because the package name value inside .env file is used in many places within the app, like sharing the app, testing, and rating the app..etc.
