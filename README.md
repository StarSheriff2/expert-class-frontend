<div align="center">
<h1><a href="http://expert-class-frontend-v2.netlify.app" target="_blank">Expert Class</a></h1>
</div>

<div align="center">
 <img src="https://img.shields.io/badge/Microverse-blueviolet">
 <img src="https://img.shields.io/badge/Academic-blue">
 <img src="https://img.shields.io/badge/HTML-red">
 <img src="https://img.shields.io/badge/JavaScript-yellow">
 <img src="https://img.shields.io/badge/CSS-blue">
 <img src="https://img.shields.io/badge/SASS-pink">
 <img src="https://img.shields.io/badge/React-purple">
 <img src="https://img.shields.io/badge/Redux-violet">
 <img src="https://img.shields.io/badge/Jest-green">
 <img src="https://img.shields.io/badge/MSW-yellow">
</div>

<br>

<p align="center">This web app allows users to sign up to courses in different cities around the world taught by leading experts in every field.</p>

<p align="center"><small><strong>Note: </strong><i>This web app uses <u>cross-site cookies</u>. You need to <u>enable cross-site cookies in Safari and Chrome</u> to be able open the app in your device.</i></small></p>

<br>

<div align="center"><img width="100%" alt="app screenshot mobile" src="./.github/images/Screenshot_main.png">
<img width="45%" alt="app screenshot mobile" src="./.github/images/Screenshot_register.png">
<img width="45%" alt="app screenshot mobile" src="./.github/images/Screenshot_remove.png">
<img width="30%" alt="app screenshot mobile" src="./.github/images/Screenshot_main_mobile.png">
<img width="30%" alt="app screenshot mobile" src="./.github/images/Screenshot_nav_mobile.png">
</div>

## About
Expert Class is a ***fully responsive*** web app that I built with a team of 4 members that uses a Ruby on Rails REST API to make CRUD operations. The repo for the back-end is [here](https://github.com/StarSheriff2/expert-class). We followed [this concept design](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign) by [Murat Korkmaz](https://www.behance.net/muratk).

Some of the technical highlights implemented in this project:
- Private Routes
- Session Cookies for Authentication
- UseEffect hooks
- Swiper
- MSW for API mocking
- React Testing Library
- History for smart redirects
- Redux Toolkit
- Integration tests
- Styled Components
- Efficient global state management

### Features:
- Username sign up and sign in
- Sign up for a class
- Create and delete classes

### Live Demo

Deployed to Netlify: [Live Demo](http://expert-class-frontend-v2.netlify.app)

### Video Presentation

Watch a quick demo and walk-through of this project:
<a href="https://www.loom.com/share/bf3cfe3590a9404da7badb3012248a57" target="_blank" rel="noopener noreferrer">
  <p>Expert Class - 13 January 2022 - Watch Video</p>
  <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/bf3cfe3590a9404da7badb3012248a57-with-play.gif">
</a>

### Built With
- HTML, CSS, JavaScript
- React
- React Router
- Redux Toolkit
- Axios
- Sass
- Jest
- MSW
- React Testing Library
- Swiper

### About the API

- This app consumes a Ruby on Rails API. Here's the [link to the backend API](https://expert-class-backend.herokuapp.com/).
- All [documentation can be accessed here](https://expert-class-backend.herokuapp.com/api-docs).

### Project Management

This project's tasks are described in [this kanban board](https://github.com/StarSheriff2/expert-class/projects/1).

![kanban](https://user-images.githubusercontent.com/61250665/137405588-7fc8d606-5b01-43ca-beae-5c29ae231d2e.png)

## Getting Started

To get a local copy up and running, follow these simple example steps.

### Prerequisites
- A browser to open the main file
- Node.js
- NPM
- Yarn

### Get files
1. Open your terminal or command prompt.
2. If you do not have git installed in your system, skip this step and go to step 3; otherwise, go to the directory where you want to copy the project files and clone it by copying this text into your command prompt/terminal: `git@github.com:StarSheriff2/expert-class-frontend.git`.
<br>Now go to the ***"Install Dependencies"*** section
3. Download the program files by clicking on the green button that says “**Code**” on the upper right side of the project frame.
4. You will see a dropdown menu. Click on “**Download ZIP**.”
5. Go to the directory where you downloaded the **ZIP file** and open it. Extract its contents to any directory you want in your system.

### Install Dependencies
1. Go to the root directory of the project
2. In your command line, while in the root dir, type `npm install`. It will install all necessary dependencies in your project files
3. Now type `yarn start` or `npm run start`. It will load the project in your default browser.<br><br>
**Note:<br>_This command will not stop on its own. If you change something in your project files, it will recompile and reload the page in your browser. To exit, hit "ctrl + c"_**

## Development

### Bundle project

- `yarn build`
### Testing
To test, run

- `yarn test`

### Linters
To run the linters included in this repository, go to the root directory of your repository and copy/paste the following commands into your terminal:
(**Note:** Make sure you run `npm install` before you do this)
- for ESlint, `npx eslint.`
- for Stylelint, `npx stylelint "**/*.{css,scss}"`

### All Available Scripts

<details>
 <summary>In the project directory, you can run:</summary>

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint warnings in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
</details>

## Usage

- Sign in / sign up
- Add, remove, and view a class
- Register for a class
- View all your class reservations

## Authors
👤 **Arturo Alvarez**
- Github: [@StarSheriff2](https://github.com/StarSheriff2)
- Twitter: [@ArturoAlvarezV](https://twitter.com/ArturoAlvarezV)
- Linkedin: [Arturo Alvarez](https://www.linkedin.com/in/arturoalvarezv/)

👤 **Breno Xavier**

- GitHub: [@brenoxav](https://github.com/brenoxav)
- LinkedIn: [Breno Xavier](https://linkedin.com/in/brenoxav)

👤 **Francis Uloko**

- GitHub: [@francisuloko](https://github.com/francisuloko)
- Twitter: [@francisuloko](https://twitter.com/francisuloko)
- LinkedIn: [Francis Uloko](https://linkedin.com/in/francisuloko)

👤 **Mih Julius**

- GitHub: [@Mihndim2020](https://github.com/Mihndim2020)
- Twitter: [@mihndim](https://github.com/mih-julius)
- LinkedIn: [Mih Julius](https://www.linkedin.com/mih-julius)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/brenoxav/expert-class-frontend/issues).

## 🤝 Acknowledgements

Design:
 - Original design idea by [Murat Korkmaz](https://www.behance.net/muratk)
 - Licenced under The [Creative Commons license](https://creativecommons.org/licenses/by-nc/4.0/)

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](https://github.com/brenoxav/expert-class-frontend/blob/master/LICENSE) licensed.
