# Getting Started with the Formplus Assessment App

This is a simple SPA with React - a simple form template search interface.

The deployed application can be viewed [here](https://frosty-lewin-71959b.netlify.app/).

## First Step

Clone the repo:

### `git clone https://github.com/Dampolo03/formplus-assessment.git`

## Second Step

In the project directory, run the following commands:

### 2.1

To install all dependencies:

### `npm i`

### 2.2

To run the app in the development mode:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser after compilation.

### 2.3

To launch the test runner in the interactive watch mode:

### `npm test`

### 2.4

To build the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance:

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run build`

# Functional Requirements

- There are 3 template categories; Only one category can be active at any time.
- The active category is displayed as the Header of the Template Cards. E.g If the active category is Agriculture, the header should be “Agriculture Templates”
- “All templates” is active by default. Changing the category section resets all other filters and the Search bar value.
- Template category can either be "All", "Education", "E-commerce" or "Health".
- Users should also be able to search through each template category individually using only their template names.
- There are two additional filters for the templates - Alphabetical order (based on template names) and Date Created. Users should be able to filter each template category based on either not both (reset the other filter when one is active).
- The Alphabetical Order filter can either be "Default", "Ascending" or "Descending" order
- The Date created filter can either be "Default", "Ascending" or "Descending" order
