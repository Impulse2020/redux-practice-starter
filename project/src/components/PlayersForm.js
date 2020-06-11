import React from 'react';


const PlayerForm = () =>{

    return(
      <div className="playerForm">
          Name:<input name="Name" type="text" ></input>
          Picture: <input name="Picture" type="text"></input>
          Position: <input name="Position" type="text"></input>
          bio: <input name="Bio"></input>
          
          <button>Add player</button>
      </div>
    )


}

export default PlayerForm;