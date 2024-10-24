// Wait for the DOM and resources to be fully loaded before running any code
window.onload = function () {
    // Initialize Supabase only after the SDK has been loaded
    const supabaseUrl = 'https://makffzysueuarlenngtl.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ha2ZmenlzdWV1YXJsZW5uZ3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MDY5NTUsImV4cCI6MjA0NTI4Mjk1NX0.AVQYi8Mjw7qyzWs5MXZbO_Ie7L5MWcvtc5vy7e0ETYA';
    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

    console.log("Supabase initialized: ", supabase);

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
            document.getElementById('message').innerText = `Login failed: ${error.message}`;
        } else {
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
            document.getElementById('message').innerText = `Sign up failed: ${error.message}`;
        } else {
            document.getElementById('message').innerText = "Sign up successful! Please log in.";
        }
    });

    // Toggle between Login and Sign Up forms
    document.getElementById('toggle-form').addEventListener('click', () => {
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const formTitle = document.getElementById('form-title');
        const toggleButton = document.getElementById('toggle-form');

        if (loginForm.style.display === 'block' || loginForm.style.display === '') {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            formTitle.innerText = 'Sign Up';
            toggleButton.innerText = 'Already have an account? Log In';
        } else {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            formTitle.innerText = 'Login';
            toggleButton.innerText = "Don't have an account? Sign Up";
        }
    });
};
