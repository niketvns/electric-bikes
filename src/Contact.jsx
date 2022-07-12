import React from "react";

const Contact = () => {
    return (
        <>
            <div className="enquiry">
                <form>
                    <table>
                        <tr>
                            <td className="bold">Name:<span>*</span></td>
                            <td><input type="text" name="name" id="" placeholder="Enter Your Name" required /></td>
                        </tr>
                        <tr>
                            <td className="bold">Mobile:<span>*</span></td>
                            <td><input type="number" name="phone" placeholder="Mobile Number" required /></td>
                        </tr>
                        <tr>
                            <td className="bold">Email:<span>*</span></td>
                            <td><input type="email" name="email" id="" placeholder="email" required /><br /></td>
                        </tr>
                        <tr>
                            <td className="bold">Select Bike:</td>
                            <td className="option">
                                <select>
                                    <option disabled>- Select a Bike-</option>
                                    <option value="Revolt RV 400">Revolt RV 400</option>
                                    <option selected value="TVS iQube">TVS iQube</option>
                                    <option value="PURE EV Etryst-350">PURE EV Etryst-350</option>
                                    <option value="Odysse Evoqis">Odysse Evoqis</option>
                                    <option value="Hero Electric Atria">Hero Electric Atria</option>
                                    <option value="Okinawa Praise">Okinawa Praise</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="bold">Question:<span>*</span></td>
                            <td><textarea name="question" id="" cols="" rows="" placeholder="Write your Query.." required /></td>
                        </tr>
                    </table>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact;