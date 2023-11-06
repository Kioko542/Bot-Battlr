import React from "react";

const BotCard = props => {
  const { bot } = props;

  const botTypeIcons = {
    Assault: <i className="icon military" />,
    Defender: <i className="icon shield" />,
    Support: <i className="icon ambulance" />,
  };

  const botType = botTypeIcons[bot.bot_class] || <div />;

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => props.addBot(bot)}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
