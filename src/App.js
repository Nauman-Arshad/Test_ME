// import React from 'react'
// import firebase from './firebase'
import RouterConfig from './components/RouterConfig';

function App() {
  // React.useEffect(()=>{
  //   const msg=firebase.messaging();
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();
  //   }).then((data)=>{
  //     console.warn("token",data)
  //   })
  // })
  return (
    <div className="App">
      <RouterConfig />
    </div>
  );
}

export default App;


