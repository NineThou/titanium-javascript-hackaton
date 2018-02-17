$(document).ready(function() {
	function post (e) {
		$(".response").addClass("hidden");
		$(".reject").addClass("hidden");
		e.preventDefault();
		$.post ('/solution', $('#task-solution').serialize(), (result) => {
			console.log(result);
			$(result.success ? '.response' : '.reject').removeClass('hidden');
		})
	}

	$("#task-solution").on("submit", post);
	
})