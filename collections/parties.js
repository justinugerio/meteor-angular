
Parties = new Mongo.Collection("parties");

if (Meteor.isServer) {
    Meteor.startup(function () {
       if (Parties.find().count() === 0) {
           var parties = [
               {
                'name': 'Dubstep-Free Zone',
                'description': 'Can we please just for one evening not listen to dubstep?'
               },
               {
                'name': 'All Dubstep All the Time',
                'description': 'Let\'s get it on!'
               },
               {
                'name': 'Savage Lounging Act',
                'description': 'Leisure suite Larry required. And only fiercest manners.'
               }
           ];
           
           _.each(parties, function (party, i) {
               Parties.insert(party);
           })
       } 
    });
}
