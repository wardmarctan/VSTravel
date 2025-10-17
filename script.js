document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
  
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
  });

    function validateAll() {
    const fullname = document.getElementById("fullname").value.trim();
    const number = document.getElementById("number").value.trim();
    const totalparticipant = document.getElementById("totalparticipant").value.trim();
    const departuredate = document.getElementById("departuredate").value.trim();
    const returndate = document.getElementById("returndate").value.trim();
    const todaydate = new Date();
    todaydate.setHours(0, 0, 0, 0);
 
    if (fullname === "" || number === "" || totalparticipant === "" || departuredate === "" || returndate === "") {
        alert("All fields must be filled!");
        return;
    }

    if (/\d/.test(fullname)) {
        alert("Invalid name format!");
        return;
    }

    if (!number.startsWith("0")) {
        alert("Phone number must start with 0");
        return;
    }

    if (totalparticipant<1) {
        alert("Total participants cannot be less than 1!");
        return;
    }

    const departure = new Date(departuredate);
    const returnd = new Date(returndate);
    departure.setHours(0, 0, 0, 0);
    returnd.setHours(0, 0, 0, 0);

    if (departure < todaydate) {
        alert("Departure date cannot be set in the past!");
        return;
    }

    if (returnd < todaydate) {
        alert("Return date cannot be set in the past!");
        return;
    }

    if (departure > returnd) {
        alert("Return date cannot be earlier than departure date!!");
        return;
    }

    window.location.href = "../html/home.html";
}