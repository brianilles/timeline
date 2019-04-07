const router = require('express').Router();

const Users = require('./users-model.js');
const { authenticate } = require('../auth/authenticate.js');

router.get('/:id', authenticate, async (req, res) => {
  const userId = req.params.id;
  try {
    const projects = await Users.getUserProjects(userId);
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users.' });
  }
});

router.post('/:id', authenticate, async (req, res) => {
  const project = req.body;
  project.user_id = req.params.id;
  try {
    const addedProject = await Users.addProject(project);
    res.status(201).json(addedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding project.' });
  }
});

module.exports = router;
