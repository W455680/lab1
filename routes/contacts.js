import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Contacts route');
});

// Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
  });
  
  // Get a contact by id
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact by id ' + id);
  });
  
  // to-do: add post, put, and delete routers

  // Add a new contact (POST)
router.post('/', (req, res) => {

    const newContact = req.body;
    
    res.status(201).send('New contact created');
  });
  
  // Update an existing contact by id (PUT)
  router.put('/:id', (req, res) => {
    const id = req.params.id;
   
    const updatedContact = req.body;
    
    res.send('Contact with id ' + id + ' updated');
  });
  
  // Delete a contact by id (DELETE)
  router.delete('/:id', (req, res) => {
   
    const id = req.params.id;
    
    res.send('Contact with id ' + id + ' deleted');
  });

export default router;



  