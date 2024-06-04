import React from "react";
import '@/assets/styles/globals.css'

export const metadata = {
    title: "Health AI | Your AI Doctor Companion",
    description: "Health AI is an AI-powered doctor companion that helps you diagnose your symptoms and find the right treatment.",
    keywords: "health, ai, doctor, diagnose, symptoms, treatment",
}

const layout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;
