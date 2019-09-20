(function() {
    'use strict';

angular
    .module('project')
    .controller('appController', appController);

    appController.$inject = ['portfolioFactory','newsFactory','smoothScroll','$location','$routeParams','saveData'];

function appController(portfolioFactory, newsFactory, smoothScroll, $location,$routeParams,saveData) {

	var vm = this;

	vm.nameFormat = /^[A-Za-z]*$/;
	vm.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	vm.messageFormat = /^[a-zA-Z\s]{20,}$/

	vm.single = "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.";
	
	vm.filterPortfolio = filterPortfolio;
	vm.getParam = getParam;
	vm.submit = submit;
	vm.changeService = changeService;

	vm.category = '';
	vm.mailVal ='';
	vm.serviceVal = 1;

	portfolioFactory.success(function(data) {

	    vm.portfolioFactory = data;

	});

	newsFactory.success(function(data) {

		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	    
	    vm.newsFactory = data;

	    vm.newsFactory.forEach(function(item) {

	    	var date = new Date(Date.parse(item.date));

	    	if ((date.getUTCDate()+1).toString().length == 2) {
	    		item.day = date.getUTCDate()+1;
	    	} else {
	    		item.day = '0' + (date.getUTCDate()+1).toString();
	    	}	 		

	 		item.month = monthNames[date.getMonth()];

	    })

	});


	function filterPortfolio(category) {
		vm.category = category;
	}
	function getParam(index) {
		var param = vm.newsFactory[index].id;
		$location.path('/' + param);
		console.log(param);
	}

	function submit() {
		alert('added');
		vm.cookie = saveData.newCookie(vm.nameVal, vm.mailVal);
		vm.mailVal = vm.cookie;
	}

	function changeService(val) {
		vm.serviceVal = val;
	}


}
})();


