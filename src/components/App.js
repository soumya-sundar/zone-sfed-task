import React from 'react';
import PropTypes from 'prop-types';

const DisplayRecords = ({emp}) => {
  const listItems = emp.map((elem, index) => {
    return (<li key={index.toString()}>
    <label> Employee Id: </label> {elem.EmployeeId} <span>&#44;</span>  &nbsp;
    <label> Name: </label> {elem.Name} <span>&#44;</span> &nbsp;
    <label> ContactNo: </label> {elem.ContactNo} <span>&#44;</span> &nbsp;
    <label> EmailId: </label> {elem.EmailId} <span>&#44;</span> &nbsp;
    <label> Designation: </label> {elem.Designation} <span>&#44;</span> &nbsp;
    <label> Band: </label> {elem.Band} <span>&#44;</span> &nbsp;
    <label> Salary: </label> {elem.Salary}
  </li>)
  });
  return emp.length!==0 ? (<div><br/><ul>{listItems}</ul></div>): <div/>
}

class App extends React.Component {
    static propTypes = {
        initialData: PropTypes.array,
    }

    static defaultProps = {
      initialData: [],
    }

    constructor(props){
        super(props);
        this.state = {
          fromId: null,
          toId: null,
          emp: [],
        }
    }

    onChangeFromId = (evt) => {
      if(evt.target.value !== '' && (evt.target.value < 1 || evt.target.value > 10)) {
        alert("Enter number between 1 to 10");
      } else {
        this.setState({fromId: evt.target.value});
      }
    }

    onChangeToId = (evt) => {
      if(evt.target.value !== '' && (evt.target.value < 1 || evt.target.value > 10 )) {
        alert("Enter number between 1 to 10");
      } else {
        this.setState({toId: evt.target.value});
      }
    }

    onClick = () => {
      if(this.state.fromId !== null && this.state.fromId > this.state.toId) {
        alert("Both the fields should be specified and From Employee Id should be less than To Employee Id");
      }
      const records =  this.props.initialData.filter((elem) => {
        return (this.state.fromId <= elem.EmployeeId && elem.EmployeeId <= this.state.toId);
      });
      let retObj = [];
      records.forEach(record => {
        retObj.push({
          EmployeeId:record.EmployeeId,
          Name:record.Name,
          ContactNo:record.ContactNo,
          EmailId:record.EmailId,
          Designation: record.Salary[0].Designation,
          Band:record.Salary[0].Band,
          Salary:record.Salary[0].Salary,
        });
      });
      this.setState({emp: retObj});
    }

    render = () => {
      //console.log(this.props.initialData);
      return(
      <div> 
        <h3><b> Employee Record </b></h3>
        <h4><b> Search based on Employee Id (between 1 to 10) </b></h4>
        <text><b> Enter Employee Id <input type="number" value={this.state.fromId} onChange={this.onChangeFromId} /> 
        to <input type="number" value={this.state.toId} onChange={this.onChangeToId} /></b></text>
        <button onClick={this.onClick}>Search</button>
        <br />
        <DisplayRecords emp={this.state.emp} />
      </div>
      );
    }
}

export default App;