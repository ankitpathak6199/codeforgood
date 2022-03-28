import React, { useEffect, useState } from "react";
import axios from 'axios';
import UserCard from "./UserCard";
import ChartCard from "./ChartCard";
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    typebox: {
        width: "20rem",
        marginLeft: "10rem",
        color: "#cc4036",
    },
});
const types = [
    {
        id: 1,
        name: "Pie"
    },
    {
        id: 2,
        name: "Line"
    },
    {
        id: 3,
        name: "Bar"
    },
    {
        id: 4,
        name: "Dough"
    },
]
function getStudentData() {
    return fetch("/getData")
        .then(response => response.json())
        .then(data => data)
};
function Profile() {
    document.title = "Profile";
    const [type, setType] = useState("Pie");
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 500,
            },
        },
    };
    function handleChange(event) {
        setType(event.target.value);
        console.log(type);
        <ChartCard data={type} />
    }
    return (
        <div>
            <UserCard />
            <FormControl>
                {/* <InputLabel>Type of data analysis</InputLabel> */}
                <Select
                    className={useStyles().typebox}
                    value={type}
                    onChange={(event) => { handleChange(event) }}
                    input={<Input />}
                    MenuProps={MenuProps}>
                    {types.map(type => (
                        <MenuItem key={type.id} value={type.name}>
                            {type.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <ChartCard data={type} />
        </div>
    );
}

// function Profile() {
//     const [studentData, setStudentData] = useState([]);
//     // studentData = getStudentData();
//     // console.log(studentData);



//     useEffect(() => {
//         axios.get("/getData").then((data) => {
//             setStudentData(data.data);
//             console.log(data.data);
//             console.log(studentData);
//         })
//     }, []);

//     return (
//         <div>
//             <h1>List Of Students Assigned : </h1>
//             {studentData.map((student) => {
//                 <UserCard student={student} key={student.id} />
//                 console.log(student)
//             })}
//             <ChartCard />
//          </div>
//     );
//         }

export default Profile;