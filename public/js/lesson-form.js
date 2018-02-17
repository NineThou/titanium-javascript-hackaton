$(document).ready(function() {
	function post (e) {
		$(".response").addClass("hidden");
		$(".reject").addClass("hidden");
		e.preventDefault();
		$.post ('', $('#lesson-form').serialize(), (result) => {
			console.log(result);
			$(result.success ? '.response' : '.reject').removeClass('hidden');
		})
	}

	$("#lesson-form").on("submit", post);
	
})