import React from "react"
 import "./Employee.css"
 
 export const EmployeeCard = ({ employee }) => (
     <section className="employee">
         <h3 className="employee__name">{employee.name}</h3>
         <div className="employee__address">{employee.jobtitle}</div>
         <address className="employee__location">{employee.location.name}</address>
     </section>
 )
 