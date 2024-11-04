import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store';
import Addtodo from './Components/Addtodo';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Addtodo/>
        <Todos/>
      </Provider>
      </div>
  )
}

export default App
