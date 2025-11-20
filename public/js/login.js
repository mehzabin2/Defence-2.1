document.addEventListener('DOMContentLoaded', function() {
    // For index.html LOGIN button
    const homeLoginBtn = document.querySelector('#login-btn');
      const LoginBtn = document.querySelector('#loginbtn');
      const registeruser=document.querySelector('#registerBtn');
    if(homeLoginBtn){
        homeLoginBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
      LoginBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
      })
      registeruser.addEventListener('click',function(){
        window.location.href='register_user.html';
      })
})