1. What problem does the context API help solve?
- Context API avoids the problems associated with props drilling, passing props through intermediate elements.
- Context API allows the passing of props to values deep in the component tree without threading through every component.
- Context API may not always be the solution, there is also component composition.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions are Javascript objects that send data from the application to the Redux store. They describe the 'what happened'.
- reducers respond to actions, by specifying 'how' the application state should change.
- the store holds the entire state of the application. It is only changed/updated via a dispatched action passed to a reducer.
- actions describe the 'what' happened in the application.
- reducers respond to actions and describe 'how' the application state changed
- the store holds the entire application's state. It is essentially the 'where'
- - A store holds the entire state of an application. It is the single source of truth because, everything that may change in an application
is presented by the store object.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is global context. While Component state is local context.
- If more than one component cares about the application's data, it should be in Application state
- If state isn't being shared between components, then it should be Component state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- redux-thunk is a middleware library specifically for writing sync and async operations. It returns another function.
- redux-thunk allows us to go from synchronous only updates to asynchronous updates that interact with the application's store.

- redux-thunk allows us to write asynchronous action-creators vs default of Redux synchronous action-creators.
- redux-thunk allows us to return functions out of action-creators vs returning actions.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

- My favorite state management system this sprint is Redux for its
  ability to create reusable components. Although the syntax of Context
  makes passing props easier, the concepts of Redux are well documented
  and are easier for me to follow than using Context API.
