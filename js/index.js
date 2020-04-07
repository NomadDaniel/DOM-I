const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// --------------------
// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"])
// --------Note to self - reminder that I changed the "let" to "const" for the logo. Why was "let" used?----------//


// **********MY CODE BELOW******************

// My first step ==> get the other 2 images working
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
// -----------------------------------------------------

// Now, follow the HTML from top to bottom
// Nav.........
const navbar = document.querySelectorAll('nav a')
const navContents = Object.values(siteContent.nav)
function navLoop() {
  for (let i = 0; i < navbar.length; i++) {
    navbar[i].textContent = navContents[i];
    navbar[i].style.color = 'purple';
    navbar[i].style.fontWeight = 'bold';
    navbar[i].style.fontSize = '1.5rem';
  }
}
navLoop();

// const navItems = document.querySelectorAll('nav a');
// navItems[0].textContent = siteContent['nav']['nav-item-1'] 
// navItems[1].textContent = siteContent['nav']['nav-item-2'] 
// navItems[2].textContent = siteContent['nav']['nav-item-3'] 
// navItems[3].textContent = siteContent['nav']['nav-item-4'] 
// navItems[4].textContent = siteContent['nav']['nav-item-5'] 
// navItems[5].textContent = siteContent['nav']['nav-item-6'] 
// // -------------------------------------------------------



// cta w button...
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent['cta']['h1']
ctaH1.style.color = 'green';//easy stretch goal style change

const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent['cta']['button']
// -------------------------------------------------------

// Added events to study for tomorrow
ctaButton.addEventListener('click', (event) => {
  alert('You Clicked the Get Started Button...you must be awesome!')
})

ctaButton.addEventListener('focus', (event) => {
  event.target.style.background = 'darkorange';    
}, true);

ctaButton.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);
// --------------------------------------------------------

// main and bottom-content h4's handled together...
const contentH4s = document.querySelectorAll('.text-content h4');
contentH4s[0].textContent = siteContent['main-content']['features-h4']
contentH4s[1].textContent = siteContent['main-content']['about-h4']
contentH4s[2].textContent = siteContent['main-content']['services-h4']
contentH4s[3].textContent = siteContent['main-content']['product-h4']
contentH4s[4].textContent = siteContent['main-content']['vision-h4']

// main and bottom-content p's handled together...

const contentPs = document.querySelectorAll('.text-content p')
contentPs[0].textContent = siteContent['main-content']['features-content']
contentPs[1].textContent = siteContent['main-content']['about-content']
contentPs[2].textContent = siteContent['main-content']['services-content']
contentPs[3].textContent = siteContent['main-content']['product-content']
contentPs[4].textContent = siteContent['main-content']['vision-content']
//---------------------------------------------------------

//contact h4...
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4']

// contact ps...
const contactPs = document.querySelectorAll('.contact p');
contactPs[0].textContent = siteContent['contact']['address']
contactPs[1].textContent = siteContent['contact']['phone']
contactPs[2].textContent = siteContent['contact']['email']
// ---------------------------------------------------------


// footer p
const footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright']
// --------------------------------------------------------




