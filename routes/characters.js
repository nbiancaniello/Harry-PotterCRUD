import express from 'express';
import Character from '../models/character.js';

const router = express.Router();

// Get all characters
router.get('/', async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single character
router.get('/:id', async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) return res.status(404).json({ message: 'Character not found' });
    res.json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new character
router.post('/', async (req, res) => {
  const character = new Character({
    name: req.body.name,
    house: req.body.house,
    role: req.body.role
  });

  try {
    const newCharacter = await character.save();
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a character
router.put('/:id', async (req, res) => {
  try {
    const character = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!character) return res.status(404).json({ message: 'Character not found' });
    res.json(character);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a character
router.delete('/:id', async (req, res) => {
  try {
    const character = await Character.findByIdAndDelete(req.params.id);
    if (!character) return res.status(404).json({ message: 'Character not found' });
    res.json({ message: 'Character deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;