document.addEventListener("DOMContentLoaded", function () {
    // Get all the section elements
    const sections = document.querySelectorAll("section");

    // Function to update the active link based on scroll position
    function updateActiveLink() {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50; // Adjust as needed
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const id = section.id;
                const activeLink = document.querySelector(`nav a[href="#${id}"]`);

                // Remove active class from all links
                document.querySelectorAll("nav a").forEach((link) => {
                    link.classList.remove("active");
                });

                // Add active class to the current link
                activeLink.classList.add("active");
            }
        });
    }

    // Add event listener for scroll events
    window.addEventListener("scroll", updateActiveLink);

    // Initial update on page load
    updateActiveLink();
});
// /////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    var typed = new Typed('#typed', {
      strings: ['Designer', 'Developer', 'Freelancer' ,'Photographer'], // Words to type
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 50, // Deleting speed in milliseconds
      loop: true, // Loop infinitely
      loopCount: Infinity, // Number of loops (here, set to infinite)
      showCursor: true, // Show blinking cursor
      cursorChar: '|', // Custom cursor character
      startDelay: 0, // Time before typing starts
      backDelay: 1500, // Time before deleting starts
      smartBackspace: true, // Faster deleting by only backspacing what doesn't match the previous string
    });
  });
// ///////////////////////////////////////////////////////////////////////
const targetNumber1 = 450;
const targetNumber2 = 25;
const targetNumber3 = 550;
const targetNumber4 = 48;


const counterElement1 = document.getElementById('counter1');
const counterElement2 = document.getElementById('counter2');
const counterElement3 = document.getElementById('counter3');
const counterElement4 = document.getElementById('counter4');

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

function updateCount1() {
  if (count1 <= targetNumber1) {
    counterElement1.textContent = `${count1}`;
    count1++;
    setTimeout(updateCount1, 5);
  }
}

function updateCount2() {
  if (count2 <= targetNumber2) {
    counterElement2.textContent = `${count2}`;
    count2++;
    setTimeout(updateCount2, 60); // Adjust timing for the second counter
  }
}
function updateCount3() {
  if (count3 <= targetNumber3) {
    counterElement3.textContent = `${count3}`;
    count3++;
    setTimeout(updateCount3, 4); // Adjust timing for the second counter
  }
}
function updateCount4() {
  if (count4 <= targetNumber4) {
    counterElement4.textContent = `${count4}`;
    count4++;
    setTimeout(updateCount4, 50); // Adjust timing for the second counter
  }
}

updateCount1();
updateCount2();
updateCount3();
updateCount4();



  