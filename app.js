// Initialize Supabase
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-public-api-key';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Handle Login form submission
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        document.getElementById('message').innerText = error.message;
    } else {
        // Redirect to dashboard page after successful login
        window.location.href = "dashboard.html";
    }
});

// Handle Sign Up form submission
document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        document.getElementById('message').innerText = error.message;
    } else {
        // Optionally log in the user automatically after signup
        document.getElementById('message').innerText = "Sign up successful! Please log in.";
    }
});

// Toggle between Login and Sign Up forms
document.getElementById('toggle-form').addEventListener('click', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');
    const toggleButton = document.getElementById('toggle-form');

    if (loginForm.style.display === 'block') {
        // Switch to Sign Up form
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        formTitle.innerText = 'Sign Up';
        toggleButton.innerText = 'Already have an account? Log In';
    } else {
        // Switch to Login form
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        formTitle.innerText = 'Login';
        toggleButton.innerText = "Don't have an account? Sign Up";
    }
});
