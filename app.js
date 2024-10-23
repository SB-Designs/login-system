// Initialize Supabase Client
const supabaseUrl = 'https://makffzysueuarlenngtl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ha2ZmenlzdWV1YXJsZW5uZ3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MDY5NTUsImV4cCI6MjA0NTI4Mjk1NX0.AVQYi8Mjw7qyzWs5MXZbO_Ie7L5MWcvtc5vy7e0ETYA';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    // Supabase sign up
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        document.getElementById('message').innerText = error.message;
    } else {
        document.getElementById('message').innerText = "Sign up successful!";
    }
});

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Supabase sign in
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        document.getElementById('message').innerText = error.message;
    } else {
        document.getElementById('message').innerText = "Login successful!";
        // Redirect to a dashboard or do something after login
    }
});
