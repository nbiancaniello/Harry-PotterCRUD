import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Edit, Trash2 } from 'lucide-react';

interface Character {
  _id: string;
  name: string;
  house: string;
  role: string;
}

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/characters');
      setCharacters(response.data);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const deleteCharacter = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this character?')) {
      try {
        await axios.delete(`http://localhost:5000/api/characters/${id}`);
        fetchCharacters();
      } catch (error) {
        console.error('Error deleting character:', error);
      }
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Hogwarts Characters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <div key={character._id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{character.name}</h3>
            <p className="text-gray-600">House: {character.house}</p>
            <p className="text-gray-600">Role: {character.role}</p>
            <div className="mt-4 flex justify-end">
              <Link to={`/edit/${character._id}`} className="text-blue-500 hover:text-blue-700 mr-2">
                <Edit size={20} />
              </Link>
              <button onClick={() => deleteCharacter(character._id)} className="text-red-500 hover:text-red-700">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;