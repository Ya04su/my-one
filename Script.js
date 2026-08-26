
function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function searchProducts() {

    const searchValue =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const productName =
            product
                .querySelector("h3")
                .textContent
                .toLowerCase();

        const productDescription =
            product
                .querySelector("p")
                .textContent
                .toLowerCase();

        if (
            productName.includes(searchValue) ||
            productDescription.includes(searchValue)
        ) {

            product.classList.remove("hidden");

            if (searchValue !== "") {
                product.classList.add("highlight");
            } else {
                product.classList.remove("highlight");
            }

        } else {

            product.classList.add("hidden");
            product.classList.remove("highlight");
        }

    });
}



document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchProducts();
        }

    });



let cart = [];


function addToCart(productName) {

    cart.push(productName);

    alert(
        productName +
        " has been added to your cart.\n\n" +
        "Cart items: " +
        cart.length
    );
}



document
    .getElementById("reviewForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document
                .getElementById("reviewName")
                .value
                .trim();

        const reviewText =
            document
                .getElementById("reviewText")
                .value
                .trim();


        if (!name || !reviewText) {

            alert("Please fill in all review fields.");

            return;
        }


        const reviewList =
            document.getElementById("reviewList");


        const newReview =
            document.createElement("div");

        newReview.className = "review";


        newReview.innerHTML = `
            <h3>${escapeHTML(name)}</h3>

            <div class="stars">
                ★★★★★
            </div>

            <p>${escapeHTML(reviewText)}</p>
        `;


        reviewList.appendChild(newReview);


        document
            .getElementById("reviewForm")
            .reset();


        alert("Thank you for your review!");
    });



document
    .getElementById("orderForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();

        const phone =
            document
                .getElementById("phone")
                .value
                .trim();

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const product =
            document
                .getElementById("product")
                .value;


        if (
            name === "" ||
            phone === "" ||
            email === "" ||
            product === ""
        ) {

            alert(
                "Please complete all required order fields."
            );

            return;
        }


        alert(
            "Order submitted successfully!\n\n" +
            "Customer: " + name + "\n" +
            "Product: " + product
        );


        document
            .getElementById("orderForm")
            .reset();

    });



document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim();

        const password =
            document
                .getElementById("loginPassword")
                .value;


        if (email === "" || password === "") {

            alert("Please enter your email and password.");

            return;
        }


        alert(
            "Login successful!\n\n" +
            "Welcome!"
        );


        document
            .getElementById("loginForm")
            .reset();

    });



function showAddress() {

    alert(
        "Dessert World\n\n" +
        "Shop Number: 6825742118\n" +
        "Main Street\n" +
        "New York"
    );
}


function escapeHTML(value) {

    const div = document.createElement("div");

    div.textContent = value;

    return div.innerHTML;
}