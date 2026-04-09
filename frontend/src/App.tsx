import { Route , Routes } from 'react-router-dom';
import SignupPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    
      <AuthProvider>
      <Routes>
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      </AuthProvider>
  
  )
}

export default App;