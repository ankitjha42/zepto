$(".owl-theme").owlCarousel({
  items: 3, // Display 3 items at a time
  loop: true,
  nav: false,
  dots: false,
  margin:300,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".third_section.footer_section");
sr.reveal(".footer_section, .flip_flop, .small_sec, .owl-theme, .card_attach", {
  delay: 700,
  origin: "bottom",
});
sr.reveal(
  ".logos__img, .head_flop, .small_head, .section_head, .pure_section",
  {
    interval: 100,
  }
);

// another
$(".first-carausel").owlCarousel({
  items: 7,
  loop: true,
  nav: false,
  dots: false,
  margin: 10, // Adjust the margin if needed
  stagePadding: 90, // Adjust the stagePadding to minimize gaps
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 20, // Adjust the stagePadding for smaller screens
    },
    600: {
      items: 2,
      stagePadding: 30,
    },
    1000: {
      items: 7,
      stagePadding: 40,
    },
  },
});

const srfirst = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

srfirst.reveal(".third_section.footer_section");
srfirst.reveal(".footer_section, .flip_flop, .small_sec, .owl-theme, .card_attach", {
  delay: 700,
  origin: "bottom",
});
srfirst.reveal(
  ".logos__img, .head_flop, .small_head, .section_head, .pure_section",
  {
    interval: 100,
  }
);


// popup
const loginLink = document.getElementById("login");
const overlay = document.getElementById("overlay");
const loginPopup = document.getElementById("loginPopup");

loginLink.addEventListener("click", () => {
    overlay.style.display = "block";
    loginPopup.style.display = "block";
});

function closePopup() {
    overlay.style.display = "none";
    loginPopup.style.display = "none";
}

function authenticateUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Implement your authentication logic here
    // For simplicity, let's just show an alert for now
    alert(`Attempting to log in with Username: ${username} and Password: ${password}`);
    
    // Close the popup after authentication (replace this with your actual logic)
    closePopup();
}


  let count = 0;
  const counterButton = document.getElementById('amlbtn');
 

  counterButton.addEventListener('click', () => {
    count++;
    counterButton.textContent = `+ ${count}`;
  });
</script>

</body>
</html>
