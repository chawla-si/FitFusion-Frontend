import Navbar from "@/scenes/navbar";
import { useState } from "react";

enum SelectedPage{
  Home = "home",
  Benefits = "Benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}
function App() {
  const [selectedPage,setSelectedPage] = useState(SelectedPage.Home)
  return (
    <div className="app bg-gray-20">
      {/* app */}
      <Navbar
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
      />
      </div>
  )
}

export default App
