
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the HTML page when component mounts
    window.location.href = "/index.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirección a portafolio...</p>
    </div>
  );
};

export default Index;
