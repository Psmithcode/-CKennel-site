import React from "react";
import CreatePuppy from "./createPuppy";

export default function Admin() {
  return (
    <main className="admin-container">
      <div className="admin-container">
        <h1 className="admin-title">Admin Center</h1>
        <CreatePuppy className="create-puppy-form"/>
      </div>
    </main>
  );
}
