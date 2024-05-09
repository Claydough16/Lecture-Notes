import EmployeeInfo from "./EmployeeInfo";

function Employee() {

    let employeeRecords = [
        {
            name: "Jester Bash",
            city: "Miami",
            state: "FL",
            position: "Web Dev",
            food: "Pizza"
        },
        {
            name: "Tom Jones",
            city: "Louisville",
            state: "KY",
            position: "Web Dev",
            food: "Pizza"
        },
        {
            name: "Janet James",
            city: "New York City",
            state: "NY",
            position: "Web Dev",
            food: "Pizza"
        },
    ];

    return(
        <>
            <h1>Hello from Employees</h1>
            {
                employeeRecords.map((record, index) => {
                    return(
                        <EmployeeInfo
                            key={index} 
                            name={record.name}
                            city={record.city}
                            state={record.state}
                            food={record.food}
                            position={record.position}
                        />
                    )
                })
            }
        </>
    )
}

export default Employee;