
angular.module('socially').directive('partiesList', function () {
    
    return {
        restrict: 'E',
        templateUrl: 'client/parties-list.html',
        controllerAs: 'partiesList',
        controller: function ($scope, $reactive) {
            $reactive(this).attach($scope);
            
            this.yourmother = 'your mother eats poo poo!';
                
            this.newParty = { };
            
            this.helpers({
                parties: function () {
                    return Parties.find({});
                }
            });
            
            this.addParty = function () {
                Parties.insert(this.newParty);
                this.newParty = { };
            };
            
            this.removeParty = function (party) {
                Parties.remove({_id: party._id});  
            };
        }
        
    };
        
});

