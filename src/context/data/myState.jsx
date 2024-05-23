import MyContext from "./myContext";

function myState(props) {
  const state = {
    name:"Shivam Kumar",
    rollNo:"15"
  }
   const color = "red"
  return <MyContext.Provider value={{state , color}}>{props.children}</MyContext.Provider>;
}

export default myState;
