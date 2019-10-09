import React from 'react';
import { HomePage } from './pages/HomePage'
import './styles/css/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const App: React.FC = () => {
  library.add( faEdit, faCheck, faTimes )
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
