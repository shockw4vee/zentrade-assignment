function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      alert('Invalid email format');
      return;
    }
  
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])(?=.*[a-zA-Z\d]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Invalid password format. Password must contain an uppercase letter, a number, and can include the @ symbol.');
      return;
    }
  
    if (password === 'SmartServTest@123') {
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password');
    }
  
    alert('Login successful!');
  }
  
  function forgotPassword() {
    window.location.href = 'mailto:support@smartserv.io?subject=Password%20Reset&body=Please%20reset%20my%20password';
  }
  
