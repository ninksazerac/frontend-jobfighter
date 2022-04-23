import React from "react";
import { toast } from "react-toastify";

export default function ContactValidation(values){

    let errors = {};

    if(!values.full_name.trim()){
        errors.full_name = "Full name is required."
    }
    if(!values.email){
        errors.email = "Email is required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid.";
    }
    
    if(!values.message.trim()){
        errors.message = "Message is required."
    }
    
    return errors;

}