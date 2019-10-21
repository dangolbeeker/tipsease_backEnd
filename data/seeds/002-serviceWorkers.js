
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('serviceWorker').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('serviceWorker').insert([
        {
          id: 1, 
          username: 'SlickServer', 
          password: 'giveMeATip111', 
          FirstName: 'Bob', 
          LastName: 'Gnarley', 
          email: 'wontComplain@gmail.com', 
          customerOrService: true,
          tagline: 'Do, or do not. There is no try.',
          company: 'Red Robin',
          YearsAtCompany: 2,
          balance: 0
        },
        {
          id: 2, 
          username: 'CityBoy', 
          password: 'OhYesMyDude222', 
          FirstName: 'Steve', 
          LastName: 'Rad', 
          email: 'happyGoLucky@gmail.com', 
          customerOrService: true,
          tagline: 'John 15:5 //John 3:16 //Romans 6:1-5',
          company: 'Red Robin',
          YearsAtCompany: 4,
          balance: 16
        },
        {
          id: 3, 
          username: 'HandsOfPlenty', 
          password: 'subToPewDiePie333', 
          FirstName: 'Jeff', 
          LastName: 'Rambo', 
          email: 'thatOneGuy@gmail.com', 
          customerOrService: true,
          tagline: 'https://www.youtube.com/watch?v=HcpeLDp0Foo&list=PLn3-q8stQAVYG1Y-GvTMnp7OPl1FO9tlx&index=87',
          company: 'Claim Jumper',
          YearsAtCompany: 6,
          balance: 53
        },
      ]);
    });
};
