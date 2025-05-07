import React from 'react';
import './BotpressChat.css'; // Import your CSS file

const BotpressChat = () => {
  return (
    <div className="botpress-container">
      <iframe
        style={{ height: '100%', width: '100%', border: 'none' }}
        srcDoc={`
          <!doctype html>
          <html lang="en">
            <head></head>
            <body>
              <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
              <script defer>
                window.botpress.on("webchat:ready", (conversationId) => {
                  botpress.open();
                });
                window.botpress.init({
                  "botId": "65fe3a80-73d9-4a3b-814d-8602d9f7368f",
                  "configuration": {
                    "botName": "Larry Personal Assistant",
                    "botDescription": "Letting you know about him",
                    "website": {},
                    "email": {},
                    "phone": {},
                    "termsOfService": {},
                    "privacyPolicy": {},
                    "color": "#3B82F6",
                    "variant": "solid",
                    "themeMode": "light",
                    "fontFamily": "inter",
                    "radius": 1
                  },
                  "clientId": "874614f1-4c26-4bb9-b1ec-ca66e114fcd4"
                });
              </script>
            </body>
          </html>
        `}
      ></iframe>
    </div>
  );
};

export default BotpressChat;