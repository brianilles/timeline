const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const projects = await Users.getUserProjects(userId);
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users.' });
  }
});

router.post('/:id', async (req, res) => {
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

router.post('/:id/stories', async (req, res) => {
  const story = req.body;
  story.project_id = req.params.id;
  try {
    const addedStory = await Users.addProjectStory(story);
    res.status(201).json(addedStory);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
