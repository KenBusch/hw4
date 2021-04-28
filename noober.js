window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  //loop through the rider data
  for (let i=0; i < json.length; i++ ){

    //Declare variable for the Rider First Name
    let passengerFirstName = json[i].passengerDetails.first

    //Declare variable for the Rider First Name
    let passengerLastName = json[i].passengerDetails.last

    //Declare variable for the Phone Number
    let passengerphoneNumber = json[i].passengerDetails.phoneNumber

    //Declare variable for pickup street address
    let passengerPickupAdrress = json[i].pickupLocation.address

    //Declare variable for pickup city
    let passengerPickupCity = json[i].pickupLocation.city

    //Declare variable for pickup state
    let passengerPickupState = json[i].pickupLocation.state

    //Declare variable for pickup zip
    let passengerPickupZip = json[i].pickupLocation.zip

    //Declare variable for Dropoff street address
    let passengerDropoffAdrress = json[i].dropoffLocation.address

    //Declare variable for Dropoff city
    let passengerDropoffCity = json[i].dropoffLocation.city

    //Declare variable for Dropoff state
    let passengerDropoffState = json[i].dropoffLocation.state

    //Declare variable for Dropoff zip
    let passengerDropoffZip = json[i].dropoffLocation.zip

    //Declare variabler for Number of Passengers
    let numberPassengers = json[i].numberOfPassengers

    //Declare Variable for level of service using conditional logic
    let serviceLevel

      if (json[i].purpleRequested == true) {
        serviceLevel = `Noober Purple`
      } else if (json[i].numberOfPassengers > 3) {
        serviceLevel = `Noober XL`
      } else {
        serviceLevel = `Noober X`
      }

    //Totally optional if statement to use correct plurality
      let passenger

        if (numberPassengers == 1) {
          passenger = `Passenger`
        } else {
          passenger = `Passengers`
        }

    //Totally optional if statement to make change border color
      let borderColor

        if (json[i].purpleRequested == true) {
          borderColor = `purple`
        } else if (json[i].numberOfPassengers > 3) {
          borderColor = `red`
        } else {
          borderColor = `gray`
        }

  //insert HTML into the page

  let riderAdd = document.querySelector(`.rides`)

    // insert some HTML before the end of the element - </ul>
    riderAdd.insertAdjacentHTML(`beforeend`, `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${serviceLevel}</span>
      </h1>

      <div class="border-4 border-${borderColor}-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerFirstName} ${passengerLastName}</h2>
            <p class="font-bold text-gray-600">${passengerphoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${numberPassengers} ${passenger}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${passengerPickupAdrress}</p>
            <p>${passengerPickupCity}, ${passengerPickupState} ${passengerPickupZip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${passengerDropoffAdrress}</p>
            <p>${passengerDropoffCity}, ${passengerDropoffState} ${passengerDropoffZip}</p>
          </div>
        </div>
      </div>
    `)
  }
})
//   // 🔥 YOUR CODE ENDS HERE 🔥