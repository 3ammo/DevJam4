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
	selected: false
}, {
	name: 'GREEN',
	selected: false
}, {
	name: 'Hispanic Resource Group',
	selected: false
}, {
	name: 'NEW@Siemens',
	selected: false
}, {
	name: 'Veteran’s Resource Group',
	selected: false
}, {
	name: 'Women’s Information Network',
	selected: false
}, {
	name: 'Black Resource Group',
	selected: false
}, {
	name: 'BRIDGE',
	selected: false
}];

var speakers = [{
	name: 'Jacob Osterhout',
	url: 'https://social.siemens.com/users/280864-jacobosterhout',
	img: 'https://social.siemens.com/api/attachments/163955/stream/web_article_xl_2014_09_17_devjam_article-photo.jpg'
}];

var events = [{
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
			console.log($('.disabled'))
			$('.disabled').removeAttr('disabled');
		} else {
			$scope.session.viewHome = false;
			$scope.session.viewEvent = true;
			$scope.session.editEvent = false;

			$scope.currentEvent = event;

			$('.readonly').attr('readonly');
			$('.disabled').attr('disabled');
			
			if(event.startDate < new Date()) {
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
});