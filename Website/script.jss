function fetchData() {
    fetch('https://tvpo4j4evf.execute-api.us-west-2.amazonaws.com/Prod/put')
        .then(() => fetch('https://tvpo4j4evf.execute-api.us-west-2.amazonaws.com/Prod/get'))
        .then(response => response.json())
        .then((data) => {
            document.getElementById('visitor-count').innerText = data.count;
            console.log(data)
        })
        .catch(error => {
            console.error('Error getting data:', error);
            document.getElementById('replaceme').innerText = 'Error loading data';
        });
}


document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav a");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            links.forEach(function(link) {
                link.classList.remove("active");
            });

            link.classList.add("active");

            if (link.classList.contains("active")) {
                var targetId = link.getAttribute("href").substring(1);
                var targetElement = document.getElementById(targetId);
                
                const offset = 85;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetElement.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

window.onload = function() {
    window.onscroll = function() {stickyNavbar()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function stickyNavbar() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
}
