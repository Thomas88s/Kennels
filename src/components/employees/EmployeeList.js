
import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
    const {employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmplyees")
        getEmployees()

    }, [])

    return (
        <div className="employees">
            {console.log("EmployeeList: Render", employees)}
            {
                employees.map(employee => {
                  return <EmployeeCard key={employee.id} employee={employee} />
                })
            }
        </div>
    )
}