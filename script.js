// Variables for <aside>
const patientsOffice = document.querySelector('#office-selection')
const officeLocations = document.querySelectorAll('.locations')
const [officeInfo1, officeInfo2] = officeLocations

// Variables for #records-box
const recordsBox = document.querySelector('#records-box')

// Event listener for <aside>
patientsOffice.addEventListener('click', function (event) {
  const usersSelection = event.target.value

  if (usersSelection === 'office-1') {
    // Hide previous info
    officeInfo2.style.display = 'none'
    // Show office information
    officeInfo1.style.display = 'block'
  } else if (usersSelection === 'office-2') {
    // Hide previous info
    officeInfo1.style.display = 'none'
    // Show office information
    officeInfo2.style.display = 'block'
  } else {
    officeInfo1.style.display = "none" 
    officeInfo2.style.display = "none" 
  }
})

// Event listener for #records-box
recordsBox.addEventListener('click', function (event) {
  const target = event.target;
  if (target.tagName === 'FIGURE') {
   const icon = document.querySelector(`#${target.id}-icon`) 
   icon.className = "checkmark"
  }
})
