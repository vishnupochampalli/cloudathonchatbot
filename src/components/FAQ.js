import React from "react";
import "./../styles.css";

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li><a href="#">How to create a Kubernetes Cluster?</a></li>
        <li><a href="#">Jenkins Pipeline Troubleshooting</a></li>
        <li><a href="#">GKE Deployment Guide</a></li>
        <li><a href="#">Networking Issues in GCP</a></li>
      </ul>
    </div>
  );
};

export default FAQ;
