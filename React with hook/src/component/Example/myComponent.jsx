import React from "react";
import AddComponent from "./addComponent.jsx";
import ChildComponent from "./childComponent.jsx";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "1232131", title: "developer", salary: "500" },
      { id: "qwewqe", title: "tester", salary: "1000" },
      { id: "7767878", title: "QC", salary: "2000" },
    ],
  };
  addNewJob = (job) => {
    console.log(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteAJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
