function linkPapers() {
	var action_sidebar = document.getElementById('saction');
	var user_sidebar = document.getElementById('suser');
	var main = document.getElementById('main');
	var search = document.getElementById('search');

	action_sidebar.className = 'sidebar divider';
	user_sidebar.className = 'sidebar white';
	main.className = '';
	search.className = '';
}

function dividePapers() {
	var action_sidebar = document.getElementById('saction');
	var user_sidebar = document.getElementById('suser');
	var main = document.getElementById('main');
	var search = document.getElementById('search');

	action_sidebar.className = 'sidebar divider saexpanded';
	user_sidebar.className = 'sidebar white saexpanded';
	main.className = 'saexpanded';
	search.className = 'saexpanded';
}