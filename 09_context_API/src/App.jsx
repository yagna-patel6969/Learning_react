import './App.css'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { UserContextProvider } from './context/UserContextProvider'

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </div>
  )
}

export default App
