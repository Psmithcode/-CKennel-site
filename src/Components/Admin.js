import React from "react";
import CreatePuppy from "./createPuppy";
import "../styles/Admin.css";
import CreateUpdate from "./createUpdate";
import UpdatePuppy from "./updatePuppy";
import DeletePuppy from "./deletePuppy";

export default function Admin() {
  return (
    <main className="admin-container">
      <h1 className="admin-title">ADMIN CENTER</h1>
      <div className="admin-form-container">
        <CreatePuppy className="create-puppy-form" />
        <UpdatePuppy />
        <DeletePuppy />
        <CreateUpdate />
      </div>
    </main>
  );
}
