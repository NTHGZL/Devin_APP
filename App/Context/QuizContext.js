import * as React from 'react'

const QuizContext = React.createContext();

const indexReducer = (state, action) => {
    switch(action.type){
        case "NEXT" : 
            return {index : state.index+1}
        case "SHOW" : 
            return {isValidate : true};
        case "HIDE" : 
        return {isValidate : false};
        case "ISCHOSEN" :
            return {isChosen : true};
        case "NOTCHOSEN" :
            return {isChosen : false};
    }
}



const IndexProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(indexReducer, { index: 0, isValidate : false, isChosen : false})
  
    const value = { state, dispatch }
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
  }

  const useIndex = () => {
    const context = React.useContext(QuizContext)
    if (!context) {
      throw new Error('useIndex must be used within a IndexProvider')
    }
    return context
  }

  export {IndexProvider, useIndex}