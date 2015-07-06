/**
 * Created by AOWPINS01_01 on 6/24/2015.
 */

/**
 * Created by AOWPINS01_01 on 6/23/2015.
 */




angular
    .module('foodieJournal.journey', ['ngMap'])
    .provider('filmService', FilmServiceProvider)
    .config(function (filmServiceProvider) {
        this.$inject = ['filmServiceProvider'];
        filmServiceProvider.setEndPoint('data/images.json');
    })
    .controller('JourneyController',['$scope','$location','$interval','$window','filmService',function ($scope,$location,$interval,$window,filmService)
    {
        $("#Next-Button1").attr('disabled','disabled');
        $("#Send-Next").attr('disabled','disabled');
        $scope.provideReasonFlag=false;
        $scope.send ='send';
        $scope.noOfClickCount=0;
        $scope.taskCompletedFlag = false;
        $scope.timeoutFlag = false;
        $scope.imageFlag=false;
        $scope.labelFlag=false;
        $scope.feedbackBtnFlag=false;
        $scope.labelText= 'STARTED';
        $scope.journey = 'Journeys';
    $scope.cuisine = 'American';
        $scope.Flag= true;
        $scope.started = 'STARTED';
        $scope.completed = 'COMPLETED';
        $scope.cuisine = 'American';
        $scope.MiddleBtnText ='Mark As Started';
    $scope.instruction = 'Instructions: Go ahead and ask for the ultimate Caramel Pie';
        $scope.description = 'Vegan Pitchfork banjo, cold presses post-ironic XOXO church-key. Salvia singh-origin coffee ' +
            '3 wolf moon typewriter you probably haven\'t heard of them freegan. Pitchfork cardian 8-bit four loko banh ' +
            'mi Bansky. Pork belly meggings food truck keytar polaroid mustache farm to table';

        $scope.culinary=selectedCulinary();

var timer=$interval(function(){
    console.log("------------"+$scope.localStorageUserData);
    console.log("..............."+$window.localStorage.getItem('user'));

    if(($scope.localStorageUserData)===undefined || ($scope.localStorageUserData)===null)
    {
        console.log("Inside if");
        $scope.Flag=true;
    }
    else
    {
        console.log("Inside else");
        $scope.Flag = $window.localStorage.getItem('user');
    }
    console.log("Value of Flag before entering if:::::"+ $scope.Flag);
    if($scope.Flag){
        getIndex($scope.culinary);
        if(angular.isDefined(timer)){
            $interval.cancel(timer);
            timer=undefined;
        }
    }

},100);

        //////////////////////
        filmService.getFilms().then(function(data) {
            $scope.films = data;
        });
        ////////////////////////

        //.............................
        $scope.onProvideReasonClick = function()
        {
            console.log("ProvideReason Function Called");

            $("#Send-Next").css("background-color","gainsboro");
            $("#Send-Next").css("color","black");
            $("#Send-Next").attr('disabled','disabled');
        };
        //..............................


        //-------------------------------
        $scope.goToAlterMiddleButton = function()
        {
            console.log("AlterMiddleButton Function Called");

            if($scope.MiddleBtnText=="Mark As Started")
            {
                $scope.timeoutFlag=true;

                 $("#MiddleButton").css("background-color","#00bfff");
                $scope.MiddleBtnText= "Mark As completed";
                $scope.labelFlag= true;
                $scope.labelText = "STARTED";
                $("#Next-Button1").attr('disabled','disabled');
                myVar= setTimeout("location.href = ('/foodie-journal-team-a/app/index.html#/journey/view/providereason/');",5000);
               /* myVar= setTimeout(function(){
                    console.log("Inside Timeout Function");
                    $scope.provideReasonFlag=true; },5000);*/

            }
            else if($scope.MiddleBtnText=="Mark As completed")
            {
                $scope.timeoutFlag=false;
                $scope.taskCompletedFlag = true;
                $("#MiddleButton").css("background-color","#d0d0d0");
                $scope.MiddleBtnText= "Way to go! Take the next challenge";
                $scope.imageFlag=true;
                $scope.labelFlag= true;
                $scope.labelText = "COMPLETED";
                $scope.feedbackBtnFlag ="true";
                //document.getElementById("Next-Button1").disabled = true;
                $("#Next-Button1").removeAttr("disabled");
                $("#Next-Button1").css("background-color","#00bfff");
                $("#Next-Button1").css("color","white");
                clearTimeout(myVar);
            }

            console.log(" Journey_Generic Screen Called");

        };
        //-----------------------------------
function getIndex(culinary)
{
    console.log('Inside getIndex Method');
    for(var i=0;i<culinary.foods.length;i++)
    {
        var status = culinary.foods[i].status;
       if(status =="incomplete"){
          // $scope.index =i+1;
           $scope.index =i;
           console.log($scope.index);
           break;
       }
    }
}
        //Previous Button Functionality
        $scope.goTopreviousChallengeScreen = function()
        {
            console.log("Journey go to previousChallengeScreen Function Called");
            if($scope.index==0){
                document.getElementById("previous-btn").disabled = true;
               // $("#previous-btn").attr('disabled','disabled');
                console.log("Previous Button disabled");
            }
            else{
                console.log("Previous Button enabled");
                console.log('value before:'+ $scope.index);
                $scope.index = $scope.index - 1;
                console.log('value after:'+ $scope.index);
                console.log('Value of Flag in previous Button Function before:'+$scope.Flag);
                $scope.Flag= false;
                console.log('Value of Flag in previous Button Function after:'+$scope.Flag);
                $window.localStorage.setItem('user',$scope.Flag);
                $location.path('/journeynew');
            }


        };

        //Next Button Functionality
        $scope.goToNextChallengeScreen = function()
        {
            console.log("Journey go to NextChallengeScreen Function Called");

                $scope.labelFlag=false;
            $scope.feedbackBtnFlag=false;
                console.log('value of Index before:'+ $scope.index);
                $scope.index=$scope.index+1;
            console.log('value of Index after:'+ $scope.index);

            //var status = $scope.culinary.foods[$scope.index].status;

            //console.log('value of Status before:'+ status);
           // $scope.culinary.foods[$scope.index].status= "complete";
           // console.log('value of Status after:'+ $scope.culinary.foods[$scope.index].status);

            console.log('Value of Flag in Next Button Function before:'+$scope.Flag);
            $scope.Flag= false;
            console.log('Value of Flag in Next Button Function After:'+$scope.Flag);
           $window.localStorage.setItem('user',$scope.Flag);
                $location.path('/journeynew');

            $scope.MiddleBtnText="Mark As Started";
            $("#MiddleButton").css("background-color"," #FE5140");
            $("#MiddleButton").css("color","#fff");
            $scope.imageFlag=false;

            $("#Next-Button1").css("background-color","gainsboro");
            $("#Next-Button1").css("color","black");
            $("#Next-Button1").attr('disabled','disabled');
        };
        //on Image click function
        $scope.ImageClickFunction = function()
        {
            console.log("ImageClickFunction Function Called");
            $location.path('/viewImages');

        };
        //send Button Functionality
       $scope.goToSendButton = function()
        {
            console.log("SendButton Function Called");
            $("#Send-Next").removeAttr("disabled");
            $("#Send-Next").css("background-color","#00bfff");
            $("#Send-Next").css("color","white");

        };
        function selectedCulinary(){
            return{
                "name": "American",
                //"description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
               // "duration": "3 Weeks",
               // "progress": 0,
                "foods": [
                    {
                        "id": "1",
                        "title": "All-American Bacon Cheese Burger",
                        "status": "complete",
                        "restorents": {
                            "name": "Frankie's",
                            "review_rate": 4,
                            "price": "$$",
                            "food_speciality": "Burgers",
                            "state": "SanFrancisco",
                            "street": "66MinSt",
                            "zip_code": "CA94103",
                            "reviews": "1256",
                            "contacts": {
                                "oprational_hour": "8:00 am - 9.00 pm",
                                "open_status": "Open now",
                                "phone_code": "510",
                                "phone_number": "653-3394",

                                "website": "frenkiesburgers.com"
                            },
                            "photos": {
                                "thumb_img": "assets/images/EditedByVarsha.jpg",
                                "no_of_photo_uploaded": "25"
                            },
                            "map": {
                                "center": {
                                    "latitude": "37.79",
                                    "longitude": "-122.4175"
                                }
                            }
                        },
                        //"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
                    },
                    {
                        "id": "2",
                        "title": "Traditional American Desserts",
                        "status": "incomplete",
                        "restorents": {
                            "name": "Frankie's",
                            "review_rate": 4,
                            "price": "$$",
                            "reviews": "1256",
                            "food_speciality": "Burgers",
                            "state": "SanFrancisco",
                            "street": "66MinSt",
                            "zip_code": "CA94103",
                            "contacts": {
                                "oprational_hour": "8:00 am - 9.00 pm",
                                "open_status": "Open now",
                                "phone_code": "510",
                                "phone_number": "653-3394",
                                "reviews": "1256",
                                "website": "BurgerKing.com"
                            },
                            "photos": {

                                "thumb_img": "assets/images/[FoodieChallenge]Asset (16).png",
                                "no_of_photo_uploaded": "25"
                            },
                            "map": {
                                "center": {
                                    "latitude": "37.79",
                                    "longitude": "-122.4175"
                                }
                            }
                        },
                      //  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
                    },
                    {
                        "id": "3",
                        "title": "San Francisco Sourdough Bread",
                        "status": "incomplete",
                        "restorents": {
                            "name": "Frankie's",
                            "review_rate": 4,
                            "price": "$$",
                            "reviews": "1256",
                            "food_speciality": "Burgers",
                            "state": "SanFrancisco",
                            "street": "66MinSt",
                            "zip_code": "CA94103",
                            "contacts": {
                                "oprational_hour": "8:00 am - 9.00 pm",
                                "open_status": "Open now",
                                "phone_code": "510",
                                "phone_number": "653-3394",
                                "reviews": "1256",
                                "website": "frenkiesburgers.com"
                            },
                            "photos": {
                                "thumb_img": "assets/images/EditedByVarsha.jpg",
                                "no_of_photo_uploaded": "25"
                            },
                            "map": {
                                "center": {
                                    "latitude": "37.79",
                                    "longitude": "-122.4175"
                                }
                            }
                        },
                      //  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
                    },
                    {
                        "id": "4",
                        "title": "New York Style Buffalo Wings",
                        "status": "incomplete",
                        "restorents": {
                            "name": "Frankie's",
                            "review_rate": 4,
                            "price": "$$",
                            "reviews": "1256",
                            "food_speciality": "Burgers",
                            "state": "SanFrancisco",
                            "street": "66MinSt",
                            "zip_code": "CA94103",
                            "contacts": {
                                "oprational_hour": "8:00 am - 9.00 pm",
                                "open_status": "Open now",
                                "phone_code": "510",
                                "phone_number": "653-3394",
                                "reviews": "1256",
                                "website": "frenkiesburgers.com"
                            },
                            "photos": {
                                "thumb_img": "assets/images/[FoodieChallenge]Asset (16).png",
                                "no_of_photo_uploaded": "25"
                            },
                            "map": {
                                "center": {
                                    "latitude": "37.79",
                                    "longitude": "-122.4175"
                                }
                            }
                        },
                       // "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
                    },
                    {
                        "id": "5",
                        "title": "Smoked Barbeque Ribs",
                        "status": "incomplete",
                        "restorents": {
                            "name": "Frankie's",
                            "review_rate": 4,
                            "price": "$$",
                            "food_speciality": "Burgers",
                            "state": "SanFrancisco",
                            "street": "66MinSt",
                            "reviews": "1256",
                            "zip_code": "CA94103",
                            "contacts": {
                                "oprational_hour": "8:00 am - 9.00 pm",
                                "open_status": "Open now",
                                "phone_code": "510",
                                "phone_number": "653-3394",
                                "reviews": "1256",
                                "website": "frenkiesburgers.com"
                            },
                            "photos": {
                                "thumb_img": "assets/images/EditedByVarsha.jpg",
                                "no_of_photo_uploaded": "25"
                            },
                            "map": {
                                "center": {
                                    "latitude": "37.79",
                                    "longitude": "-122.4175"
                                }
                            }
                        },
                     //   "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
                    }
                ],
                "selectedCls": "x-btn-selected",
                "imagePath": "assets/images/slices/[FoodieChallenge]Asset (25).png"
            }
        }
    }]);


//////////////////////////
function FilmServiceProvider () {
    var endPoint;

    this.setEndPoint = setEndPoint;
    this.$get = filmFactory;

    function setEndPoint (url) {
        endPoint = url;
    };

    function filmFactory ($http) {
        this.$inject = ['$http'];
        return {
            getFilms: getFilms
        };

        function getFilms() {
            return $http
                .get(endPoint)
                .then(complete)
                .catch(failed);
        }

        function complete(response) {
            return response.data;
        }

        function failed(error) {
            return error.statusText;
        }
    }
}
////////////////////////////