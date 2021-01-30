import { navigate } from "gatsby";
import React from "react"
import Header from "../component/Header"
import Lolly from '../component/Lolly'


export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="listLollies">
        <div>
          <Lolly fillLollyTop="#d52358" fillLollyMiddle="#e95946" fillLollyBottom="#deaa43"  />
        </div> 
        <div>
          <Lolly fillLollyTop="#ED265B" fillLollyMiddle="#F1BF4C" fillLollyBottom="#D38580"  />
        </div>  
        <div>
          <Lolly fillLollyTop="#97E665" fillLollyMiddle="#8CCB4C" fillLollyBottom="#121218"  />
        </div>
        <div>
          <Lolly fillLollyTop="#FEEFD6" fillLollyMiddle="#C01ABA" fillLollyBottom="#DC9687"  />
        </div>
        <div>
          <Lolly fillLollyTop="#CD2753" fillLollyMiddle="#D5CFD1" fillLollyBottom="#121218"  />
        </div>
      </div>
      <input type="button" value="Create New Lolly"
        onClick={
          ()=>{
            navigate("/createNew");
          }
        }
      ></input>
    </div>

  );
}
