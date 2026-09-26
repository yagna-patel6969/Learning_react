import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  const [ThemeMode,setThemeMode]=useState("light");

  const LightMode=()=>{
    setThemeMode("light");
  }
  const DarkMode=()=>{
    setThemeMode("dark");
  }

  //actule change in theme with the use of this....

  useEffect(()=>{
    const html = document.querySelector('html');

    html.classList.remove("light","dark");
    html.classList.add(ThemeMode);

  },[ThemeMode])

  return (
    <>
      <ThemeProvider value={{ThemeMode, LightMode, DarkMode}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                  <Card/>
                </div>
            </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
