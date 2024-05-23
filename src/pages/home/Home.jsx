import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

function Home() {
  const context = useContext(myContext);
  console.log(context);
const {state ,color} = context;

  return (
    <Layout>
      <div>
        <h1> Name : {state.name}</h1>
        <h1> Roll number : {state.rollNo}</h1>
        <h1>color : {color}</h1>
      </div>
    </Layout>
  );
}

export default Home;
