import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../Theme/UseTheme';
import './ThemeToggle.css'
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className='toggle-button'  onClick={toggleTheme}>
      {theme === 'light' ? <Moon size={18} color='grey' /> : <Sun size={18} color='white' />}
    </button>
  );
};

export default ThemeToggle