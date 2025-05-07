/* global botpress */
import React, { useEffect } from 'react';
import './BotpressChat.css';

const BotpressChat = () => {
  useEffect(() => {
    const initializeBotpress = () => {
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
        "clientId": "874614f1-4c26-4bb9-b1ec-ca66e114fcd4",
        "override": {
          "webchat": {
            "container": "#botpress-webchat"
          }
        }
      });
    };

    if (window.botpress) {
      initializeBotpress();
    } else {
      const checkInterval = setInterval(() => {
        if (window.botpress) {
          initializeBotpress();
          clearInterval(checkInterval);
        }
      }, 100);
    }
  }, []);

  return (
    <div id="botpress-webchat" className="botpress-container">
      {/* Botpress chat will be injected here */}
    </div>
  );
};

export default BotpressChat;