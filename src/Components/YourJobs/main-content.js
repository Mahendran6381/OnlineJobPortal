import React from "react";

const MainContent = () => {
  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <h3>User Details</h3>
          <div className="Details">
            <p>
              Name<span> : </span>Mahendrakumar
            </p>
            <p>
              Age<span>:</span>19
            </p>
            <p>
              Degree<span>:</span>BE ECE
            </p>
            <p>
              PhoneNumber<span>:</span>9150660891
            </p>
            <p>
              Email<span>:</span>mahendrakumar
            </p>
          </div>
        </div>
        <div className="right-container">
          <div className="job-container">
            <h3>
              Software Development<span>-</span>FEB-21
            </h3>
            <h4>Pre-Requirities</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              aperiam blanditiis quae rem rerum doloremque inventore distinctio
              quia alias culpa.
            </p>
            <button
              className="btn btn-outline-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalScrollable"
            >
              Apply
            </button>

            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalScrollable"
            >
              Launch demo modal
            </button>

            <div
              class="modal"
              id="exampleModalScrollable"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalScrollableLabel"
              aria-hidden="true"
            >
              <div
                class=" modal-dialog modal-dialog-scrollable"
                role="document"
              >
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenteredLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-bs-dismiss="modal"
                      aria-bs-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job-container">
            <h3>
              Software Development<span>-</span>FEB-21
            </h3>
            <h4>Pre-Requirities</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              aperiam blanditiis quae rem rerum doloremque inventore distinctio
              quia alias culpa.
            </p>
            <button className="btn btn-outline-primary">Apply</button>
          </div>
          <div className="job-container">
            <h3>
              Software Development<span>-</span>FEB-21
            </h3>
            <h4>Pre-Requirities</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              aperiam blanditiis quae rem rerum doloremque inventore distinctio
              quia alias culpa.
            </p>
            <button className="btn btn-outline-primary">Apply</button>
          </div>
          <div className="job-container">
            <h3>
              Software Development<span>-</span>FEB-21
            </h3>
            <h4>Pre-Requirities</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              aperiam blanditiis quae rem rerum doloremque inventore distinctio
              quia alias culpa.
            </p>
            <button className="btn btn-outline-primary">Apply</button>
          </div>
          <div className="job-container">
            <h3>
              Software Development<span>-</span>FEB-21
            </h3>
            <h4>Pre-Requirities</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              aperiam blanditiis quae rem rerum doloremque inventore distinctio
              quia alias culpa.
            </p>
            <button className="btn btn-outline-primary">Apply</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainContent;
