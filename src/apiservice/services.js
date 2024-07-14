import axios from "axios";

const baseURL = "https://craftshomes.up.railway.app/api/v1/"
const base = "http://mimicker.thbscoetg.com"

export const createContactEnquiry = async (data) =>{
    console.log("Service create contact enquiry is running...")
    
     return await axios({
        method: "POST",
        url: baseURL + `contact-enquiry`,
        data: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${localStorage.getItem("token")}`,
        },
      });
    }