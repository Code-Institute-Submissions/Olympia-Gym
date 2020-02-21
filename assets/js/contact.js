function sendMail(contactForm) {
    emailjs.send("gmail", "martin", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "gym_enquiry": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}

function clearForm(contactForm) {
    contactForm.name.value = ''
    contactForm.email.value = ''
    contactForm.message.value = ''
    }