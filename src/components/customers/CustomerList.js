import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { CustomerContext } from "./CustomerProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../locations/LocationProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)

  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers")
    getCustomers()
    .then(getAnimals)
    .then(getLocations)
  }, [])


  return (
    <div className="customers">
       	      <button onClick={() => {history.push("/customers/create")}}>
            Add Customer
          </button>
      {
        customers.map(customer => {
          const pet = animals.find(a => a.id === customer.animalId)
          const clinic = locations.find(l => l.id === customer.locationId)


          return <CustomerCard key={customer.id}
                      animal={pet}
                      location={clinic}
                      customer={customer} />
        })
      }
    </div>
  )
}