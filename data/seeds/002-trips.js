
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {
          id: 1, 
          primary_member_id: 1,
          ride_fare: 20,
          riders: '[{name:"rider1"}]'
        },
        {
          id: 2, 
          primary_member_id: 2,
          ride_fare: 10,
          riders: '[{name:"rider2"}]'
        },
        {
          id: 3, 
          primary_member_id: 1,
          ride_fare: 15,
          riders: '[{name:"rider3"}]'
        },
      ]);
    });
};
