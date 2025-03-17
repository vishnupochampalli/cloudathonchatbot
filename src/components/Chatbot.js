// import React, { useEffect } from "react";
// import "./../styles.css";

// const Chatbot = () => {
//   useEffect(() => {
//     const scriptUrl = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    
//     if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
//       const script = document.createElement("script");
//       script.src = scriptUrl;
//       script.async = true;
//       script.onload = () => {
//         if (!document.querySelector("df-messenger")) {
//           const dfMessenger = document.createElement("df-messenger");
//           dfMessenger.setAttribute("location", "us-central1");
//           dfMessenger.setAttribute("project-id", "devassist-453809");
//           dfMessenger.setAttribute("agent-id", "eda05098-bb5d-40e4-b8e2-48564fb73f8b");
//           dfMessenger.setAttribute("language-code", "en");

//           const chatBubble = document.createElement("df-messenger-chat-bubble");
//           chatBubble.setAttribute("chat-title", "DevAssist");

//           dfMessenger.appendChild(chatBubble);
//           document.body.appendChild(dfMessenger);
//         }
//       };
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Chatbot Assistant</h2>
//       <p>Ask your technical queries here.</p>
//     </div>
//   );
// };

// export default Chatbot;


// import React, { useEffect, useState } from "react";

// const Chatbot = () => {
//   const [scriptLoaded, setScriptLoaded] = useState(false);

//   useEffect(() => {
//     const scriptUrl = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";

//     // Check if the script is already present to avoid duplicate loading
//     if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
//       const script = document.createElement("script");
//       script.src = scriptUrl;
//       script.async = true;
//       script.onload = () => setScriptLoaded(true);
//       script.onerror = () => console.error("Failed to load Dialogflow script");
//       document.body.appendChild(script);
//     } else {
//       setScriptLoaded(true); // If script is already loaded, update state
//     }
//   }, []);

//   return (
//     <div>
//       {scriptLoaded ? (
//         <div dangerouslySetInnerHTML={{ __html: `
//           <df-messenger
//             location="us-central1"
//             project-id="ltc-hack-prj-14"
//             agent-id="69ab9700-3e32-4189-a60b-56fc06e366ba"
//             language-code="en"
//             max-query-length="-1"
//           >
//             <df-messenger-chat-bubble chat-title="devAssist"></df-messenger-chat-bubble>
//           </df-messenger>
//         ` }} />
//       ) : (
//         <p>Loading Chatbot...</p>
//       )}

//       <style>
//         {`
//           df-messenger {
//             z-index: 999;
//             position: fixed;
//             --df-messenger-font-color: #000;
//             --df-messenger-font-family: Google Sans;
//             --df-messenger-chat-background: #f3f6fc;
//             --df-messenger-message-user-background: #d3e3fd;
//             --df-messenger-message-bot-background: #fff;
//             bottom: 16px;
//             right: 16px;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Chatbot;




import React, { useEffect, useState } from "react";

const Chatbot = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const scriptUrl = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";

    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      script.onerror = () => console.error("Failed to load Dialogflow script");
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  return (
    <div className="chat-container">
      {/* Incident Raising Section */}
      <div className="incident-section">
  <h2>Need further assistance?</h2>
  <p>If the AI chatbot couldn’t resolve your issue, you can raise an incident using the <strong>GCP Fault Form</strong>.</p>
  <a href="#" className="incident-link">Submit a Fault Report</a>
</div>

      {/* Chatbot */}
      {scriptLoaded ? (
        <div dangerouslySetInnerHTML={{ __html: `
          <df-messenger
            location="us-central1"
            project-id="ltc-hack-prj-14"
            agent-id="69ab9700-3e32-4189-a60b-56fc06e366ba"
            language-code="en"
            max-query-length="-1"
            chat-open
          >
            <df-messenger-chat-bubble chat-title="devAssist"></df-messenger-chat-bubble>
          </df-messenger>
        ` }} />
      ) : (
        <p>Loading Chatbot...</p>
      )}

      <style>
        {`
          df-messenger {
  z-index: 999;
  position: fixed;
  top: 120%;
  left: 80%;
  transform: translate(-50%, -40%); /* Move down a bit */
  width: 400px;
  height: 500px;
  --df-messenger-font-color: #000;
  --df-messenger-font-family: Google Sans;
  --df-messenger-chat-background: #f3f6fc;
  --df-messenger-message-user-background: #d3e3fd;
  --df-messenger-message-bot-background: #fff;
}


          .incident-section a {
            display: inline-block;
            padding: 10px 15px;
            background: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
          }

          .incident-section a:hover {
            background: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
