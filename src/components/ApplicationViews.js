import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/Animal.Detail.js"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { CustomerForm } from "./customers/CustomerForm"
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
                <LocationProvider>
                   <CustomerProvider>
                     <Route exact path="/animals">
                         <AnimalList />
                     </Route>
                     <Route path="/animals/create">
                         <AnimalForm />
                       </Route>
                     <Route exact path="/animals/detail/:animalId(\d+)">
                        <AnimalDetail />
                     </Route>
                   </CustomerProvider>
                </LocationProvider>   
            </AnimalProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <CustomerProvider>
              <AnimalProvider>
                <LocationProvider>
                  <Route exact path="/customers">
                      <CustomerList />
                  </Route>
                  <Route path="/customers/create">
                         <CustomerForm />
                  </Route>
                </LocationProvider>
              </AnimalProvider>  
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