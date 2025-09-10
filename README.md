# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Note:
Always use a valid, real version for dependencies.
Recommendation :use modern tools like Vite or Next.js instead of Create React App. here i created CRA for Self  POC purpose .
$ npx create-react-app <?credflow-apps>


# credflow-apps clone of cred apps 

README.txt

credflow-apps - POC React App

This project demonstrates a simple multi-step consent flow using React functional components and props for parent-child communication.

Implemented Files:
------------------
1. src/App.js
   - Main parent component.
   - Manages step state to control which screen is displayed.
   - Passes data and callback props to child components.  data as props and callback as props .

2. src/components/Yourmobile.js
   - First step: displays mobile number.
   - Accepts mobile number as prop.
   - Calls parent callback on consent.

3. src/components/SmsConsent.js
   - Second step: SMS consent screen.
   - Calls parent callback on consent.

4. src/components/OtpConsent.js
   - Third step: OTP consent screen.
   - Calls parent callback on consent.

5. src/components/Welcome.js
   - Final step: Welcome screen after all consents.

6. src/App.css (or styles/Yourmobile.css, etc.)
   - Basic styling for components.

API Docs (Component Props):
---------------------------
- Yourmobile
  - data: string (mobile number)
  - onConsent: function (callback to parent)

- SmsConsent
  - onConsent: function (callback to parent)

- OtpConsent
  - onConsent: function (callback to parent)

- Welcome
  - No props

How it works:
-------------
- App.js controls the flow using a step state.
- Each child component receives props for data and/or callbacks.
- Child components notify the parent to move to the next step by calling the callback

--->
so Far i have added following component 
yourmobile.js
smsconsent.js
otpconsent.js
welcome.js
profile.js
ad.js
upcomingbills.js  etc .


-have used material UI (Lib)
-use axios lib -TODO-instead i used fetch api 

-In profile.js have used -fetch api to call and get api data .

-in welcome screen -> "Cards" on button clicked i want all cards to be load as per user -that i need to implement-#TODO -dont have api backend -#TODO

-Jest test case added for first screen . in this way we can write more test case per per this pattern .

on [ show cards ] button click card loading all the details .
