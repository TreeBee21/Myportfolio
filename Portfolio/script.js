
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const logo = document.querySelector('.logo');
    const workSection = document.getElementById('work-section');

    // Function to handle menu item clicks
    function handleMenuItemClick(event) {
        // Prevent default behavior of anchor links
        event.preventDefault();
        // Remove the active class from all items
        menuItems.forEach(i => i.classList.remove('active'));
        // Add the active class to the clicked item
        this.classList.add('active');
        // Scroll to the work section if "Work" menu item is clicked
        if (this.getAttribute('href') === '#Work' && workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        } else if (this.getAttribute('href') === '#Home') {
            // Scroll to the top of the page if "Home" menu item is clicked
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Navigate to the href of the clicked item
            window.location.href = this.getAttribute('href');
        }
    }

    // Event listener for menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Handle navigation within the page
            handleMenuItemClick.call(this, event);
        });
        // Check if the current page is About.html and mark the "About" menu item as active
        if (window.location.pathname.includes('About.html') && item.getAttribute('href') === 'About.html') {
            item.classList.add('active');
        }
    });

    // Event listener for the logo
    logo.addEventListener('click', function() {
        // Remove the active class from all items
        menuItems.forEach(i => i.classList.remove('active'));
        // Specifically add the active class to the 'Home' menu item
        const home = document.querySelector('a[href="#Home"]');
        if (home) {
            home.classList.add('active');
        }
        // Scroll to the top of the page when the logo is clicked
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});



//So when you click on the logo you will always return to the home page
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
});



// Function to handle dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const logo = document.querySelector('.logo');
    const workSection = document.getElementById('work-section');

    // Function to handle menu item clicks
    function handleMenuItemClick(event) {
        // Prevent default behavior of anchor links
        event.preventDefault();
        // Remove the active class from all items
        menuItems.forEach(i => i.classList.remove('active'));
        // Add the active class to the clicked item
        this.classList.add('active');
        // Scroll to the work section if "Work" menu item is clicked
        if (this.getAttribute('href') === '#Work' && workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        } else if (this.getAttribute('href') === '#Home') {
            // Scroll to the top of the page if "Home" menu item is clicked
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Navigate to the href of the clicked item
            window.location.href = this.getAttribute('href');
        }
    }

    // Event listener for menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Handle navigation within the page
            handleMenuItemClick.call(this, event);
        });
        // Check if the current page is About.html and mark the "About" menu item as active
        if (window.location.pathname.includes('About.html') && item.getAttribute('href') === 'About.html') {
            item.classList.add('active');
        }
    });

    // Event listener for the logo
    logo.addEventListener('click', function() {
        // Remove the active class from all items
        menuItems.forEach(i => i.classList.remove('active'));
        // Specifically add the active class to the 'Home' menu item
        const home = document.querySelector('a[href="#Home"]');
        if (home) {
            home.classList.add('active');
        }
        // Scroll to the top of the page when the logo is clicked
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});



//So when you click on the logo you will always return to the home page
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
});


//Code so that when the orange button in the hat is clicked, the website changes colors

const darkModeButton = document.getElementById('dark-mode-button');
const body = document.getElementById('body');
const menu = document.getElementById('menu');
const menubutton = document.getElementById('workbutton');
const menuitem = document.getElementById('menuitem');
const menuoption = document.getElementById('menubutton');
const aboutbutton = document.getElementById('aboutbutton');
const darkmodearea = document.getElementById('dm-pd');
const dmlm = document.getElementById('dm-lm');
const dmocc = document.getElementById('dm-occ');
const pdocc = document.getElementById('dm-occ-pd');
const lmocc = document.getElementById('dm-occ-lm');
const contact = document.getElementById('dm-c');
const instagram = document.getElementById('dm-i');
const linkedin = document.getElementById('dm-l');
const email = document.getElementById('dm-e');

darkModeButton.addEventListener('click', () => {
  body.style.backgroundColor = '#141414';
  menu.style.backgroundColor = '#000000';
  menuitem.style.color = '#595959';
  menubutton.style.color = '#595959';
  menuoption.style.color = '#595959';
  aboutbutton.style.color ='#595959';
  document.body.style.color = '#595959';
  darkmodetext.style.color = '#595959';
  dmlm.style.color = '#595959';
  dmocc.style.color = '#595959';
  pdocc.style.color = '#595959';
  lmocc.style.color = '#595959';
  contact.style.color = '#595959';
  instagram.style.color = '#595959';
  linkedin.style.color = '#595959';
  email.style.color = '#595959';
});

function toggleDarkMode() {
    const darkModeText = document.querySelector('.dark-mode-text p');
    const darkModeButton = document.getElementById('dark-mode-button');

    const textElements = document.querySelectorAll('.text-element');
    
    if (darkModeButton.classList.contains('dark-mode')) {
      // Switch to light mode
      body.style.backgroundColor = '#FFFFFF';
      menu.style.backgroundColor = '#FFFFFF';
      textElements.forEach(element => {
          element.style.color = '#000000';
      });
      darkModeButton.classList.remove('dark-mode');
      darkModeText.textContent = 'Press circle for dark mode';
      darkModeText.style.color = '#000000';
    } else {
      // Switch to dark mode
      body.style.backgroundColor = '#141414';
      menu.style.backgroundColor = '#000000';
      textElements.forEach(element => {
          element.style.color = '#595959';
      });
      darkModeButton.classList.add('dark-mode');
      darkModeText.textContent = 'Press circle for light mode';
      darkModeText.style.color = '#FFFFFF';
    }
  }

  
  // Event listener for dark mode button
  darkModeButton.addEventListener('click', toggleDarkMode);
  
  
  // Event listener for dark mode button
  darkModeButton.addEventListener('click', toggleDarkMode);
  

//--------------------------------------------------------------Overlay EDEX-----------------------------------------------------------------------

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

//--------------------------------------------------------------Overlay OCC-----------------------------------------------------------------------

function togglePopup1(){
    document.getElementById("popup-2").classList.toggle("active");
}

//-----------------------------------------under construction------------------------------------------------------------
window.onscroll = function() {stickyCard()};

var card = document.getElementById("fixedCard");

var sticky = card.offsetTop;

function stickyCard() {
  if (window.pageYOffset >= sticky) {
    card.style.position = "fixed";
    card.style.bottom = "20px"; 
    card.style.right = "20px"; 
  } else {
    card.style.position = "relative";
  }
}
