import React from 'react';
import './App.css';
import DataFetching from './components/DataFetching';
import Login from './components/Login.js';
import './App.css'
import ComponentC from './components/ComponentC.js'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <ComponentC/>



      {/* <Login></Login> */}
      {/* <DataFetching></DataFetching> */}
    </div>
  );
}
export default App;