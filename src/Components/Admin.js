import React from "react";
import CreatePuppy from "./createPuppy";
import "./Admin.css"

export default function Admin() {
  return (
    <main className="admin-container">
      <h1 className="admin-title">Admin Center</h1>
      <CreatePuppy className="create-puppy-form" />
    </main>
  );
}
