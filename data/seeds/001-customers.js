
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
          id: 1, 
          username: 'TheNiceGuy', 
          password: 'HelloWorld123', 
          FirstName: 'John', 
          LastName: 'Snow', 
          email: 'helloWorld@gmail.com', 
          customerOrService: true
        },
        {
          id: 2, 
          username: 'RebelDude', 
          password: 'GoodMorning321', 
          FirstName: 'Luke', 
          LastName: 'Skywalker', 
          email: 'goodBye@gmail.com', 
          customerOrService: true
        }
      ]);
    });
};
