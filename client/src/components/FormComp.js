import React, { useState } from "react";
import API from "../utils/API";

function FormComp() {
const [name, setName] = useState();
const [email, setEmail] = useState();
const [message, setMessage] = useState()
        

    const handleSubmit = e => {
        e.preventDefault();
        alert("Hello " + name + "! Thank you for your message. Please, hang tight that " +
        "I will contact you soon through the email " + email)
        console.log(message)

        if (name && email && message) {
            API.saveMessage({
              name: name,
              emailAdress: email,
              message: message
            })
              .then(res => alert("Message sent"))
              .catch(err => console.log(err));
          }
        };
        
    

    return (

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="exampleFormControlInput1">Name</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="1"
                    placeholder="John Smith"
                    name="name"
                    onChange={e => setName(e.target.value)}
                >
                </textarea>
            </div>
            <div className="form-group">
                <label className="exampleclassNamemControlInput1">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className="exampleFormControlTextarea1">Message</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8"
                    name="message"
                    onChange={e => setMessage(e.target.value)}
                >
                </textarea>
            </div>

            <input type="submit" value="Submit" />
            <div><br /></div>
            
        </form>

    )
}

export default FormComp;
