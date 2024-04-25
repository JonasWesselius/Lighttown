document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    const nlBtn = document.getElementById("nlBtn");
    const enBtn = document.getElementById("enBtn");

    nlBtn.addEventListener("click", function() {
        nlBtn.classList.add("active");
        enBtn.classList.remove("active");
        // Add logic to change language to Dutch
    });

    enBtn.addEventListener("click", function() {
        enBtn.classList.add("active");
        nlBtn.classList.remove("active");
        // Add logic to change language to English
    });

 
    function setActiveLink(pageId, linkSelector) {
        const pageElement = document.getElementById(pageId);
        if (pageElement) {
            const link = document.querySelector(linkSelector);
            if (link) {
                link.classList.add("active");
            }
        }
    }

    setActiveLink("partners-page", 'a[href="../../partners.html"]');
    setActiveLink("contact-page", 'a[href="../../contact.html"]');
    setActiveLink("about-page", 'a[href="../../about.html"]');
    setActiveLink("services-page", 'a[href="../../services.html"]');
});
