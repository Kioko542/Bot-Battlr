// BotCard.js
import React from 'react';

function BotCard({ bot, onEnlist }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <div className="par">
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      </div>
      <button onClick={onEnlist}>Enlist</button>
    </div>
  );
}

export default BotCard;
