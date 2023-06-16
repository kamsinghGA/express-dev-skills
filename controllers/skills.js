

module.exports = {
    index,
    show
  };
  
  function show(req, res) {
    res.render('skills/show', {
      todo: Todo.getOne(req.params.id),
      title: 'Skill Details'
    });
  }
  
  function index(req, res) {
    res.render('skills/index', {
      todos: Todo.getAll(), 
      title: 'All Skills'
    });
  }