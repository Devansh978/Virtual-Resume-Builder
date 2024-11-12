// src/components/SkillSuggestions.js
const skillsDatabase = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Python', 'Java', 'SQL'];

const SkillSuggestions = (input) => {
  if (!input) return [];
  return skillsDatabase.filter((skill) =>
    skill.toLowerCase().includes(input.toLowerCase())
  );
};

export default SkillSuggestions;
