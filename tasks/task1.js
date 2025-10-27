function filterAdults(people) {
  // Використаємо метод filter для створення нового масиву
  return people.filter(person => person.age >= 18);
}

module.exports = filterAdults;
