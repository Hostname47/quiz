# quiz app - proof of concept to apply : Typescript + Jest (+RNTL) + Redux Toolkit

I'm building this application to strict myself to write tests using jest along with react native testing library to avoid regression later, and try to write clean code using Typescript to reduce the amount of bugs during development phase, as well as best practices and conventions to make my app easy to read, debug and maintain.

I'm not restricted to only technologies mentioned at the title, I may use RTK Query to handle async actions instead of redux-thunk, as well as using Redux Saga and too many techniques and libraries that I want to use in that app. Of course, the app can be built using simple state (using context API along with reducer API), but I deliberatly decided to use Redux to practice and know how to use it.

The app is really simple, It is a quizzes game that allows users to play quiz by showing questions in form of text or images and other quiz forms and let user pick one or more answers. The app track the user levels, lives, helps and many data that will be stored in either a local database or async storage, and of course some of the data will be shared across all the app like user's lives (the user should have at least 1 in order to play a quiz), and redux will make it possible to share these kind of data as well as actions that should be dispatched from different places and screens.

I'll modify this read-me file to make the steps simple to read and follow
