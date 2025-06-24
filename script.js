document.getElementById("menuBtn").addEventListener("click", function () {
    alert("Menu button clicked!");
});

document.getElementById("loginBtn").addEventListener("click", function () {
    alert("Redirecting to login page...");
    window.location.href = "login.html"; 
});

document.getElementById("search").addEventListener("input", function () {
    console.log("Searching for:", this.value);
});


  document.querySelector("form").addEventListener("submit", function(e) {
    const password = document.querySelector('input[placeholder="Password"]').value;
    const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      e.preventDefault(); // form submit थांबवा
    }
  });
