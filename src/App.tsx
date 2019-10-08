import React from 'react';
import { HomePage } from './pages/HomePage'
import './styles/css/App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const App: React.FC = () => {
  library.add( faEdit )
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
