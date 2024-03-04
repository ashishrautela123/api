const cityContainer = document.getElementById('cityContainer');

fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data); // Log the data to see if it's retrieved successfully
    data.forEach(city => {
      console.log('City:', city); // Log each city to check its structure
      const cityDiv = document.createElement('div');
      cityDiv.classList.add('city');

      const cityName = document.createElement('h2');
      cityName.textContent = city.name;

      const cityDetails = document.createElement('p');
      cityDetails.innerHTML = `<strong>State:</strong> ${city.state}<br>
                               <strong>Population:</strong> ${city.population}<br>
                               <strong>Area:</strong> ${city.area} sq km`;

      cityDiv.appendChild(cityName);
      cityDiv.appendChild(cityDetails);

      cityContainer.appendChild(cityDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Error fetching data. Please try again later.';
    cityContainer.appendChild(errorDiv);
  });
