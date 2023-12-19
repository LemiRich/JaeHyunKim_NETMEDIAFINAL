document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Check the password
    var enteredPassword = document.getElementById("passwordInput").value;
    var correctPassword = "1997.08.24"; 
    
    if (enteredPassword === correctPassword) {

      setTimeout(function() {
        var picB = document.getElementById('picB');
        picB.style.opacity = '0'; // 투명도 조절하기

        setTimeout(function(){ 
          window.location.href = "REAL_Main_Page.html";
        }, 2000);
      }, 0);

    } else {

      alert("This is incorrect password🤔 \n I will give you another chance, try again🔥");
      document.getElementById("passwordInput").value = "";

    }
    
  });
  