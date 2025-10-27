function findByName(people, name) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      return people[i]; // Повертаємо об'єкт людини
    }
  }
  return null; // Якщо людина не знайдена
}

module.exports = findByName;
