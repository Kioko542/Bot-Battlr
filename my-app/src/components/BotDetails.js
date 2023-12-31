import React from "react";

// Destructuring the props from the BotsPage component
const BotDetails = ({ bot, clearSpec, addBot }) => {
  
  const handleAddBot = () => {
    addBot(bot);
  };

  return (
    
    <div  >
        
         <div>   
            <img         
              src={bot.avatar_url}
              alt="avatar"
            />
          </div>

          {/* Data of the bot cards */}

        <div className="card-bod" >
            <h2>Name: {bot.name}</h2>
        
            <p>Catchphrase:{bot.catchphrase}</p>
            <p>health:{bot.health}</p>
            <p>Class: {bot.bot_class}</p> 
         </div >
            
            
            {/* More details */}
            <div>
            <strong>{bot.health}</strong>
            </div>

            <div>
            <strong>{bot.damage}</strong>  
            </div>

            <div>
            <strong>{bot.armor}</strong>
            </div>

                
                 
                   
                 
            {/* buttons */}
            <button className="btn" onClick={clearSpec}>
              Go Back
            </button>

            <button className="btn" onClick={handleAddBot}>
              {bot.owned ? "Remove From Army" : "Enlist"}
            </button>
    
       </div>
            
       
     
  );
};

export default BotDetails;
