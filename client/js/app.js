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
	address2: 'Orlando, FL 32826',
	selected: true
}, {
	name: 'CLT W',
	address: '5101 Westinghouse Boulevard',
	address2: 'Charlotte, NC 28273',
	selected: false
}, {
	name: 'HOU T',
	address: '10730 Telge Road',
	address2: 'Houston, TX 77095',
	selected: false
}, {
	name: 'JUP C',
	address: '1680 South Central Boulevard',
	address2: 'Jupiter, FL 33458',
	selected: false
}];

var tags = [{
	name: 'Siemens Corporate',
	selected: true
}, {
	name: 'Disability Support Network',
	selected: true
}, {
	name: 'GREEN',
	selected: true
}, {
	name: 'Hispanic Resource Group',
	selected: true
}, {
	name: 'NEW@Siemens',
	selected: true
}, {
	name: 'Veteran’s Resource Group',
	selected: true
}, {
	name: 'Women’s Information Network',
	selected: true
}, {
	name: 'Black Resource Group',
	selected: true
}, {
	name: 'BRIDGE',
	selected: true
}];

var speakers = [{
	name: 'Jacob Osterhout',
	url: '',
	img: ''
}];

var events = [{
	title : "Engineering Week - DevJam Competition Launch",
	site : sites[0],
	date : "2015-02-23",
	startTime: "09:00",
	endTime: "10:00",
	image : 'assets/Siemens.png',
	details: 'Very cool event',
	location: 'Q1 2W31/32',
	tags: tags,

}, {
	title : "Engineering Week",
	site : sites[0],
	date : "2015-02-04",
	startTime: "13:00",
	endTime: "15:00",
	image : 'assets/Siemens.png',
	details: 'Very cool event',
	location: 'Room 2E23',
	tags: tags
}, {
	title : "Engineering Week Something Something Something Something",
	site : sites[0],
	date : "2015-02-04",
	startTime: "13:00",
	endTime: "15:00",
	image : 'assets/Siemens.png',
	details: 'Very cool event',
	location: 'Room 2E23',
	tags: tags
}, {
	title : "Engineering Week",
	site : sites[0],
	date : "2015-02-04",
	startTime: "13:00",
	endTime: "15:00",
	image : 'assets/Siemens.png',
	details: 'Very cool event',
	location: 'Room 2E23',
	tags: tags
}, {
	title : "Engineering Week",
	site : sites[0],
	date : "2015-02-04",
	startTime: "13:00",
	endTime: "15:00",
	image : 'assets/Siemens.png',
	details: 'Very cool event',
	location: 'Room 2E23',
	tags: tags
}, {
	title : "Engineering Week",
	site : sites[0],
	date : "2015-02-04",
	startTime: "13:00",
	endTime: "15:00",
	image : 'assets/Siemens.png',
	details: 'Very cool event',
	location: 'Room 2E23',
	tags: tags
}, {
	title : "Engineering Week",
	site : sites[0],
	date : "2015-02-04",
	startTime: "13:00",
	endTime: "15:00",
	image : 'assets/Siemens.png',
	details: 'Very cool event',
	location: 'Room 2E23',
	tags: tags
}];

function createEvent() {
	return {
		title: "",
		site: sites[0],
		date: "2015-02-24",
		startTime: "13:00",
		endTime: "15:00",
		image: "",
		hosts: {name: "", email: ""},
		tags: jQuery.extend({}, tags)
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

	$scope.myEvents = [];

	$scope.sites = sites;

	$scope.speakers = speakers;

	$scope.tags = tags;
	
	$scope.viewHome = function() {
		// Retreive data from server
		$scope.filteredEvents = events;

		// Load properties from cookie


		// Show page
		$scope.session.viewEvent = false;
		$scope.session.editEvent = false;
		$scope.session.rateEvent = false;
		$scope.session.viewHome = true;
	};

	$scope.viewEvent = function(event, editable) {
		if(editable) {
			$scope.session.viewHome = false;
			$scope.session.viewEvent = true;
			$scope.session.editEvent = true;

			$scope.currentEvent = createEvent();

			$('.readonly').removeAttr('readonly');
		} else {
			$scope.session.viewHome = false;
			$scope.session.viewEvent = true;
			$scope.session.editEvent = false;

			$scope.currentEvent = event;

			$('.readonly').attr('readonly');
			
			if(Date.parse(event.date + " " + event.startTime) < Date.now()) {
				$scope.session.rateEvent = true;
			} else {
				$scope.session.rateEvent = false;
			}
		}
	};

	$scope.attendEvent = function() {
		console.log($scope.currentEvent.startTime)
	};

	$scope.submitEvent = function() {
		// Post $scope.session.currentEvent to server
		
		// Filter out unused tags
		$scope.currentEvent.tags.filter(function(e) {
			return e.selected;
		});

		// events.push($scope.currentEvent);

		console.log($scope.currentEvent.startTime)
	};

	$scope.filterEvents = function() {
		$scope.filteredEvents = events.filter(function(item) {
			
		});
	};

	$scope.addHost = function() {
		$scope.currentEvent.hosts.push({name: "", email: ""});
	};

	$scope.addSpeaker = function() {
		$scope.currentEvent.speakers.push({name: "", email: ""});
	};

	$scope.formatDate = function(date) {
		return Date.parse(date).toString('dddd, MMMM d');
	}
});