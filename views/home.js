"use strict";

UnicomStatus.home = function(params) {
   

    var billTotal = ko.observable();

    var loading = ko.observable(false);
	var hasStatus = ko.observable(false);
	var status = ko.observable('');
    function checkStatus() {
        status('');
		hasStatus(false);
		loading(true);
		$.ajax({
		 crossDomain: true,
		 contentType: "application/json; charset=utf-8",
		 url: "http://status.it-arts.com/webservice1.asmx/GetStatus",
		  data:{id:billTotal},
		  dataType:'jsonp'
		//  method:'POST'
		}).done(function(dta) {
			loading(false);
		  hasStatus(true);
		  status(dta.status);
		}).fail(function(){
			loading(false);
			hasStatus(true);
		  status('Нет соединения с Интернет.');
		});


    };


    return {
        billTotal: billTotal,
        hasStatus: hasStatus,
        status: status,
		loading:loading,

        checkStatus: checkStatus
    };
};