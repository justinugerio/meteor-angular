
angular.module('socially').controller('MainTestCtrl', ['$scope', '$q', function ($scope, $q) {
    
    $scope.hello = 'You are my friends!!!';
    
    $scope.btnClick = function (input) {
        alert('Hello, ' + input + '!');  
    };

    var okToGreet = function (name, $scope) {    
        return true;
    };
    
    var asyncGreet = function (name) {
        var deferred = $q.defer();
        
        setTimeout(function () {    
            deferred.notify('About to greet ' + name);
            
            if (okToGreet(name, $scope)) {
                deferred.resolve('Hello ' + name + '!!!');
            } else {
                deferred.reject('Greeting ' + name + ' is not allowed.');
            }

        }, 3000);
        
        return deferred.promise;
    }
    
    var promise = asyncGreet('Papa Smurf');
    
    promise.then(function (greeting) {
        $scope.hello = greeting;
    }, function (reason) {
        alert('Failed: ' + reason);
    }, function (update) {
        $scope.hello = update;
    });
    
    
    $scope.pac12Teams = ['arizona', 'cal', 'stanford', 'ucla', 'usc', 'washington'];
    $scope.otherTeams = ['duke', 'florida', 'georgetown', 'kansas', 'louisville', 'lsu'];
    $scope.otherTeams2 = ['maryland', 'michigan', 'michiganstate', 'oregon', 'osu', 'ou', 'texas', 'uk', 'unc', 'villanova', 'washington', 'wisc'];
    
    $scope.sortableConfig = {
        group: 'teams',
        animation: 200        
    };
    
    $scope.sortableConfig2 = {
        group: 'teams2',
        animation: 200        
    };
    
    $scope.visibility = 'show';
    
}]);


