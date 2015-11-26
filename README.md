#repeatComplete

`repeatComplete` is an Angular module with a directive to execute code when an `ng-repeat` has finished adding elements to the DOM. The directive can fire a generic or custom-named event upon repeat completion and/or execute a callback function.

If neither event nor callback attributes are defined, a `repeat-complete` event will be emitted.

##Quick Start

Include the `repeatComplete.js` file and inject the `repeatComplete` dependency in your app module to use:

**Module:**

```
angular.module('myApp', ['repeatComplete']);
```

**View:**

```
<ul>
	<li ng-repeat="item in items" repeat-complete>
		{{item}}
	</li>
</ul>
```

**Controller:**

```
$scope.items = ['Item #1', 'Item #2', 'Item #3'];

$scope.$on('repeat-complete', function($event, args) {
	// items ng-repeat is done rendering
	// execute code
});
```

##Attributes

###event

The name of a custom event can be defined. This event will be emitted when the repeat is completed. If no callback and no custom event are provided, a default event called `repeat-complete` will be emitted.

* Type: *string*
* Event Arguments: `lastElement`, `parent`
* Default: `repeat-complete` (if no `callback` declared)

**View:**

```
<ul>
	<li ng-repeat="item in items" repeat-complete event="itemsDone">
		{{item}}
	</li>
</ul>
```

**Controller:**

```
$scope.items = ['Item #1', 'Item #2', 'Item #3'];

$scope.$on('itemsDone', function($event, args) {
    // "items" repeat complete - event fired!
});
```

###callback

A function can be passed as a callback. This callback will be executed when the repeat is completed.

**View:**

```
<ul>
    <li ng-repeat="thing in things" repeat-complete callback="thingsDone()">
    	{{thing}}
    </li>
</ul>
```

**Controller:**

```
$scope.things = ['Thing #1', 'Thing #2', 'Thing #3'];

$scope.thingsDone = function() {
    // "things" repeat complete - callback ran!
};
```
