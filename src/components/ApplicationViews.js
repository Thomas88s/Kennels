import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"




export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
           <LocationProvider>
               <Route exact path="/locations">
                  <LocationList />
               </Route>
            </LocationProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>    
            </EmployeeProvider>

        </>
    )
}