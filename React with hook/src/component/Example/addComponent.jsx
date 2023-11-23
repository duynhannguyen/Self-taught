import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeTitleJob = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Mising required params");
      return;
    }
    console.log("check submit", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor="fname">Job Title:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={this.state.title}
          onChange={(e) => this.handleChangeTitleJob(e)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={this.state.salary}
          onChange={(e) => this.handleChangeSalary(e)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default AddComponent;
