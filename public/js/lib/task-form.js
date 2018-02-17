$(document).ready(function() {
	function post(e) {
		e.preventDefault()
		$.post ('', $('#task-form').serialize(), (result) => {console.log(result)})
	}

	$("#task-form").on("submit", post);
})