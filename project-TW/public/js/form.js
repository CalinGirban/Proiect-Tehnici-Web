
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    // console log local storage pentru testing 
    console.log(localStorage.getItem('registrationDataCollection'));
    // Get  data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const subscription = document.getElementById('subscription').value;
  
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^07\d{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!nameRegex.test(name)) {
      alert('Numele trebuie să conțină doar litere și spații.');
      return;
    }
  
    if (!phoneRegex.test(phone)) {
      alert('Numărul de telefon trebuie să fie în formatul: 07xxxxxxxx.');
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert('Adresa de email nu este validă.');
      return;
    }
  
    // Save data to a JSON object
    const formData = {
      name,
      email,
      phone,
      age,
      subscription
    };
  
    // Save JSON to local storage
    // Retrieve existing data from local storage
    let existingData = JSON.parse(localStorage.getItem('registrationDataCollection')) || [];

    // Add new form data to the collection
    existingData.push(formData);

    // Save the updated collection back to local storage
    localStorage.setItem('registrationDataCollection', JSON.stringify(existingData));

    alert('Formularul a fost înregistrat cu succes!');
    console.log('Formular salvat:', formData);
    
    // Clear the form
    document.getElementById('registrationForm').reset();
  });
  