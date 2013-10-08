"use strict";

UnicomStatus.home = function(params) {
   

    var billTotal = ko.observable();

   
	var hasStatus = ko.observable(false);
	var status = ko.observable('');
    function checkStatus() {
        status('');
		hasStatus(false);
		
		$.ajax({
		 crossDomain: true,
		 contentType: "application/json; charset=utf-8",
		 url: "http://status.it-arts.com/webservice1.asmx/GetStatus",
		  data:{id:billTotal},
		  dataType:'jsonp'
		//  method:'POST'
		}).done(function(dta) {
		  hasStatus(true);
		  status(dta.status);
		}).fail(function(){
			hasStatus(true);
		  status('Нет соединения с Интернет.');
		});


    }


    return {
        billTotal: billTotal,
        hasStatus: hasStatus,
        status: status,

        checkStatus: checkStatus
    };
};