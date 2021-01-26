import React from 'react'
import RouterConfig from './components/RouterConfig'
import './App.css';
import firebase from './firebase'

function App() {
    React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data: any)=>{
      console.warn("token",data)
    })
  })
  return (
    <div className="App">
      console.warn("token",data)
      <RouterConfig />
    </div>
  );
}

export default App;