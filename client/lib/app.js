
angular.module('socially', ['angular-meteor']);

angular.module('socially').directive('partiesList', function () {
    
    return {
        restrict: 'E',
        templateUrl: 'client/parties-list.html',
        controllerAs: 'partiesList',
        controller: function ($scope, $reactive) {
            $reactive(this).attach($scope);
    
            this.helpers({
                parties: function () {
                    return Parties.find({});
                }
            });
        }
        
    };
        
});
