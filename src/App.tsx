import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Wand2 } from 'lucide-react';
import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-[#740001] text-[#D3A625] p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <Wand2 className="mr-2" />
              Hogwarts Registry
            </Link>
            <nav>
              <Link to="/add" className="bg-[#D3A625] text-[#740001] px-4 py-2 rounded hover:bg-[#EEBA30]">
                Add Character
              </Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto mt-8 px-4 flex-grow">
          <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="/add" element={<CharacterForm />} />
            <Route path="/edit/:id" element={<CharacterForm />} />
          </Routes>
        </main>
        <footer className="bg-[#740001] text-[#D3A625] p-4 mt-8">
          <div className="container mx-auto text-center">
            &copy; 2024 Hogwarts Registry. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;