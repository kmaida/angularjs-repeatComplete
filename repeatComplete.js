(function() {
	'use strict';

	angular
		.module('repeatComplete', []);  // module setter

	angular
		.module('repeatComplete')       // module getter
		.directive('repeatComplete', repeatComplete);

	/**
	 * USAGE:
	 *
	 * VIEW: <li ng-repeat="item in items" repeat-complete>
	 * JS: $scope.$on('repeat-complete', function($event, args) {});
	 *
	 * VIEW: <li ng-repeat="item in items" repeat-complete event="itemsDone">
	 * JS: $scope.$on('itemsDone', function($event, args) {});
	 *
	 * VIEW: <li ng-repeat="thing in things" repeat-complete callback="thingsDone()">
	 * JS: $scope.thingsDone = function() { ... }
	 */

	repeatComplete.$inject = ['$timeout'];
	function repeatComplete($timeout) {
		// return directive
		return {
			restrict: 'A',
			link: repeatCompleteLink
		};

		/**
		 * repeat-complete-event LINK function
		 *
		 * @param $scope
		 * @param $element
		 * @param $attrs
		 */
		function repeatCompleteLink($scope, $element, $attrs) {
			var _event = $attrs.event;
			var _callback = $attrs.callback;

			/**
			 * $last DOM element rendered:
			 * $emit event and/or run callback
			 *
			 * @private
			 */
			function _repeatCompleted() {
				var args = {
					lastElement: $element,
					parent: $element.parent()
				};

				// custom event name, $emit custom event
				if (_event) {
					$scope.$emit(_event, args);
				}

				// callback, execute callback function
				if (_callback) {
					$scope.$eval(_callback);
				}

				// no custom event name OR callback, $emit generic event
				if (!_event && !_callback) {
					$scope.$emit('repeat-complete', args);
				}
			}

			if ($scope.$last === true) {
				$timeout(_repeatCompleted);
			}
		}
	}
})();