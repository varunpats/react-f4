import { useState } from 'react';
import Login from './login';
import Profile from './profile';

function App() {
  let [flag, setFlag] = useState(true)

  return (
    <div>
      {flag && <Login setFlag={setFlag} />}
      {!flag && <Profile />}
    </div>
  );
}

export default App;
