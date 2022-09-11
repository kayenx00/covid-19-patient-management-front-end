import React, { useState, useEffect } from 'react';
function UpdateHealthDeclaration() {
    return ( 
    <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Update Health Declaration</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Blood Pressure"
                  name="blood_pressure"
                  value={blood_pressure}
                  onChange={e => setBlood_Pressure(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Oxygen Level"
                  name="oxygen_level"
                  value={oxygen_level}
                  onChange={e => setOxygen_Level(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Other Diagnose"
                  name="other_diagnose"
                  value={other_diagnose}
                  onChange={e => setOther_Diagnose(e.target.value)}
                />
              </div>
              <span>              
                <button type = "submit" className="btn btn-primary btn-block">Update</button>
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
              </span>
            </form>
          </div>
        </div>
    </div> );
}

export default UpdateHealthDeclaration;