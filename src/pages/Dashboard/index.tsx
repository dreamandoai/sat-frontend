import React from "react";
import Header from "./Header";
import DiagnosticSection from "./DiagnosticSection";
import InfoSection from "./InfoSection";
import Footer from "./Footer";

const Dashboard: React.FC = () => {
  return(
    <div>
      <Header />
      <DiagnosticSection />
      <InfoSection />
      <Footer />
    </div>
  ) 
}

export default Dashboard;