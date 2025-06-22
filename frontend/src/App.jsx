import {Routes,Route,Navigate} from 'react-router-dom'
import Ai from './components/Ai'
import { Toaster } from "react-hot-toast";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Initial from './pages/Initial';
import { useAuthStore } from "./Store/AuthStore";
import { useEffect } from 'react';
import { Loader } from "lucide-react";
import { TextParallaxContentExample } from './components/Parallax';
import Contact from './pages/Contact';

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
    useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  return (
    <>
    
    <Routes>
      <Route path='/' element={authUser ? <Initial /> : <Navigate to="/login" replace />}/>
      <Route path='/ai' element={authUser ? <Ai /> : <Navigate to="/" replace />}/>
      <Route path='/login' element={!authUser ? <Login /> : <Navigate to="/" replace />}/>
      <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to="/" replace />}/>
      <Route path='/features' element={authUser ? <TextParallaxContentExample /> : <Navigate to="/login" replace />}/>
      <Route path='/about' element={authUser ? <TextParallaxContentExample /> : <Navigate to="/login" replace />}/>
      <Route path='/contact' element={authUser ? <Contact /> : <Navigate to="/login" replace />}/>
    </Routes>
    <Toaster />
    </>
    
  )
}

export default App
