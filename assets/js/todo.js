// Check off specific todo by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Add new todos
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        //Grab new todo text from input
        var text = $(this).val();
        //Clear input
        $(this).val("");
        //Create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + text + "</li>");
    }
});

//Toggle fade when clicking the plus icon
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});