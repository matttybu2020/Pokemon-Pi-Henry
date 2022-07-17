
const initialState = {
    pokemons: [],
    allPokemons: [],
    detail: [],
    types: [],
  };

  function rootReducer(state = initialState, action){
    switch (action.type) {
     

        case "OBTENER_POKEMONS":
          console.log(action)
            return {
              
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,

            };case "SEARCH_NAME":
            
            return{
                ...state,
                pokemons: action.payload

            }; case "GET_DETAIL":
          
            return{
              ...state,
              detail: action.payload,
            }; case "GET_TYPE":
            
            return {
              ...state,
              types:action.payload,
            }   
            default:
      return state;     


            
        }
    };
            
        
      
    
  
            
            
    
    
        

  




  export default rootReducer