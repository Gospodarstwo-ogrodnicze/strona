function zaladujNewsa() {
	var newsIdentyfikator = $(this).attr("id");
	var page = $.ajax({url: "aktualnosci/" + newsIdentyfikator + ".php", 
					   type: "GET",
					   success: function(html){
							$('#' + newsIdentyfikator).html(html);
							}
					  });
	
}