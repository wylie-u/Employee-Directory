on page load, function maps out employees one by one
need to filter table by one category 
each employee should have own row in table 

for design 
- should make a component for each piece
    - jumbotron
    - search

    - table
        - put layout into one component
    - row 

    useState

    useEffect
        - 


        input box (search field)

        filter 
        then 
        sort 
        

        once you're in return, everything needs to be wrapped into div or react fragment


userList
- table data layout (done)

AllUsers

 handleChange = (e) => {
    this.setState({
      poetFilter: e.target.value
    })
    this.props.onChange(event.target.value)
  }

 filterEmployees = (employeeFilter) => {
        let filteredEmps = this.state.poets
        filteredEmps = filteredEmps.filter((employee) => {
          let employeeName = employee.firstName.toLowerCase() + employee.lastName.toLowerCase()
          return employeeName.indexOf(
            employeeFilter.toLowerCase()) !== -1
        })
        this.setState({
          filteredEmps
        })
    
     
     }

     SortEmployees = (props) => {
        const { users } = props;
        let SortedEmployees = [...users];
        SortedEmployees.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });

    }


     