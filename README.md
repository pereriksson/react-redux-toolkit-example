# React Toolkit Example

This repo provides a quick example on how to use React with Redux Toolkit. It simulates a question on Stack Overflow with an option for the user to up or downvote the question and its answers.

The Stack Overflow post consists of mocked data symbolising fictious response from a REST API. The user's votes are kept in global state to show the updated to the user (while it could be processed by an imaginary cloud queue).

## Usage

```
npm install
npm start
```

## Folder structure

| Folder       | Purpose                                                                                         |
|--------------|-------------------------------------------------------------------------------------------------|
| apis         | These are APIs for the application itself to do things.                                         |
| components   | React components in their respective folders.                                                   |
| redux        | Contains functions to retrieve the store form localStorage.                                     |
| redux/slices | Contains Redux Toolkit slices (actions, action creaters and reducers) for the store.            |
