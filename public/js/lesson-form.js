$(document).ready(function() {
	let response;
	function post (e) {
		e.preventDefault();
		$.post ('', $('#lesson-form').serialize(), (result) => {
			response = result;
			console.log(response);
		})
	}

	$("#lesson-form").on("submit", post);

})