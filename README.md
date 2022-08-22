# leaf-lore

Leaf lore is a educational website built to showcase various plant behaviours and properties in an organised and informative web application.

## Contents

- [Leaf Lore](#leaf-lore)
  - [Contents](#contents)
  - [Main Features](#main-features)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [User Guide](#user-guide)
  - [Commit Message Key](#commit-message-key)


## Main Features

The main target features are: 
- Database search functionality.
- Unique statistics for each item.
- Stats formatted using image, sliders and sample text

## Installation

### Prerequisites

- Node Package Manager [Nodejs](https://nodejs.org/en/download/)
- File manager (File explorer recommended for windows users.)
- Web browser (Google Chrome is recommended.)
- Integrated Development Environment (IDE) (Visual Studio Code is recommended (https://code.visualstudio.com/download))
- Command Line Interface (CLI) (Git Bash is recommended (https://git-scm.com/downloads))

** Optional **

- Repository Browser (Recommended GitHub desktop (https://desktop.github.com/))

### User Guide

1. Firstly download the correct build if you haven’t already from [GitHub](https://github.com/JoshHaywood/portfolio-website)
Builds are found on the 'main' branch under the 'builds' folder with the highest number collectively in the format '0.0.0' being the latest build.

2. If you have downloaded the optional repository browser clone the repository and pull.
If you haven’t downloaded the repository browser download a zip folder from the repository under 'code' tab then the 'code' dropdown button then click download zip.
Then extract the folder somewhere in your files.

3. If you are using an IDE open the entire project folder in the IDE. If you aren’t skip to the next step.

4. Within the project folder open your CLI by navigating to where you have stored the project folder.

5. Enter the following into your CLI. (This was done using GitBash and therefore commands might differ.)

`$ npm install`

`$ npm run dev`

or

`$ react-scripts build`
`$ serve -s build` for Reacts's production mode.

6. Finally enter the local URL (http:localhost:3000) into your web browser.

## Commit Message Key

** If any words used in the commit log used before the content of the message are unfamilar refer to this key **

- feat: A feature that has been added.
- fix: Bug fix.
- docs: Changes relating to documentation.
- style: Formatting, missing code, white space (This doesnt apply to CSS.)
- refactor: Maintainabilty or a functions method has been altered.
- dep: Dependancies added to the project.
- chore: Miscellaneous such as altering assets.
- del: Deleted or removed unused code, files or other assets.
