import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";

function App() {
  const [message, setMessage] = useState("");

  const matches = [
    {
      id: 1,
      team1: "CSK",
      team2: "MI",
      date: "1 April 2026",
      venue: "Mumbai",
      price: 5000,
    },
    {
      id: 2,
      team1: "RCB",
      team2: "CSK",
      date: "2 April 2026",
      venue: "Delhi",
      price: 5000,
    },
    {
      id: 3,
      team1: "CSK",
      team2: "RCB",
      date: "3 April 2026",
      venue: "Chennai",
      price: 5000,
    },
    {
      id: 4,
      team1: "Punjab",
      team2: "MI",
      date: "4 April 2026",
      venue: "Chandigarh",
      price: 5000,
    },
  ];

  function handleBooking(team1, team2) {
    setMessage("Booking selected for " + team1 + " vs " + team2);
  }

  return (
    <>
      <Navbar />
      <Hero />

      <h2>Upcoming Matches</h2>

      {message && <p className="booking-message">{message}</p>}

      <div className="matches">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            date={match.date}
            venue={match.venue}
            price={match.price}
            onBook={handleBooking}
          />
        ))}
      </div>
    </>
  );
}

export default App;