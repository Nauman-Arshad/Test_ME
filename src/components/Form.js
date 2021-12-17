import React, { useState } from 'react'


const Form = () => {
    const[width, setWidth] = useState("")
    
    return (
        <div>
            <h1>Cooling Load Calculator</h1>
            <form>
                <label htmlFor="city">Select a City</label>
                <select name="City" id="city">
                {Cities.map((City) => (
                    <option key={City.id} value={City.td}>{City.name}</option>
                    ))}
                </select>
                <br />
                <br />
                <h3> Volume of Room </h3>
                <label htmlFor="city">Width</label>
                <input type="text"  value={width} onChange={(e) => setWidth(e.target.value)}
                />
                <label htmlFor="city">Breadth</label>
                <input type="text" />
                <label htmlFor="city">Height</label>
                <input type="text" />
                <br />
                <br />
                <h3> Walls </h3>
                <label htmlFor="city">Wall Material</label>
                <select name="Direciton" id="direction">
                    <option value="volvo">Concrete Wall (6 Inch)</option>
                    <option value="saab">Brick Wall (10 Inch)</option>
                </select>
                <br />
                <br />
                <label htmlFor="city">Select a Direction</label>
                <select name="Direciton" id="direction">
                    <option value="volvo">North</option>
                    <option value="saab">South</option>
                    <option value="opel">East</option>
                    <option value="audi">West</option>
                </select>
                <label htmlFor="city">Wall Area</label>
                <input type="text" />
                <br />
                <label htmlFor="city">Select a Direction</label>
                <select name="Direciton" id="direction">
                    <option value="volvo">North</option>
                    <option value="saab">South</option>
                    <option value="opel">East</option>
                    <option value="audi">West</option>
                </select>
                <label htmlFor="city">Wall Area</label>
                <input type="text" />
                <br />
                <label htmlFor="city">Select a Direction</label>
                <select name="Direciton" id="direction">
                    <option value="volvo">North</option>
                    <option value="saab">South</option>
                    <option value="opel">East</option>
                    <option value="audi">West</option>
                </select>
                <label htmlFor="city">Wall Area</label>
                <input type="text" />
                <br />
                <label htmlFor="city">Select a Direction</label>
                <select name="Direciton" id="direction">
                    <option value="volvo">North</option>
                    <option value="saab">South</option>
                    <option value="opel">East</option>
                    <option value="audi">West</option>
                </select>
                <label htmlFor="city">Wall Area</label>
                <input type="text" />
                <br />
                <br />
                <h3> Windows </h3>
                <label htmlFor="city">Window Material</label>
                <select name="Direciton" id="direction">
                    <option value="volvo">Double Glaze Window</option>
                    <option value="volvo">Vertical Double Glaze Window</option>
                    <option value="saab">Horizontal Single Glass</option>
                </select>
                <br />
                <br />
                <label htmlFor="city">North Wall</label>
                <br />
                <label htmlFor="city">Window Area</label>
                <input type="text" />
                <label htmlFor="city">No. of Windows</label>
                <select name="No-of-Windows" id="direction">
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="saab">3</option>
                    <option value="saab">4</option>
                    <option value="saab">5</option>
                </select>
                <br />
                <br />
                <label htmlFor="city">South Wall</label>
                <br />
                <label htmlFor="city">Window Area</label>
                <input type="text" />
                <label htmlFor="city">No. of Windows</label>
                <select name="No-of-Windows" id="direction">
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="saab">3</option>
                    <option value="saab">4</option>
                    <option value="saab">5</option>
                </select>
                <br />
                <br />
                <label htmlFor="city">East Wall</label>
                <br />
                <label htmlFor="city">Window Area</label>
                <input type="text" />
                <label htmlFor="city">No. of Windows</label>
                <select name="No-of-Windows" id="direction">
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="saab">3</option>
                    <option value="saab">4</option>
                    <option value="saab">5</option>
                </select>
                <br />
                <br />
                <label htmlFor="city">West Wall</label>
                <br />
                <label htmlFor="city">Window Area</label>
                <input type="text" />
                <label htmlFor="city">No. of Windows</label>
                <select name="No-of-Windows" id="direction">
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="saab">3</option>
                    <option value="saab">4</option>
                    <option value="saab">5</option>
                </select>
                <br />
                <br />
                <h3> Doors </h3>
                <label htmlFor="city">Door Material</label>
                <select name="Direciton" id="direction">
                    <option value="volvo">1 Inch wood</option>
                    <option value="volvo">2 Inch Wood</option>
                    <option value="saab">Single Sheet Metal</option>
                </select>
                <br />
                <br />
                <label htmlFor="city">Number of Doors</label>
                <select name="No-of-Doors" id="direction">
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                </select>
                <br />
                <br />
                <h3> Partitions </h3>
                <label htmlFor="city">Partition Area</label>
                <input type="text" />
                <br />
                <br />
                <h3> Shading </h3>
                <label htmlFor="city">Select Shading Type</label>
                <select name="No-of-Doors" id="direction">
                    <option value="volvo">Ventilation Blind</option>
                    <option value="saab">Roller Blind</option>
                </select>
                <br />
                <br />
                <h3> Lights </h3>
                <label htmlFor="city">Number of Lights</label>
                <select name="No-of-Doors" id="direction">
                <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="saab">3</option>
                    <option value="saab">4</option>
                    <option value="saab">5</option>
                    <option value="volvo">6</option>
                    <option value="saab">7</option>
                    <option value="saab">8</option>
                    <option value="saab">9</option>
                    <option value="saab">10</option>
                </select>
                <br />
                <br />
                <h3> Occupancy </h3>
                <label htmlFor="city">Number of People</label>
                <select name="No-of-Doors" id="direction">
                    <option value="volvo">10</option>
                    <option value="saab">20</option>
                    <option value="saab">30</option>
                    <option value="saab">40</option>
                    <option value="saab">50</option>
                </select>
                <br />
                <br />
                <br />
                <br />
                <input type="button" value="Calculate" />
                <br />
                <br />
                <br />
                <br />
            </form>            
        </div>
    )
}

export default Form









const Cities = [
    {
        id: 1,
        name: "Lahore",
        td: 26
    },
    {
        id: 2,
        name: "Multan",
        td: 28
    },
    {
        id: 3,
        name: "Narowal",
        td: 26
    },
    {
        id: 4,
        name: "Bahawalpur",
        td: 26
    }
]






// let CLDT = Cities.find((City, i) => {
//     if (City.name === 'Lahore') {
//         return 26
//     } else if (City.name === 'Multan') {
//         return 28
        
//     } else if (City.name === 'Narowal') {
//         return 30.5
        
//     } else if (City.name === 'Bahawalpur') {
//         return 29
        
//     }
// });







// const [CLTD, setCLTD] = useState("26")

// for (i in City) {
//     if (City.name === City[i]) {
//         CLDT = City.cltd
//     }
// }


// const [CLTD, setCLTD] = useState({
//     Lahore: 26,
//     Multan: 28,
//     Narowal: 30.5,
//     Bahawalpur: 29
// })

// // for (const [key, value] of Object.entries(page)) {
// //     if (value) {
// //        console.log(key);
// //     }
// //   }

// console.log(CLTD.);

// // setResource(prevState => ({
// //     ...prevState,
// //     comment: "new Value",
// // }))