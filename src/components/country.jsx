import { useEffect, useState } from "react";
import countries from "./countries";


function Country({data}){


      return (

      <>
            
            <ul className="grid grid-cols-4">
                  {
                        data.map(el=> {

                        //       console.log(el.cca2)
                        //      console.log(el.coatOfArms.png)


                              return (
                                    <div key={el.cca2}>
                                                 <div className="card border bg-base-100 my-10 mx-4 shadow-xl">
                                                      <figure><img className="w-32 h-28" src={el.coatOfArms.png}/></figure>
                                                      <div className="card-body">
                                                            <h2 className="card-title">{el.name.common}</h2>
                                                            <div className="card-actions justify-start">
                                                                  <button className="btn mt-12 btn-sm btn-primary">Visited</button>
                                                            </div>
                                                      </div>
                                                </div>
                                    
                                    </div>
                              )
                        } )
                  }
            </ul>
            
      </>

      )

}

export default Country;