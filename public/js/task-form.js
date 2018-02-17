$(document).ready(function() {
	let response;
	function post (e) {
		e.preventDefault();
		$.post ('', $('#task-form').serialize(), (result) => {
			response = result;
			console.log(response);
		})
	}

	$("#task-form").on("submit", post);

})