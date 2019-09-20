$(document).ready(function() {
	// call create user when button is clicked
	$("#newUser").click(function(){
		createUser();
    });	
	
	// method creates new user from user input
	function createUser(){
		// open a modal that prompts for user information, and inserts
		// that information if the submit button is pressed
		$("#dialog").dialog({
			title: "New User",
			position: {
				my: "center",
				at: "left center"
		    },
			modal:true,
			buttons:{
				Submit: function() {
					// get data from inputs
					$(this).dialog("close");
					let n = $("#name").val();
					let e = $("#email").val();
					let p = $("#password").val();
					
					// validation
					if((n.length >= 3 && e.length >= 3 && p.length >= 3) &&
					    e.includes("@")){
						// insert new row with given information
						$("#userTable tr:last").after("<tr><td>"+n+"</td><td>"+e+"</td><td>"+p+"</td></tr>");
					}
					// generate error message
					else{
						$("#error").dialog({
							title: "Error Message",
							position: {
								my: "center",
								at: "left center"
							}
						});
					}
				}
            }		
		})
	}
});	