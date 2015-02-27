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
	selected: true
}, {
	name: 'HOU T',
	address: '10730 Telge Road',
	address2: 'Houston, TX 77095',
	selected: true
}, {
	name: 'JUP C',
	address: '1680 South Central Boulevard',
	address2: 'Jupiter, FL 33458',
	selected: true
}];

var groups = [{
	name: 'Siemens Corporate',
	abbr: 'Siemens',
	image: 'assets/Siemens.png',
	selected: true
}, {
	name: 'Disability Support Network',
	abbr: 'DSN',
	image: 'assets/bridge.png',
	selected: true
}, {
	name: 'Green at Siemens',
	abbr: 'GREEN',
	image: 'assets/Green.png',
	selected: true
}, {
	name: 'Hispanic Resource Group',
	abbr: 'HRG',
	image: 'assets/HRG.jpg',
	selected: true
}, {
	name: 'NEW@Siemens',
	abbr: 'New@S',
	image: 'assets/NewS.jpg',
	selected: true
}, {
	name: 'Veteran’s Resource Group',
	abbr: 'Veterans'
	image: '',
	selected: true
}, {
	name: 'PRIDE',
	abbr: 'PRIDE',
	image: 'assets/pride.png',
	selected: true
}, {
	name: 'Women’s Resource Group',
	abbr: 'WRG',
	image: 'assets/women.jpg',
	selected: true
}, {
	name: 'Black Resource Group',
	abbr: 'BRG',
	image: 'assets/brg.png',
	selected: true
}, {
	name: 'Bridge Network Employee Resource Group',
	abbr: 'BRIDGE',
	image: 'assets/bridge.jpg',
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
	date : Date.parse("2015-02-23"),
	startTime: Date.parse("09:00"),
	endTime: Date.parse("10:00"),
	image : 'assets/Siemens.png',
	details: 'Very cool event',
	location: 'QI 2W31/32',
	groups: groups[0],
	attendence: 'no',
	rating: 1
}, {
	title : "Women and Financial Independence",
	site : sites[0],
	date : Date.parse("2015-04-10"),
	startTime: Date.parse("13:00"),
	endTime: Date.parse("15:00"),
	image : 'assets/women.jpg',
	details: 'Very cool event',
	location: 'Room 2E23',
	groups: groups[7],
	attendence: 'no',
	rating: 1
}, {
	title : "Financial Planning for Millennial Generation",
	site : sites[0],
	date : Date.parse("2015-04-03"),
	startTime: Date.parse("13:00"),
	endTime: Date.parse("15:00"),
	image : 'assets/NewS.jpg',
	details: 'Very cool event',
	location: 'QI 2W31-32',
	groups: groups[4],
	attendence: 'no',
	rating: 1
}, {
	title : "Engineering Week - The Language of Leadership",
	site : sites[0],
	date : Date.parse("2015-02-24"),
	startTime: Date.parse("12:30"),
	endTime: Date.parse("15:00"),
	image : 'assets/Siemens.png',
	details: 'Very cool event',
	location: 'QIII 4N44-02',
	groups: groups[7],
	attendence: 'no',
	rating: 1
}, {
	title : "Vehicle Showcase/Wheelchair Experience",
	site : sites[0],
	date : Date.parse("2015-07-10"),
	startTime: Date.parse("11:00"),
	endTime: Date.parse("13:00"),
	image : 'assets/Disability.png',
	details: 'Featuring several different wheelchair-accessible vehicle designs, including Charlie Carlson’s refurbished 1990 van fully equipped with hand controls for zero effort steering, gas, and braking from the wheelchair. Volunteers will spend half a day in a wheelchair to experience the challenges presented in each quad.',
	location: 'QIII Parking Area',
	groups: groups[1],
	attendence: 'no',
	rating: 1
}, {
	title : "Earth Day",
	site : sites[0],
	date : Date.parse("2015-04-22"),
	startTime: Date.parse("13:00"),
	endTime: Date.parse("15:00"),
	image : 'assets/Green.png',
	details: 'Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
	location: 'QI Cafe',
	groups: groups[2],
	attendence: 'no',
	rating: 1
}, {
	title : "New@S Team Building Event",
	site : sites[0],
	date : Date.parse("2015-02-28"),
	startTime: Date.parse("12:45"),
	endTime: Date.parse("15:00"),
	image : 'assets/NewS.jpg',
	details: 'New@S is pleased to invite you to participate in a teambuilding event at UCF! The goal of this event is for our members to develop relationships with each other and to promote collaboration between colleagues.',
	location: 'UCF Low Ropes Challenge Course',
	groups: groups[4],
	attendence: "no",
	rating: 1
}];

