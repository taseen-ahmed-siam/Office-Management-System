function toggleForms() {
	const loginForm = document.getElementById('loginForm');
	const registrationForm = document.getElementById('registrationForm');

	if (!loginForm || !registrationForm) return;

	loginForm.classList.toggle('active');
	registrationForm.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
	const loginForm = document.getElementById('loginForm');
	const registrationForm = document.getElementById('registrationForm');

	if (loginForm) {
		loginForm.addEventListener('submit', function (e) {
			e.preventDefault();

			const email = document.getElementById('loginEmail').value.trim();
			const password = document.getElementById('loginPassword').value.trim();

			clearMessages(loginForm);

			if (!email || !password) {
				showError(loginForm, 'Please enter both email and password.');
				return;
			}

			showSuccess(loginForm, 'Logged in (demo only, no backend).');
		});
	}

	if (registrationForm) {
		registrationForm.addEventListener('submit', function (e) {
			e.preventDefault();

			const name = document.getElementById('regName').value.trim();
			const email = document.getElementById('regEmail').value.trim();
			const password = document.getElementById('regPassword').value.trim();
			const confirmPassword = document.getElementById('regConfirmPassword').value.trim();

			clearMessages(registrationForm);

			if (!name || !email || !password || !confirmPassword) {
				showError(registrationForm, 'Please fill in all fields.');
				return;
			}

			if (password.length < 6) {
				showError(registrationForm, 'Password must be at least 6 characters long.');
				return;
			}

			if (password !== confirmPassword) {
				showError(registrationForm, 'Passwords do not match.');
				return;
			}

			showSuccess(registrationForm, 'Registration successful (demo only, no backend).');
			registrationForm.reset();
		});
	}
});

function clearMessages(form) {
	const oldErrors = form.querySelectorAll('.error-message, .success-message');
	oldErrors.forEach(function (el) {
		el.remove();
	});
}

function showError(form, message) {
	const p = document.createElement('p');
	p.className = 'error-message';
	p.textContent = message;
	form.appendChild(p);
}

function showSuccess(form, message) {
	const p = document.createElement('p');
	p.className = 'success-message';
	p.textContent = message;
	form.insertBefore(p, form.firstChild.nextSibling);
}

