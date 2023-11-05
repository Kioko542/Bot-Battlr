// YourBotArmy.js
import React from 'react';

function YourBotArmy({ bots, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      {bots.map((bot) => (
        <div key={bot.id} className="army-bot">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => onRelease(bot)}>Release</button>
          <button onClick={() => onDischarge(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
