// src/components/TaskForm.jsx
// You need to write the code for TaskForm component in the TaskForm.jsx file.

import { useState } from "react";
import axios from 'axios';

export default function TaskForm() {
    const [formdata, setformdata] = useState({
        title:"",
        dueDate: new Date.now(),
        priority: "",
        status: ""

    })

    const handlesubmit = async (e) => {
        e.preventdefault();
        if(!formdata.title||!formdata.dueDate||!formdata.priority||!formdata.status){
            alert("all fields are required")
            return
        }
        try{
            await axios.post("http://localhost:3000/post",formdata);
            console.log("Success");
            alert("success");
        }
        catch(err){
            console.log("there was an error",err)
        }
    }

    return (
        <div>
            <form onSubmit={(e)=>handlesubmit(e)}>
                <div>
                    <label>Title</label>
                    <input type="text" value={formdata.title} onChange={(e)=>setformdata({...formdata,title:e.target.value})} />
                </div>

                <div>
                    <label>Duedate</label>
                    <input type="date" value={formdata.dueDate} onChange={(e)=>setformdata({...formdata,dueDate:e.target.value})} />
                </div>

                <div>
                    <label>Priority</label>
                    <input type="text" value={formdata.priority} onChange={(e)=>setformdata({...formdata,priority:e.target.value})} />
                </div>

                <div>
                    <label>Status</label>
                    <input type="text" value={formdata.status} onChange={(e)=>setformdata({...formdata,status:e.target.value})} />
                </div>
            </form>
        </div>
    );
}