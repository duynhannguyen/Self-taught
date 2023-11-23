import React from "react";
import "./childComponent.scss";
class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };

  handleShowhide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };
  handleOnClickDelete = (job) => {
    this.props.deleteAJob(job);
  };
  render() {
    const { arrJobs, deleteAJob } = this.props;
    const { showJob } = this.state;
    return (
      <>
        {showJob ? (
          <>
            <div className="job-lists">
              {arrJobs.map((job, index) => {
                return (
                  <div id={job.id} key={job.id}>
                    {job.title} - {job.salary}{" "}
                    <span
                      className="delete-button"
                      onClick={() => this.handleOnClickDelete(job)}
                    >
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <button className="btn-hide" onClick={() => this.handleShowhide()}>
              hide
            </button>{" "}
          </>
        ) : (
          <button className="btn-show" onClick={() => this.handleShowhide()}>
            show
          </button>
        )}
      </>
    );
  }
}

export default ChildComponent;
