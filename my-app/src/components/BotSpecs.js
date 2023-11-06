import React from 'react';
import { useParams } from 'react-router-dom';

function BotSpecs({ bots, enlistBot }) {
  const { id } = useParams();
  const bot = bots.find((b) => b.id === parseInt(id));

  if (!bot) {
    return <div>Bot not found.</div>;
  }

  return (
    <div>
      <h2>Bot Specifications</h2>
      <p>Name: {bot.name}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
