
# PROJECT ARCHITECTURE:
- We have used Ignite, (Ignite is a generator for React Native with boilerplates, plugins, and more.) Link: https://github.com/infinitered/ignite
- It create the well project structure with default screen.
- Ignite provides the packages of Redux, but we have not used Redux in this task due to time constraints.
- Source code is well commented.

# WHAT WE DID:
- We have created app as per given designs.
- Launch Screen (Home Screen) -> In this screen, we have removed button from Image, and displayed react-native element button with redirect to next screen.
- Sidebar(Drawer) Screen -> In this screen, We have displayed all navigation buttons with navigation.
- Post Screen -> In this screen, We have displayed all posts from given API with infinite scrolls as per design.
- Post Detail Screen -> In this screen, We have displayed details of selected post with Back button navigation
- Profile Screen -> In this screen, We have designed static screen. We have used own images because we have not PSD.
- Message/Notification/Setting Screens -> This screens are just black created to navigate on click from sidebar.

- Used 'react-native-vector-icons' package to display icons in app.
- Used 'native-base' package to use some elements of this package ex: Container, Content, Header etc.
- Used 'moment' package to display converted date from timestamp.

# TO RUN APP, FOLLOW THE BELOW INSTRUCTION:
- Download "Android Studio" from "https://developer.android.com/studio/"
- Follow the installation steps for Android Studio
- Open Simulator from Android Studio to run app in simulator (keep it open)
- Get clone of the project from github (Follow steps defined in "https://github.com/nileshprajapati007444/reactnative_test_blossom/blob/master/README.md"
- Open Command Prompt and go to Project Directory (reactnative_test_blossom). Hit below commands:
- npm install
- React native run-android (it will run app in Simulator or Device - that was opend in bullet 3)

