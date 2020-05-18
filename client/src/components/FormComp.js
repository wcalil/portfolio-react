import React from "react";

function FormComp() {

    return (

        <form>
            <div className="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="1"
                    placeholder="John Smith">
                </textarea>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8">
                </textarea>
            </div>

            <input type="submit" value="Submit" />
            <div><br /></div>
        </form>

    )
}

export default FormComp;
