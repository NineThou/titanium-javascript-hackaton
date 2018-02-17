$(document).ready(function() {
	function post (e) {
		$(".response").addClass("hidden");
		$(".reject").addClass("hidden");
		e.preventDefault();
		$.post ('', $('#task-form').serialize(), (result) => {
			console.log(result);
			$(result.success ? '.response' : '.reject').removeClass('hidden');
		})
	}

	$("#task-form").on("submit", post);
	
})