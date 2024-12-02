let formData = {};


document.getElementById("submitBtn").addEventListener("click", function () {

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
        <p>Average Rating: ${formData.averageRating.toFixed(2)}</p>
        <p>${formData.firstName} ${formData.lastName} (${formData.email}): ${formData.averageRating.toFixed(2)}</p>
    `;

    const formSection = document.getElementById("contactForm").parentElement;
    formSection.innerHTML = resultContent;

    console.log(formData);
}
