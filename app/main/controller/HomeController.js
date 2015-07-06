/**
 * Created by AOWPINS01_01 on 6/23/2015.
 */

'use strict';
var foodieJurnal=angular.module('foodieJournal.main', [
    'ngRoute'
]);
foodieJurnal.factory('activityService',activityFactory);
foodieJurnal.controller('HomeController',['$scope','$http','authenticateService','$location','$window','$rootScope',function ($scope,$http,authenticateService,$location,$window,$rootScope){
    $scope.userDataa = $window.localStorage.getItem('user');
    $scope.localStorageUserData = JSON.parse($scope.userDataa);

    $scope.title = 'Home Page title';
    $rootScope.isFooter=false;
    $scope.isFooter=true;

    $scope.modalShown = false;
    $scope.email="";
    $scope.password="";
    $scope.username="";
    $scope.userdata={};

    $scope.rebels
        = [{ challenge: 'Challenge Yourself',
        description1: 'FoodieJournal makes it easy for you to embark',
        description2: ' on a journey to discover new cuisines',
        imageUrl1: '../images_VY/picjumbo.com_IMG_0895.jpg',
        imageUrl2: 'main/images_VY/FoodieChallengeAsset.png',
        imageDescription1: 'Explore the top 5',
        imageDescription2: 'international cuisines and',
        imageDescription3: 'follow cuisine journeys',
        imageUrl3: 'main/images_VY/FoodieChallengeAsset1.png',
        imageDescription4: 'Receive restaurant',
        imageDescription5: 'reccomendations based on your',
        imageDescription6: 'preference and location',
        imageUrl4: 'main/images_VY/FoodieChallengeAsset3.png',
        imageDescription7: 'Complete Challenges and',
        imageDescription8: 'track your progress against',
        imageDescription9: 'your selected cuisine journey',
        challenge2: 'Revisit Challenge',
        description10: 'FoodieJournal lets you find sophisticated places',
        description11: ' and lets you find tasty dishes for your taste '

    }
    ];

    //loading Data from local Storage Start
    if (($scope.localStorageUserData)==undefined || ($scope.localStorageUserData)==null){

        var user={
            isLogin:false
        };
        $scope.user=user;
        $scope.userLoginCheck=$scope.user.isLogin;
        console.log("1"+$scope.userLoginCheck);

    }
    else{

        var user={
            isLogin:$scope.localStorageUserData.isLogin,
            userName:$scope.localStorageUserData.userName,
            profileImage:$scope.localStorageUserData.profileImage
        };
        $scope.user=user;
        console.log("2"+$scope.user.isLogin);
    }
    //loading Data from local Storage Start

    $scope.login = function() {

        $scope.email=this.email;
        $scope.password=this.password;
        $scope.userdata={};
        authenticateService.authenticate().then(function(data) {
            $scope.userdata={};
            $scope.userdata = data;
            $scope.userInvalidFlag=true;
            $scope.userdata.forEach(function(ud){
                if ($scope.email !== null && $scope.email === ud.username) {
                    if ($scope.password !== null && $scope.password === ud.password){
                        var user={
                            isLogin:true,
                            userName:ud.name,
                            profileImage:ud.profilePic
                        };
                        $scope.user=user;
                        console.log("3"+$scope.user.isLogin);
                        $scope.userInvalidFlag=false;
                        $window.localStorage.setItem('user', JSON.stringify($scope.user));
                        $location.path('/welcomehome');
                    }
                }
            });
            if($scope.userInvalidFlag==true) {
                    console.log("invalid user");
                }
        });
    }
    $scope.logout = function()
    {
        console.log("logout function called");
        var user={
            isLogin:false
        };
        $scope.user=user;

        console.log("3"+$scope.user.isLogin);
        window.localStorage.clear();
        $location.path('/');

    };

}]);
foodieJurnal.controller('FooterController',['$scope','$location',function ($scope,$location){
    if($location.path() =="/"){
        $scope.isFooter=true;
    }else{
        $scope.isFooter=false;
    }
    $scope.footer
        = [{
        footerDescription1: 'Developed By',
        footerImageUrl1: '../app/assets/images/%5BFoodieChallenge%5DAsset%20(19).png',
        footerImageUrl2: '../app/assets/images/%5BFoodieChallenge%5DAsset%20(20).png'
    }
    ];
}]);
/*factory Method to get the user id and password*/
foodieJurnal.factory('activityService',activityFactory);
/!*json data fetch*!/
function activityFactory($http){
    this.$inject = ['$http'];
    return {
        getuserdata: getuserdata
    };

    function getuserdata () {
        debugger;
        return $http
            .get('data/users.json')
            .then(complete)
            .catch(failed);
    }

    function complete(response) {
        debugger;
        return response.data;
    }

    function failed(error) {
        return error.statusText;
    }
}

foodieJurnal.service('authenticateService', authenticateService);
function authenticateService($http){
    this.$inject = ['$http'];
    return {
        authenticate: authenticate
    };

    function authenticate () {
        debugger;
        return $http
            .get('data/users.json')
            .then(complete)
            .catch(failed);

    }

    function complete(response) {
        debugger;
        return response.data;
    }

    function failed(error) {
        return error.statusText;
    }
}