function createEvent() {
	return {
		title: "",
		site: sites[0],
		date: Date.parse('next week'),
		startTime: Date.parse('13:00'),
		endTime: Date.parse('15:00'),
		image: "",
		hosts: {name: "", email: ""},
		speaker: {name: "", email: ""},
		group: '',
		rating: 1,
		attendence: 'no',
		feedback: ''
	}
}

function sortNewer(a, b) {
	if(a.date < b.date)
		return -1;
	if(a.date > b.date)
		return 1;
	if(a.startTime < b.startTime)
		return -1;
	if(a.startTime > b.startTime)
		return 1;
	return 0;
}

function sortOlder(a, b) {
	if(a.date > b.date)
		return -1;
	if(a.date < b.date)
		return 1;
	if(a.startTime > b.startTime)
		return -1;
	if(a.startTime < b.startTime)
		return 1;
	return 0;
}

function arrayObjectIndexOf(myArray, searchTerm, property) {
    for(var i = 0, len = myArray.length; i < len; i++) {
    	console.log(property)
    	console.log(searchTerm)
        if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
}

// Angular Handling 
var eventsApp = angular.module('eventsApp', ['ui.bootstrap']);

eventsApp.controller('appCtrl', function($scope){

	$scope.currentEvent = null;
	$scope.myEvents = [];
	$scope.sites = sites;
	$scope.groups = groups;

	$scope.session = {
		viewHome: true,
		viewEvent: false,
		editEvent: false,
		rateEvent: false,
		currentEvents: true,
		pastEvents: false
	};

	$scope.formatTime = function(dateObj) {
		return dateObj.toString('h:ss');
	};

	$scope.formatDate = function(dateObj) {
		return dateObj.toString('dddd, MMMM d');
	};
	
	$scope.viewHome = function() {
		// Retreive data from server
		// Load properties from cookie
		$scope.session.viewEvent = false;
		$scope.session.editEvent = false;
		$scope.session.rateEvent = false;
		$scope.session.viewHome = true;

		$scope.filterEvents();
	};

	$scope.viewEvent = function(event, editable) {
		if(editable) {
			$scope.session.viewHome = false;
			$scope.session.viewEvent = true;
			$scope.session.editEvent = true;

			$scope.currentEvent = createEvent();

			$('.readonly').removeAttr('readonly', false);
		} else {
			$scope.session.viewHome = false;
			$scope.session.viewEvent = true;
			$scope.session.editEvent = false;

			$scope.currentEvent = event;
			
			if(Date.parse(event.date + " " + event.startTime) < Date.now()) {
				$scope.session.rateEvent = true;
			} else {
				$scope.session.rateEvent = false;
			}

			$('.readonly').attr('readonly', true);
		}
	};

	$scope.attendEvent = function() {
		console.log($scope.currentEvent.startTime);
	};

	$scope.submitEvent = function() {
		// Post $scope.session.currentEvent to server
		console.log($scope.currentEvent.group)

		events.push($scope.currentEvent);
	};

	$scope.filterEvents = function(click) {
		if(click) {
			$scope.session.currentEvents = $scope.session.currentEvents ? false : true;
			$scope.session.pastEvents = $scope.session.pastEvents ? false : true;
		}

		if($scope.session.currentEvents) {
			$scope.filteredEvents = events.filter(function(item) {
				return item.date > Date.now();
			});
		} else {
			$scope.filteredEvents = events.filter(function(item) {
				return item.date <= Date.now();
			});
		}

		// Filter Site
		console.log($scope.sites)
		$scope.filteredEvents = $scope.filteredEvents.filter(function(item) {
			var index = arrayObjectIndexOf($scope.sites, item.site.name, 'name');
			return $scope.sites[index] != undefined 
				&&  $scope.sites[index].selected;
		});

		// Filter groups
		$scope.filteredEvents = $scope.filteredEvents.filter(function(item) {
			console.log(item)
			var index = arrayObjectIndexOf($scope.groups, item.groups.name, 'name');
			console.log(index)
			return $scope.groups[index] != undefined 
				&&  $scope.groups[index].selected;
		});

		if($scope.session.currentEvents) {
			$scope.filteredEvents.sort(sortNewer);
		} else {
			$scope.filteredEvents.sort(sortOlder);
		}
	}

	$scope.addHost = function() {
		$scope.currentEvent.hosts.push({name: "", email: ""});
	};

	$scope.addSpeaker = function() {
		$scope.currentEvent.speakers.push({name: "", email: ""});
	};
});
