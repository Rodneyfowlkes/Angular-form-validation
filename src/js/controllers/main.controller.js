import $ from 'jquery';
import _ from 'lodash';
import angular from 'angular';
function MainController($scope,$http,SERVER){


    $scope.comments = [];
    // $scope.lastcom  = $scope.comments.last();

     init();
    
	 function init () {
       getComments();
     };

    function getComments () {
    	console.log();

    	$http.get(SERVER.URL).then((res)=>{
              $scope.comments = res.data;
    		 res.data.forEach(function(user){
    		 
              // $scope.comments.push(user.messages);
            
    		 })
    	})
    }
    

	$scope.submit = function(){

		 if (!forms.$valid){

		 	$http.post(SERVER.URL, $scope.user).then((res) =>{
		 
		 		getComments();
		 	})

		 } 
	}



	


}


MainController.$inject = ['$scope','$http', 'SERVER'];
export {MainController};