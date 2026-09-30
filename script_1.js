/* =========================================
   ROYAL FAMILY RESTAURANT
   JAVASCRIPT
========================================= */


/* ================================
   MOBILE MENU
================================ */

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    if (nav) {
        nav.classList.toggle("show");
    }

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        const nav = document.querySelector(".nav-links");

        if (nav) {
            nav.classList.remove("show");
        }

    });

});


/* ================================
   MENU FILTER
================================ */

const filterButtons = document.querySelectorAll(".filter");

const dishes = document.querySelectorAll(".dish");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        /* Remove active class */

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        /* Add active class to clicked button */

        button.classList.add("active");


        const category = button.getAttribute("data-cat");


        /* Show / hide dishes */

        dishes.forEach(function(dish) {

            const dishCategory = dish.getAttribute("data-cat");


            if (category === "all" || category === dishCategory) {

                dish.style.display = "flex";

            } else {

                dish.style.display = "none";

            }

        });

    });

});


/* ================================
   RESERVATION FORM
================================ */

const reservationForms =
    document.querySelectorAll(".reservation-form");


reservationForms.forEach(function(form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            form.querySelector('[name="name"]')?.value || "Guest";


        alert(
            "Thank you, " +
            name +
            "!\n\nYour reservation request has been received.\n\nOur team will contact you shortly to confirm your table."
        );


        form.reset();

    });

});


/* ================================
   CONTACT FORM FALLBACK
================================ */

const allForms = document.querySelectorAll("form");


allForms.forEach(function(form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();


        const successMessage =
            form.querySelector(".form-success");


        if (successMessage) {

            successMessage.style.display = "block";

        } else {

            alert(
                "Thank you! Your request has been received."
            );

        }


        form.reset();

    });

});


/* ================================
   GALLERY LIGHTBOX
================================ */

const galleryImages =
    document.querySelectorAll(".gallery img");


galleryImages.forEach(function(image) {

    image.style.cursor = "pointer";


    image.addEventListener("click", function() {

        const overlay =
            document.createElement("div");


        overlay.className = "image-lightbox";


        overlay.innerHTML = `
            <div class="lightbox-close">×</div>

            <img src="${image.src}" alt="${image.alt}">
        `;


        document.body.appendChild(overlay);


        /* Close button */

        overlay
            .querySelector(".lightbox-close")
            .addEventListener("click", function() {

                overlay.remove();

            });


        /* Close by clicking outside image */

        overlay.addEventListener("click", function(event) {

            if (event.target === overlay) {

                overlay.remove();

            }

        });


        /* ESC key */

        document.addEventListener("keydown", function escHandler(event) {

            if (event.key === "Escape") {

                overlay.remove();

                document.removeEventListener(
                    "keydown",
                    escHandler
                );

            }

        });

    });

});


/* ================================
   CURRENT YEAR
================================ */

const yearElements =
    document.querySelectorAll(".current-year");


yearElements.forEach(function(element) {

    element.textContent =
        new Date().getFullYear();

});