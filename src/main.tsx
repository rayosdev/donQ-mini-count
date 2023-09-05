import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// import MyContext, { MyContextType } from './utils/MyContext.tsx'

// const [contextValue, setContextValue] = useState<MyContextType>({
//   score: 29,
//   updateContextValue: (newValue: number) => {
//     setContextValue(prevContext => ({
//       ...prevContext,
//       score: newValue,
//     }));
//   },
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <MyContext.Provider value={contextValue}> */}
      <App />
    {/* </MyContext.Provider> */}
    
  </React.StrictMode>,
)
