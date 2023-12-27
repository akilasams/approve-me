import { useState } from "react";
import { LocalEntites } from "../../data/LocalEntities";
import { Roles } from "../../data/Roles";

const SignUp = () => {
  return (
    <div className="login-page-container">
      <div className="content-container">
        <div className="login-wrapper">
          <div className="aiesec-human">Fill in Your Details</div>
          <form action="" onSubmit={() => {}}>
            <div className="form-control">
              <select name="entity" id="entity">
                <option>Select your entity</option>
                {LocalEntites.map((entity) => (
                  <option value={entity.short}>{entity.name}</option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <select name="role" id="role">
                <option>Select your role</option>
                {Roles.map((role) => (
                  <option value={role.short}>{role.name}</option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <button type="submit" className="btn-blue">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
