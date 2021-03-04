import React from "react";
import "../styles/colors.css"
import { IoIosArrowRoundForward } from "react-icons/io";

export default function LastIssues() {
  return (
    <div className="card border rounded shadow mb-3">
      <div className="card-header">Last Issues</div>

      <div className="card-body">
        <div className="d-inline-flex">
          <h6 className="p-1 text-monospace my-auto">27.02.2021 15:30</h6>
          <IoIosArrowRoundForward className="my-auto mx-0" size="2em" />
          <h6 className="text-danger p-1 my-auto">FLR-TURKEY PROD1</h6>
          <IoIosArrowRoundForward className="my-auto" size="2em" />
          <h6 className="p-1 my-auto">JOB1</h6>
        </div>
        <div className="d-inline-flex">
          <h6 className="p-1 text-monospace my-auto">27.02.2021 15:30</h6>
          <IoIosArrowRoundForward className="my-auto mx-0" size="2em" />
          <h6 className="text-orange p-1 my-auto">CVQS-TURKEY PROD1</h6>
          <IoIosArrowRoundForward className="my-auto" size="2em" />
          <h6 className="p-1 my-auto">JOB1</h6>
        </div>
        <div className="d-inline-flex">
          <h6 className="p-1 text-monospace my-auto">27.02.2021 15:30</h6>
          <IoIosArrowRoundForward className="my-auto mx-0" size="2em" />
          <h6 className="text-yellow p-1 my-auto">CTS-TURKEY PROD1</h6>
          <IoIosArrowRoundForward className="my-auto" size="2em" />
          <h6 className="p-1 my-auto">JOB1</h6>
        </div>
      </div>
    </div>
  );
}
