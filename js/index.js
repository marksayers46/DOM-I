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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//images
let codeSnippet = document.getElementById('cta-img');codeSnippet.setAttribute('src', siteContent['cta']['img-src'] );

let screenCode = document.getElementById('middle-img');screenCode.setAttribute('src', siteContent['main-content']['middle-img-src']);

//navigation
document.querySelectorAll('nav a')[0].textContent = siteContent['nav']['nav-item-1'];
document.querySelectorAll('nav a')[1].textContent = siteContent
['nav']['nav-item-2'];
document.querySelectorAll('nav a')[2].textContent = siteContent
['nav']['nav-item-3'];
document.querySelectorAll('nav a')[3].textContent = siteContent
['nav']['nav-item-4'];
document.querySelectorAll('nav a')[4].textContent = siteContent
['nav']['nav-item-5'];
document.querySelectorAll('nav a')[5].textContent = siteContent
['nav']['nav-item-6'];

//add two items 
//append
let node1 = document.createElement('a');                 
let textnode1 = document.createTextNode('Staff');         
node1.appendChild(textnode1);                              
document.querySelector('nav').appendChild(node1); 

//prepend
let node2 = document.createElement("a");
let textnode2 = document.createTextNode("Jobs");         
node1.appendChild(textnode2);                              
document.querySelector("nav").prepend(node2);   

//change nav color to green
const clrText = document.querySelectorAll('nav a');
clrText.forEach(item => item.style.color = 'green');

//cta section
document.querySelector('.cta-text h1').textContent = siteContent['cta']['h1'];
document.querySelector('.cta-text button').textContent = siteContent['cta']['button'];

//main content section
let textCont = document.querySelectorAll('.text-content');
textCont[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
textCont[0].querySelector('p').textContent = siteContent['main-content']['features-content'];
textCont[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
textCont[1].querySelector('p').textContent = siteContent['main-content']['about-content'];
textCont[2].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
textCont[2].querySelector('p').textContent = siteContent['main-content']['services-content'];
textCont[3].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
textCont[3].querySelector('p').textContent = siteContent['main-content']['product-content'];
textCont[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
textCont[4].querySelector('p').textContent = siteContent['main-content']['vision-content'];

//contact section
document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
document.querySelectorAll('.contact p')[0].textContent = siteContent['contact']['address'];
document.querySelectorAll('.contact p')[1].textContent = siteContent['contact']['phone'];
document.querySelectorAll('.contact p')[2].textContent = siteContent['contact']['email'];

//footer
document.querySelector('footer p').textContent = siteContent['footer']['copyright'];