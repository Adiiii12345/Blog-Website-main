import React from 'react'
import UserList from "./components/userList";


const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Felhasználók listája</h1>
      <UserList />
    </div>
  )
}

export default App
