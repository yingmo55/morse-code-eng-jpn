# Morse Code Translator

This is a Morse code translator web app that supports English and Japanese input.
<hr />

**Main Site:** [🔗live](https://morse-code-deencoder.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/55c9d4a7-7b27-4a8e-a678-2677fef1f7b1/deploy-status)](https://app.netlify.com/sites/morse-code-deencoder/deploys)

**Develop Branch:** [🔗live](https://morse-code-deencoder-dev.netlify.app//)
[![Netlify Status](https://api.netlify.com/api/v1/badges/db150383-6995-4308-85f9-c3b1511d059d/deploy-status)](https://app.netlify.com/sites/morse-code-deencoder-dev/deploys)

## About
This web app accepts input in both English and Japanese and converts inputs into Morse code. User can also input Morse code (with period `.` as dot or dit, and dash `-` as dash or dah) and it will be convert to the corresponding language.

For Japanese input, it currently accepts both Hiragana and Katakana input. User can also uses [sutegana](https://en.wiktionary.org/wiki/sutegana) /hatsuon /yo-on (such as "っ", "ゃ". Sutegana in following text) in the input. They will be convert to their corresponding full-size kana for converting to Morse code.

(Official Japanese Morse code does not support sutegana by default. One would need to interpret the translated text by context. [Google's Morse Code version of Japanese input method](https://www.google.co.jp/ime/-.-.html) solves this problem by attaching the handakuon symbol after a kana to indicate it is a sutegana, but to my knowledge, this is not standard practice.)


## Languages, Frameworks, and Libraries Used
- Language: TypeScript, CSS 
- [React](https://reactjs.org/) 
- [Material UI](https://mui.com/) for styling
- [wanakana](https://github.com/WaniKani/WanaKana) by WaniKani for parsing Japanese inputs
- Deployed with Netlify

## Installing
To run this project locally:

Prerequisite:
- node
- yarn (package manager)
- git (version control)

1. `git clone git@github.com:yingmo55/morse-code-eng-jpn.git` in the terminal
2. `cd (folder-name)` and enter the directory
3. `yarn install` to install the dependencies needed
4. `yarn start` to start this project at your local server (default port: 3000), 

## Road Map
While the core features are implemented, there are still improvements to make for this project.

- [x] Update metadata such as Website title and ~~Logos~~ (!important)
- [ ] Change parseJpnInput.js and parseJpnOutput.js to TypeScript functions
    - [ ] add TypeScript config file for the wanakana library
- [x] Add button to copy output to user's clipboard
- [ ] Add support for more dots and dashes inputs for Morse code  (such as `•` and `－` )
- [ ] Add testing by using Cypress to ensure all functions work fine

## Contribution, Feedback, & Bug Report
If you have any feedback for the code base or you would like to add to this project, feel free to do so by submitting a ticket at issues.