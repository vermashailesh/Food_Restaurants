/**
 * Created by AOWPINS01_01 on 6/23/2015.
 */

'use strict';
var foodieJurnal=angular.module('foodieJournal.culinaris', [
    'ngRoute',
    'ngMap'
]);
foodieJurnal.controller('CulinarisController',['$scope','$location',function ($scope,$location){
    $.support.transition = false;
    $scope.FollowBtnText= "Follow";
    $scope.ContinueBtnText= "Continue";


    $scope.alterFollowText = function(){
        if($scope.FollowBtnText=="Follow")
        {
           // $("#Follow-Btn").css("background-color","blue");
            $scope.FollowBtnText= "Continue";
        }
        console.log(" Journey_Generic Screen Called");
        $location.path('/journeynew');
    };
    $scope.openInNewWindow= function(){
        $location.path('/culinaris_photos')  ;

        // $scope.title=title;
        //console.log(title);
    };

    $scope.extraPhotos=[
        {
            "imageName":"burger1",
            "imageSrc":"assets/images/slices/burger1.png",
        },
        {
            "imageName":"burger2",
            "imageSrc":"assets/images/slices/burger2.png",
        },
        {
            "imageName":"burger3",
            "imageSrc":"assets/images/slices/burger3.png",
        },
        {
            "imageName":"burger4",
            "imageSrc":"assets/images/slices/burger4.png",
        }
    ];

         $scope.culinaris=[
                             {
                                 "name": "American",
                                 "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
                                 "duration": "3 Weeks",
                                 "progress" : 0,
                                 "selectedCls":"x-btn-selected",
                                 "imagePath":"assets/images/slices/[FoodieChallenge]Asset (25).png"
                             },
                             {
                                 "name": "Korean",
                                 "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
                                 "duration": "1 Week",
                                 "progress" : 20,
                                 "imagePath":"assets/images/slices/[FoodieChallenge]Asset (1).png"
                             },
                             {
                                 "name": "Italian",
                                 "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
                                 "duration": "1 Week",
                                 "progress" : 20,
                                 "imagePath":"assets/images/slices/[FoodieChallenge]Asset (1).png"
                             },
                             {
                                 "name": "Mexican",
                                 "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
                                 "duration": "2 Weeks",
                                 "progress": 70,
                                 "imagePath":"assets/images/slices/[FoodieChallenge]Asset (2).png"
                             },
                             {
                                 "name": "Japanese",
                                 "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
                                 "duration": "3 Weeks",
                                 "progress": 0,
                                 "imagePath":"assets/images/slices/[FoodieChallenge]Asset (3).png"
                             }
         ];
    $scope.progressFlag=false;
    $scope.foodSelect=function(id) {
        console.log("Value of id is:::::::"+id);
        if (id != "check-1")
        {


        if (document.getElementById(id).checked == true) {
            if ($scope.culinary.progress != 100) {
                $scope.culinary.progress = $scope.culinary.progress + 20;
            }
        } else {
            if ($scope.culinary.progress != 20) {
                $scope.culinary.progress = $scope.culinary.progress - 20;
            }
        }
    }
    };


    //Palak Starts
    $scope.clickedFlag=false;
    //console.log($scope.clickedFlag);
    $scope.change=function(id){
        $scope.clickedFlag=true;
        var selectedOrder;
        var desc;
        if(id==0){
            selectedOrder="restaurents.review_rate";
            desc="Most Recent";
        }
        else if(id==1){
            selectedOrder="restaurents.review_rate";
            desc="Highest Rated";
        }
        else if(id==2){
            selectedOrder="restaurents.reviews";
            desc="Top Reviewed";
        }
        $scope.orderSelect=selectedOrder;
        $scope.desc=desc;
        //console.log($scope.clickedFlag);
        // console.log($scope.orderSelect);
    };
    //Palak Ends


    $scope.culinary=selectedCulinary();
    $scope.culinary.progress=20;
    $scope.map = {
        center: {
            latitude: 37.79,
            longitude: -122.4175
        },
        zoom: 13
    };
    $scope.marker = {
        idKey: 123,
        coords: {
            latitude: 37.7836377,
            longitude: -122.4132168
        }
    };
    function selectedCulinary(){
        return{
    "name": "American",
    "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
    "duration": "3 Weeks",
    "progress": 0,
    "foods": [
        {
            "id": "check-1",
            "title": "All-American Bacon Cheese Burger",
            "status": "incomplete",
            "restorents": {
                "name": "Frankie's",
                "review_rate": 1,
                "price": "$$",
                "food_speciality": "Burgers",
                "state": "SanFrancisco",
                "street": "66MinSt",
                "zip_code": "CA94103",
				"reviews": "5",
                "contacts": {
                    "oprational_hour": "8:00 am - 9.00 pm",
                    "open_status": "Opennow",
                    "phone_code": "510",
                    "phone_number": "653-3394",
                    
                    "website": "frenkiesburgers.com"
                },
                "photos": {
                    "thumb_img": "assets/images/slices/Asset17.png",
                    "no_of_photo_uploaded": "25"
                },
                "map": {
                    "center": {
                        "latitude": "37.79",
                        "longitude": "-122.4175"
                    }
                }
            },
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
        },
        {
            "id": "check-2",
            "title": "Traditional American Desserts",
            "status": "incomplete",
            "restorents": {
                "name": "Frankie's",
                "review_rate": 2,
                "price": "$$",
				"reviews": "4",
                "food_speciality": "Burgers",
                "state": "SanFrancisco",
                "street": "66MinSt",
                "zip_code": "CA94103",
                "contacts": {
                    "oprational_hour": "8:00 am - 9.00 pm",
                    "open_status": "Opennow",
                    "phone_code": "510",
                    "phone_number": "653-3394",
                    "reviews": "1256",
                    "website": "frenkiesburgers.com"
                },
                "photos": {
                    "thumb_img": "assets/images/slices/Asset17.png",
                    "no_of_photo_uploaded": "25"
                },
                "map": {
                    "center": {
                        "latitude": "37.79",
                        "longitude": "-122.4175"
                    }
                }
            },
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
        },
        {
            "id": "check-3",
            "title": "San Francisco Sourdough Bread",
            "status": "incomplete",
            "restorents": {
                "name": "Frankie's",
                "review_rate": 3,
                "price": "$$",
				"reviews": "3",
                "food_speciality": "Burgers",
                "state": "SanFrancisco",
                "street": "66MinSt",
                "zip_code": "CA94103",
                "contacts": {
                    "oprational_hour": "8:00 am - 9.00 pm",
                    "open_status": "Opennow",
                    "phone_code": "510",
                    "phone_number": "653-3394",
                    "reviews": "1256",
                    "website": "frenkiesburgers.com"
                },
                "photos": {
                    "thumb_img": "assets/images/slices/Asset17.png",
                    "no_of_photo_uploaded": "25"
                },
                "map": {
                    "center": {
                        "latitude": "37.79",
                        "longitude": "-122.4175"
                    }
                }
            },
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
        },
        {
            "id": "check-4",
            "title": "New York Style Buffalo Wings",
            "status": "incomplete",
            "restorents": {
                "name": "Frankie's",
                "review_rate": 4,
                "price": "$$",
				"reviews": "2",
                "food_speciality": "Burgers",
                "state": "SanFrancisco",
                "street": "66MinSt",
                "zip_code": "CA94103",
                "contacts": {
                    "oprational_hour": "8:00 am - 9.00 pm",
                    "open_status": "Opennow",
                    "phone_code": "510",
                    "phone_number": "653-3394",
                    "reviews": "1256",
                    "website": "frenkiesburgers.com"
                },
                "photos": {
                    "thumb_img": "assets/images/slices/Asset17.png",
                    "no_of_photo_uploaded": "25"
                },
                "map": {
                    "center": {
                        "latitude": "37.79",
                        "longitude": "-122.4175"
                    }
                }
            },
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
        },
        {
            "id": "check-5",
            "title": "Smoked Barbeque Ribs",
            "status": "incomplete",
            "restorents": {
                "name": "Frankie's",
                "review_rate": 5,
                "price": "$$",
                "food_speciality": "Burgers",
                "state": "SanFrancisco",
                "street": "66MinSt",
				"reviews": "1",
                "zip_code": "CA94103",
                "contacts": {
                    "oprational_hour": "8:00 am - 9.00 pm",
                    "open_status": "Opennow",
                    "phone_code": "510",
                    "phone_number": "653-3394",
                    "reviews": "1256",
                    "website": "frenkiesburgers.com"
                },
                "photos": {
                    "thumb_img": "assets/images/slices/Asset17.png",
                    "no_of_photo_uploaded": "25"
                },
                "map": {
                    "center": {
                        "latitude": "37.79",
                        "longitude": "-122.4175"
                    }
                }
            },
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
        }
    ],
    "selectedCls": "x-btn-selected",
    "imagePath": "assets/images/slices/[FoodieChallenge]Asset (25).png"
}
    }
}])
.directive('circularProgressbar', function() {
        return {

            scope: {
                culinary: '=',
            },
            templateUrl: 'culinaris/partials/circularProgressbar.html'
        };
}).
directive("btstAccordion", function () {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        scope: {},
        template:
            "<div class='accordion' ng-transclude></div>",
        link: function (scope, element, attrs) {

            // give this element a unique id
            var id = element.attr("id");
            if (!id) {
                id = "btst-acc" + scope.$id;
                element.attr("id", id);
            }

            // set data-parent on accordion-toggle elements
            var arr = element.find(".accordion-toggle");
            for (var i = 0; i < arr.length; i++) {
                $(arr[i]).attr("data-parent", "#" + id);
                $(arr[i]).attr("href", "#" + id + "collapse" + i);
            }
            arr = element.find(".accordion-body");
            $(arr[0]).addClass("in"); // expand first pane
            for (var i = 0; i < arr.length; i++) {
                $(arr[i]).attr("id", id + "collapse" + i);
            }
        },
        controller: function () {}
    };
}).
directive('btstPane', function () {
    return {
        require: "^btstAccordion",
        restrict: "E",
        transclude: true,
        replace: true,
        scope: {
            title: "@",
            category: "=",
            order: "="
        },
        template:
            "<div class='accordion-group' >" +
            "  <div class='accordion-heading'>" +
            "    <a class='accordion-toggle' data-toggle='collapse'> {{category.name}} - </a>" +
       
            "  </div>" +
            "<div class='accordion-body collapse'>" +
            "  <div class='accordion-inner' ng-transclude></div>" +
            "  </div>" +
            "</div>",
        link: function (scope, element, attrs) {
            scope.$watch("title", function () {
                // NOTE: this requires jQuery (jQLite won't do html)
                var hdr = element.find(".accordion-toggle");
                hdr.html(scope.title);
            });
        }
    };
}).filter('makeRange', function() {
        return function(input) {
            var lowBound, highBound;
            switch (input.length) {
            case 1:
                lowBound = 0;
                highBound = parseInt(input[0]) - 1;
                break;
            case 2:
                lowBound = parseInt(input[0]);
                highBound = parseInt(input[1]);
                break;
            default:
                return input;
            }
            var result = [];
            for (var i = lowBound; i <= highBound; i++)
                result.push(i);
            return result;
        };
    });