import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "../locations/LocationProvider"
import { CustomerContext } from "./CustomerProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import "./Customer.css"


export const CustomerForm = () => {
    const { addCustomer } = useContext(CustomerContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { animals, getAnimals } = useContext(AnimalContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [customer, setCustomer] = useState({
      name: "",
      address: "",
      locationId: 0,
      customerId: 0
    });

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */
    useEffect(() => {
      getLocations().then(getAnimals)
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
        // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newCustomer = { ...customer }
      let selectedVal = event.target.value
      // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newCustomer[event.target.id] = selectedVal
      // update state
      setCustomer(newCustomer)
    }

    const handleClickSaveCustomer = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

      const locationId = customer.locationId
      const animalId = customer.animalId

      if (locationId === 0 || animalId === 0) {
        window.alert("Please select a location and a customer")
      } else {
        //invoke addAnimal passing animal as an argument.
        //once complete, change the url and display the animal list
        addCustomer(customer)
        .then(() => history.push("/customers"))
      }
    }

    return (
      <form className="customerForm">
          <h2 className="customerForm__title">New Customer</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Customer name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer name" value={customer.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select defaultValue={customer.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="animalId">Animal: </label>
                  <select defaultValue={customer.animalId} name="animal" id="animalId" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Select a animal</option>
                      {animals.map(a => (
                          <option key={a.id} value={a.id}>
                              {a.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveCustomer}>
            Save Customer
          </button>
      </form>
    )
}