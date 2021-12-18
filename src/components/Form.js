import React, { useState } from 'react'


const Form = () => {


    const c1 = 33
    const c2 = 0.3703
    const c3 = 37
    const c4 = 0.82
    const c5 = 1.25
    const c6 = 6
    const c7 = 3.4
    const c8 = 250
    const c9 = 200
    const c10 = 210
    const c11 = 0.7
    const c12 = 0.016
    const c13 = 0.68
    const c14 = 21
    const c15 = 15
    const c16 = 35
    const c17 = 1.1
    const c18 = 1/12000
    const c19 = 14206



    const[calculatedResult, setCalculatedResult] = useState("")


    const[selectedCity, setSelectedCity] = useState("")
    const[selectedWallMaterial, setSelectedWallMaterial] = useState("")
    const[selectedDirection1, setSelectedDirection1] = useState("")
    const[selectedDirection2, setSelectedDirection2] = useState("")
    const[selectedDirection3, setSelectedDirection3] = useState("")
    const[selectedDirection4, setSelectedDirection4] = useState("")
    const[selectedWindowMaterial, setSelectedWindowMaterial] = useState("")
    const[noOfWindows1, setNoOfWindows1] = useState("")
    const[noOfWindows2, setNoOfWindows2] = useState("")
    const[noOfWindows3, setNoOfWindows3] = useState("")
    const[noOfWindows4, setNoOfWindows4] = useState("")
    const[selectedDoorMaterial, setSelectedDoorMaterial] = useState("")
    const[noOfDoors, setNoOfDoors] = useState("")
    const[selectedShadingType, setSelectedShadingType] = useState("")
    const[noOfLights, setNoOfLights] = useState("")
    const[noOfPeople, setNoOfPeople] = useState("")

    const[width, setWidth] = useState("")
    const[breadth, setBreadth] = useState("")
    const[height, setHeight] = useState("")
    const[wallArea1, setWallArea1] = useState("")
    const[wallArea2, setWallArea2] = useState("")
    const[wallArea3, setWallArea3] = useState("")
    const[wallArea4, setWallArea4] = useState("")
    const[windowArea1, setWindowArea1] = useState("")
    const[windowArea2, setWindowArea2] = useState("")
    const[windowArea3, setWindowArea3] = useState("")
    const[windowArea4, setWindowArea4] = useState("")
    const[partitionArea, setPartitionArea] = useState("")





    const handleCitySelect = (e) => {
        setSelectedCity(e.target.value);
    }
    const handleWallMaterialSelect = (e) => {
        setSelectedWallMaterial(e.target.value);
    }
    const handleDirection1Select = (e) => {
        setSelectedDirection1(e.target.value);
    }
    const handleDirection2Select = (e) => {
        setSelectedDirection2(e.target.value);
    }
    const handleDirection3Select = (e) => {
        setSelectedDirection3(e.target.value);
    }
    const handleDirection4Select = (e) => {
        setSelectedDirection4(e.target.value);
    }
    const handleWindowMaterialSelect = (e) => {
        setSelectedWindowMaterial(e.target.value);
    }
    const handleNoofWindows1Select = (e) => {
        setNoOfWindows1(e.target.value);
    }
    const handleNoofWindows2Select = (e) => {
        setNoOfWindows2(e.target.value);
    }
    const handleNoofWindows3Select = (e) => {
        setNoOfWindows3(e.target.value);
    }
    const handleNoofWindows4Select = (e) => {
        setNoOfWindows4(e.target.value);
    }
    const handleDoorMaterialSelect = (e) => {
        setSelectedDoorMaterial(e.target.value);
    }
    const handleNoOfDoorsSelect = (e) => {
        setNoOfDoors(e.target.value);
    }
    const handleShadingTypeSelect = (e) => {
        setSelectedShadingType(e.target.value);
    }
    const handleNoOfLightsSelect = (e) => {
        setNoOfLights(e.target.value);
    }
    const handleNoOfPeopleSelect = (e) => {
        setNoOfPeople(e.target.value);
    }


    const handleCalculate = (e) => {
        e.preventDefault()

        const Volume = width * breadth * height

        const WallCalculation = (selectedWallMaterial * selectedDirection1 * wallArea1) + (selectedWallMaterial * selectedDirection2 * wallArea2) + (selectedWallMaterial * selectedDirection3 * wallArea3) + (selectedWallMaterial * selectedDirection4 * wallArea4)

        const WindowCalculation = (selectedWindowMaterial * windowArea1 * noOfWindows1 * c1) + (selectedWindowMaterial * windowArea2 * noOfWindows2 * c1) + (selectedWindowMaterial * windowArea3 * noOfWindows3 * c1) + (selectedWindowMaterial * windowArea4 * noOfWindows4 * c1)

        const DoorsCalculation = selectedDoorMaterial * noOfDoors * selectedCity

        const PartitionCalculation = partitionArea * c2 * selectedCity

        const ConductionLoad = WallCalculation + WindowCalculation + DoorsCalculation + PartitionCalculation

        const RadiationLoad = selectedShadingType * c3 * WindowCalculation * c4

        const ElectricLoad = noOfLights * c5 * c6 * c7

        const OccupanyLoad = (noOfPeople * c8) + (noOfPeople * c9)

        const InfilterationLoad = (Volume * selectedCity * c11 * c12) + (c10 * c13 * c14)

        const VentilationLoad = (noOfPeople * c15 * c16 * c17) + (noOfPeople * c15 * c14 * c13)


        const TotalLoad =  ConductionLoad + RadiationLoad + ElectricLoad + OccupanyLoad + InfilterationLoad + VentilationLoad + c19

        const LoadInTons = TotalLoad * c18


        setCalculatedResult(LoadInTons)


    }



    return (
        <div className="container">
            <h1 className="text-uppercase display-5 pt-4" style={{ color:"#01a3a4"}}>Cooling Load Calculator</h1>
            <br/>
            <div className="col-12 row  ">
                <div className='col-2 offset-1'><p className='text-dark text-start'>2019-ME-75</p></div>
                <div className='col-2 offset-1'><p className='text-derk text-start'>2019-ME-76</p></div>
                <div className='col-2 offset-1'><p className='text-dark text-start'>2019-ME-77</p></div>
                <div className='col-2 offset-1'><p className='text-dark text-start'>2019-ME-78</p></div>
            </div>

            { calculatedResult == '' &&
                <form onSubmit={ () => null}>
                    <div className="col-6 offset-3 ">
                        <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"
                        }} htmlFor="city">Select a City</label>
                        <select className="form-select" name="City" id="city" onChange={(e) => {handleCitySelect(e)}}>
                            {Cities.map((City) => (
                                <option key={City.id} value={City.td}>{City.name}</option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <br />
                    <div className="col-6 offset-3 card p-3 ">
                        <h3 className="display-6 text-uppercase"> Volume of Room </h3>
                        <hr className="my-4"/>
                        <div className=" mb-3">
                            <label className="form-label col-12" style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}} htmlFor="city">Width</label>
                            <input  className="form-control" type="text"  value={width} onChange={(e) => setWidth(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}} htmlFor="city">Breadth</label>
                            <input  className="form-control" type="text"  value={breadth} onChange={(e) => setBreadth(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label col-12" style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}} htmlFor="city">Height</label>
                            <input  className="form-control"type="text"  value={height} onChange={(e) => setHeight(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-6 offset-3 card p-3 mt-4">
                        <h3 className="display-6 text-uppercase"> Walls </h3>
                        <hr className="my-4"/>
                        <div> <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"
                        }} htmlFor="city">Wall Material</label>
                            <select className="form-select" name="City" id="city" onChange={(e) => {handleWallMaterialSelect(e)}}>
                                {WallMaterials.map((WallMaterial) => (
                                    <option key={WallMaterial.id} value={WallMaterial.uValue}>{WallMaterial.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Select a Direction</label>
                            <select className="form-select" name="City" id="city" onChange={(e) => {handleDirection1Select(e)}}>
                                {Directions.map((Direction) => (
                                    <option key={Direction.id} value={Direction.cltdFactor}>{Direction.name}</option>
                                ))}
                            </select>
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Wall Area</label>
                            <input  className="form-control"type="text"  value={wallArea1} onChange={(e) => setWallArea1(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Select a Direction</label>
                            <select className="form-select"name="City" id="city" onChange={(e) => {handleDirection2Select(e)}}>
                                {Directions.map((Direction) => (
                                    <option key={Direction.id} value={Direction.cltdFactor}>{Direction.name}</option>
                                ))}
                            </select>
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Wall Area</label>
                            <input  className="form-control"type="text"  value={wallArea2} onChange={(e) => setWallArea2(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Select a Direction</label>
                            <select className="form-select"name="City" id="city" onChange={(e) => {handleDirection3Select(e)}}>
                                {Directions.map((Direction) => (
                                    <option key={Direction.id} value={Direction.cltdFactor}>{Direction.name}</option>
                                ))}
                            </select>
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Wall Area</label>
                            <input  className="form-control"type="text"  value={wallArea3} onChange={(e) => setWallArea3(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Select a Direction</label>
                            <select className="form-select"name="City" id="city" onChange={(e) => {handleDirection4Select(e)}}>
                                {Directions.map((Direction) => (
                                    <option key={Direction.id} value={Direction.cltdFactor}>{Direction.name}</option>
                                ))}
                            </select>
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Wall Area</label>
                            <input  className="form-control"type="text"  value={wallArea4} onChange={(e) => setWallArea4(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-6 offset-3 card p-3 mt-3">
                        <h3 className="display-6 text-uppercase"> Windows </h3>
                        <hr className="my-4"/>
                        <div>
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Window Material</label>
                            <select  className="form-select"name="City" id="city" onChange={(e) => {handleWindowMaterialSelect(e)}}>
                                {WindowMaterials.map((WindowMaterial) => (
                                    <option key={WindowMaterial.id} value={WindowMaterial.uValue}>{WindowMaterial.name}</option>
                                ))}
                            </select>
                        </div>
                        <hr className="my-4"/>
                        <div>
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">North Wall</label>
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Window Area</label>
                            <input  className="form-control"type="text"  value={windowArea1} onChange={(e) => setWindowArea1(e.target.value)} />
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">No. of Windows</label>
                            <select className="form-select"name="City" id="city" onChange={(e) => {handleNoofWindows1Select(e)}}>
                                {NoOfWindowsPerWall.map((Windows) => (
                                    <option key={Windows.id} value={Windows.name}>{Windows.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-3 mb-3">
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">South Wall</label>
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Window Area</label>
                            <input  className="form-control"type="text"  value={windowArea2} onChange={(e) => setWindowArea2(e.target.value)} />
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">No. of Windows</label>
                            <select className="form-select"name="City" id="city" onChange={(e) => {handleNoofWindows2Select(e)}}>
                                {NoOfWindowsPerWall.map((Windows) => (
                                    <option key={Windows.id} value={Windows.name}>{Windows.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-3 mb-3">
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">East Wall</label>
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Window Area</label>
                            <input  className="form-control"type="text"  value={windowArea2} onChange={(e) => setWindowArea2(e.target.value)} />
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">No. of Windows</label>
                            <select className="form-select"name="City" id="city" onChange={(e) => {handleNoofWindows2Select(e)}}>
                                {NoOfWindowsPerWall.map((Windows) => (
                                    <option key={Windows.id} value={Windows.name}>{Windows.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-3 mb-3">
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Waste Wall</label>
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Window Area</label>
                            <input  className="form-control"type="text"  value={windowArea2} onChange={(e) => setWindowArea2(e.target.value)} />
                            <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">No. of Windows</label>
                            <select className="form-select"name="City" id="city" onChange={(e) => {handleNoofWindows2Select(e)}}>
                                {NoOfWindowsPerWall.map((Windows) => (
                                    <option key={Windows.id} value={Windows.name}>{Windows.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-6 offset-3 card p-3 mt-4">
                        <h3 className="text-uppercase display-6"> Doors </h3>
                        <hr className="my-4"/>
                        <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Door Material</label>
                        <select className="form-select"name="City" id="city" onChange={(e) => {handleDoorMaterialSelect(e)}}>
                            {DoorMaterials.map((DoorMaterial) => (
                                <option key={DoorMaterial.id} value={DoorMaterial.uValue}>{DoorMaterial.name}</option>
                            ))}
                        </select>
                        <br />
                        <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Number of Doors</label>
                        <select className="form-select"name="City" id="city" onChange={(e) => {handleNoOfDoorsSelect(e)}}>
                            {NoOfDoorsPerWall.map((Doors) => (
                                <option key={Doors.id} value={Doors.name}>{Doors.name}</option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <div className="col-12 row">
                        <div className="col-3 ">
                            <div className="card ">
                                <h4 className="text-captalize"> Partitions </h4>
                                <hr className="my-2"/>
                                <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Partition Area</label>
                                <input  className="form-control"type="text"  value={partitionArea} onChange={(e) => setPartitionArea(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <h4 className=" text-captalize"> Shading </h4>
                                <hr className="my-2"/>
                                <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Select Shading Type</label>
                                <select className="form-select"name="City" id="city" onChange={(e) => {handleShadingTypeSelect(e)}}>
                                    {ShadingTypes.map((ShadingType) => (
                                        <option key={ShadingType.id} value={ShadingType.uValue}>{ShadingType.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className="card ">
                                <h4 className=" text-captalize"> Lights </h4>
                                <hr className="my-2"/>
                                <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Number of Lights</label>
                                <select className="form-select"name="City" id="city" onChange={(e) => {handleNoOfLightsSelect(e)}}>
                                    {NoOfLights.map((Lights) => (
                                        <option key={Lights.id} value={Lights.name}>{Lights.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card ">
                                <h4 className=" text-captalize"> Occupancy </h4>
                                <hr className="my-2"/>
                                <label className="form-label col-12 " style={{justifyContent:'left', textAlign:'left',  fontFamily: "Times New Roman"}}htmlFor="city">Number of People</label>
                                <select className="form-select"name="City" id="city" onChange={(e) => {handleNoOfPeopleSelect(e)}}>
                                    {Occupancy.map((Occupants) => (
                                        <option key={Occupants.id} value={Occupants.name}>{Occupants.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-success" onClick={handleCalculate}>Calculate</button>
                    </div>
                    <br />
                </form>
            }


            <div className='mt-3'>
                {
                    calculatedResult !== "" &&
                    <>
                        <div className=" bg-success card w-100" style={{ width:'18rem', minHeight: '8rem',textAlign:'center',justifyContent:"center",color:"white",fontSize:'20px'}}>{calculatedResult} ton</div>
                        <br/>
                        <button className="btn btn-warning" onClick={()=> setCalculatedResult('')}>ReCalculate</button>
                        <br/>
                        <br/>
                        <br/>
                    </>
                }
            </div>

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

const WallMaterials = [
    {
        id: 1,
        name: "ConcreteWall (6 Inch)",
        uValue: 0.7
    },
    {
        id: 2,
        name: "Brick Wall (10 Inch)",
        uValue: 0.384
    }
]

const Directions = [
    {
        id: 1,
        name: "North",
        cltdFactor: 26
    },
    {
        id: 2,
        name: "South",
        cltdFactor: 34
    },
    {
        id: 3,
        name: "East",
        cltdFactor: 43
    },
    {
        id: 4,
        name: "West",
        cltdFactor: 33
    },
]


const WindowMaterials = [
    {
        id: 1,
        name: "Double Glaze Window",
        uValue: 0.889
    },
    {
        id: 2,
        name: "Vertical Double Glaze Window",
        uValue: 0.06
    },
    {
        id: 3,
        name: "Horizontal Double Glaze Window",
        uValue: 1.4
    },
]

const NoOfWindowsPerWall = [
    {
        id: 1,
        name: "1"
    },
    {
        id: 2,
        name: "2"
    },
    {
        id: 3,
        name: "3"
    },
    {
        id: 4,
        name: "4"
    },
    {
        id: 5,
        name: "5"
    }
]


const DoorMaterials = [
    {
        id: 1,
        name: "One Inch Wood",
        uValue: 0.65
    },
    {
        id: 2,
        name: "Two Inch Wood",
        uValue: 0.5
    },
    {
        id: 3,
        name: "Single Sheet Metal",
        uValue: 1.2
    },
]

const ShadingTypes = [
    {
        id: 1,
        name: "Ventilation Blinds",
        sc: 0.64
    },
    {
        id: 2,
        name: "Roller Blinds",
        sc: 0.59
    }
]

const NoOfDoorsPerWall = [
    {
        id: 1,
        name: "1"
    },
    {
        id: 2,
        name: "2"
    }
]


const NoOfLights = [
    {
        id: 1,
        name: "1"
    },
    {
        id: 2,
        name: "2"
    },
    {
        id: 3,
        name: "3"
    },
    {
        id: 4,
        name: "4"
    },
    {
        id: 5,
        name: "5"
    },
    {
        id: 6,
        name: "6"
    },
    {
        id: 7,
        name: "7"
    },
    {
        id: 8,
        name: "8"
    },
    {
        id: 9,
        name: "9"
    },
    {
        id: 10,
        name: "10"
    },
]


const Occupancy = [
    {
        id: 1,
        name: "10"
    },
    {
        id: 2,
        name: "20"
    },
    {
        id: 3,
        name: "30"
    },
    {
        id: 4,
        name: "40"
    },
    {
        id: 5,
        name: "50"
    }
]