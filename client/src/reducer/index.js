
const initialState = {
    pokemons: [],
    allPokemons: [],
    detail: [],
    types: [],
  };

  function rootReducer(state = initialState, action){
    switch (action.type) {
        case "OBTENER_POKEMONS":
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            };default: return state
            
        }
        
      
    };
  
            
            
    
    
        

  




  export default rootReducer