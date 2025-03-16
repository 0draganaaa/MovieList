import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { MainPage } from './pages/MainPage';
import { Navigation } from './components/Navigation';
import { AuthProvider } from './context/AuthProvider';
import { MovieProvider } from './context/MovieProvider';
import { MyLists } from './pages/MyLists';
import { ListProvider } from './context/ListProvider';
import { AuthCallbackPage } from './pages/AuthCallbackPage';
import { Login } from './pages/Login';
import { List } from './pages/List';

function App() {

  return (
    <BrowserRouter>
      <MovieProvider>
        <AuthProvider>
          <ListProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/lists" element={<MyLists />} />
              <Route path="/login" element={<Login />} />
              <Route path="/lists/:id" element={<List />} />
              <Route path="/auth/callback" element={<AuthCallbackPage />} />
            </Routes>
          </ListProvider>
        </AuthProvider>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
