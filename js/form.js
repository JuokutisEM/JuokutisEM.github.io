let formData = {};


function validateForm() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    const phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (10-15 digits).");
        return false;
    }

    if (!address.trim()) {
        alert("Please enter a valid address.");
        return false;
    }

    return true;
}


document.getElementById("submitBtn").addEventListener("click", function () {
    if (!validateForm()) return;

    
    formData.firstName = document.getElementById("first-name").value;
    formData.lastName = document.getElementById("last-name").value;
    formData.email = document.getElementById("email").value;
    formData.phone = document.getElementById("phone").value;

    formData.address = document.getElementById("address").value;

    formData.question1 = parseInt(document.getElementById("question1").value);
    formData.question2 = parseInt(document.getElementById("question2").value);
    formData.question3 = parseInt(document.getElementById("question3").value);
    formData.question4 = parseInt(document.getElementById("question4").value);
    formData.question5 = parseInt(document.getElementById("question5").value);

    const ratings = [formData.question1, formData.question2, formData.question3, formData.question4, formData.question5];
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = total / ratings.length;

    formData.averageRating = averageRating;

    displayResults();
});


function displayResults() {
  
    let resultColor = "";
    if (formData.averageRating <= 3.4) {
        resultColor = "red";
    } else if (formData.averageRating <= 7.1) {
        resultColor = "orange";
    } else {
        resultColor = "green";
    }

 
    const resultContent = `
        <h3>Results:</h3>
        <p>Name: ${formData.firstName} ${formData.lastName}</p>
        <p>Email: ${formData.email}</p>
        <p>Phone: ${formData.phone}</p>
        <p>Address: ${formData.address}</p>
        
        <h4>Rating Questions:</h4>
        <p>1. Satisfaction: ${formData.question1}</p>
        <p>2. Recommendation Likelihood: ${formData.question2}</p>
        <p>3. Navigation Ease: ${formData.question3}</p>
        <p>4. Content Informativeness: ${formData.question4}</p>
        <p>5. Return Likelihood: ${formData.question5}</p>

        <h4>Summary:</h4>
        <p style="color: ${resultColor}; font-weight: bold;">
            Average Rating: ${formData.averageRating.toFixed(2)}
        </p>
        <p>${formData.firstName} ${formData.lastName} (${formData.email}): 
            <span style="color: ${resultColor}; font-weight: bold;">
                ${formData.averageRating.toFixed(2)}
            </span>
        </p>
    `;

    const formSection = document.getElementById("contactForm").parentElement;
    formSection.innerHTML = resultContent;

    console.log(formData);
}
