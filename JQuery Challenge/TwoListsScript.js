$(document).ready(function() {
	$("#list1, #list2").sortable({
		beforeStop: function( event, ui ) {
			let uiH = ui.position.top;
			let uiW = ui.position.left;
			let divHeight = $("#container").height();
			let divWidth = $("#container").width();
			
			if(uiH > divHeight || uiW > divWidth || uiH <= -39){
				ui.item.remove();
			}
		},
		connectWith: ".connectedSort"
	})
});