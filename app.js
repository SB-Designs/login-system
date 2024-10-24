// Initialize Supabase
const supabaseUrl = 'https://makffzysueuarlenngtl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ha2ZmenlzdWV1YXJsZW5uZ3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MDY5NTUsImV4cCI6MjA0NTI4Mjk1NX0.AVQYi8Mjw7qyzWs5MXZbO_Ie7L5MWcvtc5vy7e0ETYA';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Check if Supabase is initialized properly
console.log("Supabase initialized", supabase);

// Handle Login form submission (Test if this runs)
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Login form submitted');
});

// Handle Sign Up form submission (Test if this runs)
document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Signup form submitted');
});

// Toggle between Login and Sign Up forms
document.getElementById('toggle-form').addEventListener('click', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');
    const toggleButton = document.getElementById('toggle-form');

    if (loginForm.style.display === 'block' || loginForm.style.display === '') {
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

    // Check if the toggle works
    console.log('Form toggled');
});
