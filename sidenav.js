// function openNav() {
//     document.getElementById("mySidenav").style.width = "290px";
//     document.getElementById("main").style.marginLeft = "290px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//   }

// Sidenav Open Function 
  function openCloseNav() {
    console.log(document.getElementById("mySidenav").style.width)
    if (document.getElementById("mySidenav").style.width == '0px') {
        document.getElementById("mySidenav").style.width = "290px";
        document.getElementById("main").style.marginLeft = "290px";
    } else {
       document.getElementById("mySidenav").style.width = '0px'
       document.getElementById("main").style.marginLeft = "0px";
    }
}

/* Dropdown Function */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


