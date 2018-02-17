$(document).ready(function() {
	function post (e) {
		$(".response").addClass("hidden");
		$(".reject").addClass("hidden");
		e.preventDefault();
		$.post ('/solution', $('#task-solution').serialize(), (result) => {
			$(result.success ? '.response' : '.reject').removeClass('hidden');
			if (result.success) {
				$("error").html( '<div class="alert alert-success" role="alert">Test passed</div>' )
			} else {
				$("#error").html( result.errors.map((error) => {
					return '<div class="alert alert-danger" role="alert">' + error.output + '</div>'
				}).join("") ) 
			}
		})
	}

	$("#task-solution").on("submit", post);
	
})
