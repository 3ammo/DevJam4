// Author  : Jacob Osterhout
// Contact : jacob.osterhout@siemens.com

'use strict';

// DOM elements
var $_home = $('#home'),
    $_event   = $('#event'),
    $_attendence = $('#attendence'),
    $_survey = $('#survey'),
    $_return = $('#return'),
    $_join = $('#join'),
    $_submit = $('#submit');

// Sample Objects
var sites = [{
	name: 'ORL A',
	address: '4400 North Alafaya Trail',
	address2: 'Orlando, FL 32826'
}];

var events = [{
	title : "Engineering Week",
	site : sites[0],
	date : "2015-02-04",
	startTime: "13:00",
	endTime: "15:00",
	image : 'assets/Siemens-logo.svg'
}, {
	title : "Engineering Week",
	site : sites[0],
	date : "2015-02-04",
	startTime: "13:00",
	endTime: "15:00",
	image : 'assets/Siemens-logo.svg'
}, {
	title : "Engineering Week",
	site : sites[0],
	date : "2015-02-04",
	startTime: "13:00",
	endTime: "15:00",
	image : 'assets/Siemens-logo.svg'
}, {
	title : "Engineering Week",
	site : sites[0],
	date : "2015-02-04",
	startTime: "13:00",
	endTime: "15:00",
	image : 'assets/Siemens-logo.svg'
}, {
	title : "Engineering Week",
	site : sites[0],
	date : "2015-02-04",
	startTime: "13:00",
	endTime: "15:00",
	image : 'assets/Siemens-logo.svg'
}];

function createEvent() {
	return {
		title: "",
		site: sites[0],
		date: "2015-02-24",
		startTime: "13:00",
		endTime: "15:00",
		image: ""
	}
}

// Angular Handling 
var eventsApp = angular.module('eventsApp', []);

eventsApp.controller('appCtrl', function($scope){

	$scope.session = {
		viewHome: true,
		viewEvent: false,
		editEvent: false,
		rateEvent: false
	}

	$scope.currentEvent = null;

	$scope.filteredEvents = [];

	$scope.myEvents = [];

	$scope.sites = sites;
	
	$scope.viewHome = function() {
		// Retreive data from server
		$scope.filteredEvents = events;

		// Load properties from cookie


		// Show page
		$scope.session.viewEvent = false;
		$scope.session.viewHome = true;
	};

	$scope.viewEvent = function(event, editable) {
		if(editable) {
			$scope.currentEvent = createEvent();

			$scope.session.editEvent = true;
		} else {
			$scope.currentEvent = event;

			$scope.session.editEvent = false;
			if(event.startDate < new Date()) {
				$scope.session.rateEvent = true;
			} else {
				$scope.session.rateEvent = false;
			}
		}

		// Show page
		$scope.session.viewHome = false;
		$scope.session.viewEvent = true;
	};

	$scope.attendEvent = function() {

	};

	$scope.submitEvent = function() {
		// Post $scope.session.currentEvent to server
		// events.push($scope.currentEvent);
		console.log($scope.currentEvent.startTime)
	};
});