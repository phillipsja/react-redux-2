"# react-redux-2" 

This project is based upon tutorial here: 
https://www.valentinog.com/blog/react-redux-tutorial-beginners/

I also appreciate that it contains a sub-tutorial about setting up a react project NOT using create-react-app. 
https://www.valentinog.com/blog/react-webpack-babel/

This leads to a bare bones project setup using react and redux. 

I like this project because it gives simple definitions about the components of redux and what they do, i.e.
what are the following: 

Reducer
Store
Action
Dispatch

Reducer - A reducer is just a Javascript function. A reducer takes two parameters: the current state and an action (more about actions soon)

Store - The source of truth where the state of the application is kept. It's just an object (with a few methods?)

Action - An object that contains a type property (which is a string) signifying something you want to do the store (e.g. add something to the store.) type is the only required property. You can send something to be added via the "payload" property. 

Dispatch - Send signal to store to change state. Dispatch is used to send an Action. 

