const patientsOffice = document.querySelector('#office-selection')
const officeLocations = document.querySelectorAll('.locations')

// Destructuring
const [officeInfo1, officeInfo2] = officeLocations

patientsOffice.addEventListener('click', function (event) {
  const usersSelection = event.target.value

  if (usersSelection === 'office-1') {
    // Hide previous info
    officeInfo2.style.display = 'none'
    // Show Costa Mesa office information
    officeInfo1.style.display = 'block'
  } else if (usersSelection === 'office-2') {
    // Hide previous info
    officeInfo1.style.display = 'none'
    // Show Costa Mesa office information
    officeInfo2.style.display = 'block'
  } else {
    officeInfo1.style.display = 'none'
    officeInfo2.style.display = 'none'
  }
})
