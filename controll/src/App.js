import logo from './logo.svg';
import './App.css';
import UserForm from './useform';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import Header from './Header';

function App() {
  return (
    <div className="App">
          <ThemeProvider>
      <div>
        <ThemeSwitcher />
        <Header />
        <UserForm />
      </div>
    </ThemeProvider>
    </div>
  );
}

export default App;
