'use strict';

angular.module('lolniacsApp').controller('formCtrl', function ($scope, $http, socket) {
	var bgSize = 160;
	$scope.keyPress = function(event) {
		var element = event.currentTarget.className,
		$el     = $('.'+element);

		if(event.keyCode === 8) {
			bgSize = bgSize - 50;
			$el.attr('style', 'background-size:'+bgSize+'px 100%;');
		} else {
			bgSize = bgSize + 50;
			$el.attr('style', 'background-size:'+bgSize+'px 100%;');
		}
	};
	$scope.onBlur = function(event) {
		var element = event.currentTarget.className,
		$el     = $('.'+element);
		if($el.val().length > 0 ) {
			console.log('lol');
			$el.attr('style', '');
		} else {
			bgSize = 160;
			$el.attr('style', '');
		}
	};
});