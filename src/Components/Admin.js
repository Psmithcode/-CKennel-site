import React from "react";
import CreatePuppy from "./createPuppy";
import "./Admin.css";
import CreateUpdate from "./createUpdate";

export default function Admin() {
  return (
    <main className="admin-container">
      <h1 className="admin-title">ADMIN CENTER</h1>
      <div className="admin-form-container">
        <CreatePuppy className="create-puppy-form" />
        <CreateUpdate />
      </div>
    </main>
  );
}
