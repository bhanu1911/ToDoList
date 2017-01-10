//Check off speciffic todos by clicking 
$("ul").on('click', "li", function() {
	$(this).toggleClass("completed");
});

//Add a listener to UL not LI, and when an LI is run inside the code,
//the function fires

//click on X to delete todos
$("ul").on('click','span',function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation(); //Stop bubbling of completed trigger
});	

$("input[type='text'").keypress( function(event) {
	if(event.which === 13) {
		//grab the new todo text from user
		var todoText = $(this).val();
		$(this).val("");
		//create a new li to the UL
		$("ul").append("<li> <span> <i class='fa fa-trash-o' aria-hidden='true'></i></span>" +  todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text'").fadeToggle();
});			
