'use strict';
var foodieJurnal=angular.module('foodieJournal.public', [
    'ngRoute'
]);
foodieJurnal.controller('PublicController',['$scope','$location',function ($scope,$location){
    /*if($location.path() =="/" || $location.path() == ""){*/
   /* $scope.isFooter=false;
    if($location.path() == "/"){
        $scope.isFooter=true;
        console.log('footer is true');
    }else{
        console.log('footer is false');
        $scope.isFooter=false;
		/!*var user={
		    isLogin:true,
			userName:"John",
			profileImage:"assets/images/slices/profileimage.png"
		};
	       $scope.user=user;*!/
    }*/
}]);