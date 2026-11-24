function MatchCard(props) {
  return (
    <div className="match-card">
      <h3>{props.team1} vs {props.team2}</h3>
      <p>Date: {props.date}</p>
      <p>Venue: {props.venue}</p>
      <p>Ticket Price: ₹{props.price}</p>

      <button onClick={() => props.onBook(props.team1, props.team2)}>
        Book Ticket
      </button>
    </div>
  );
}

export default MatchCard;