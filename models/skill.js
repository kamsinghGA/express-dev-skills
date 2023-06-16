const skills = [
    {id: 12345, skill: 'Options Trading', proficient: true},
    {id: 54321, skill: 'Playing Basketball', proficient: false},
    {id: 67890, skill: 'Debugging Code', proficient: true}
]

module.exports = {
    getAll,
    getOne
  };
  
function getAll() {
    return skills;
}
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
    