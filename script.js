// Variables for <aside>
const patientsOffice = document.querySelector('#office-selection')
const officeLocations = document.querySelectorAll('.locations')
const [officeInfo1, officeInfo2] = officeLocations

// Variables for #records-box
const recordsBox = document.querySelector('#records-box')
const personalIcon = document.querySelector('#personal-icon')
const allergiesIcon = document.querySelector('#allergies-icon')
const shotsIcon = document.querySelector('#shots-icon')
const medicationsIcon = document.querySelector('#medications-icon')

// Event listener for <aside>
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

// Event listener for #records-box
recordsBox.addEventListener('click', function (event) {
  const target = event.target
  // Runs if a child element is clicked
  if (target.tagName != 'FIGURE') {
    const parent = target.parentElement
    const iconElement = parent.children[0]
    // Modify the icon class
    iconElement.className = 'checkmark'
  }
  // Runs if figure element it clicked
  else if (target.tagName === 'FIGURE') {
    target.children[0].className = 'checkmark'
  }
})

// TODO: Refactor by attaching a pseudo ::before to all <figures>
//       Apply #ids to <figures> Calling them: 
//       personal, allergies, shots, and medications respectively 
