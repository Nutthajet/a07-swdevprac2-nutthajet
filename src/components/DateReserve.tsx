'use client'
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {Select, MenuItem} from "@mui/material";
import TextField from '@mui/material/TextField';

export default function DateReserve(){
    return (
        <div className="mx-auto flex flex-col gap-10 w-[300px] p-5">
            <TextField name="Name-Lastname" label="Name-Lastname" 
            variant="standard"></TextField>
            <TextField name="Contact-Number" label="Contact-Number"
            variant="standard"></TextField>
            <Select variant="standard" name="venue" id="venue" 
            className="h-[2em] w-[200px]">
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker className="bg-white"/>
            </LocalizationProvider>
            
        </div>
    );
}