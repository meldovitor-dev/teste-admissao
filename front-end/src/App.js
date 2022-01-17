import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material'
import Login from './pages/Login';
import ListOperation from './pages/Home'
import Register from './pages/Register';
import theme from './components/Theme';
import './styles.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Register/>}/>
            <Route path="/principal" element={<ListOperation/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
