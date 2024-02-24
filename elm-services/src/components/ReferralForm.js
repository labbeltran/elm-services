import {useState} from 'react';

function ReferralForm(){
    const [formData, setFormData] = useState({

        firstName:'',
        lastName:'',
        pronoun: '',
        uci: '',
        dob:'',
        conserved: '',
        streetName: '',
        city:'',
        state:'',
        zipCode:'',
        scName: '',
        contactNumber: '',
        serviceType: ''
})

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement what should happen on form submission
    console.log(formData);
};

return(
    <div>
        <div className="referral-form">
            <form onSubmit= {handleSubmit}>
            <h1>Referral for Services Form</h1>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Client First Name:</label>
                <input className="form-control" id="firstName" name="firstName" value="formData.firstName" onChange={handleInputChange} required />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Client Last Name:</label>
                <input className="form-control" id="lastName" name="lastName" value="formData.lastName" onChange={handleInputChange} required />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Client Requested Pronoun:</label>
                <input className="form-control" id="pronoun" name="pronoun" value="formData.pronoun" onChange={handleInputChange} required />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="founded">UCI #</label>
                <input type="number" className="form-control" id="uci" name="uci" value="formData.uci" onChange={handleInputChange} required/>
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="conserved">Conserved?</label>
                <select name="conserved" id="conserved" className="conserved" value="formData.conserved" onChange={handleInputChange} required>
                    <option value="">Please select an option</option>
                    <option value="type1">Conserved</option>
                    <option value="type2">Not conserved</option>
                </select>
            </div>
            <h2>Address</h2>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="streetName">Street</label>
                <input className="form-control" id="streetName" name="streetName" value="formData.streetName" onChange={handleInputChange} required />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="city">City:</label>
                <input className="form-control" id="city" name="city" />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="state">State:</label>
                <input className="form-control" id="state" name="state" />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="zipCode">Zip Code</label>
                <input type="number" className="zipCode" id="zipCode" name="zipCode" value="formData.zipCode" onChange={handleInputChange} required/>
            </div>
            <h2>Regional Center Information</h2>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="scName">Service Coordinator</label>
                <input className="form-control" id="scName" name="scName" value="formData.scName" onChange={handleInputChange} required/>
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="contactNumber">Service Coordinator contact number</label>
                <input type="number" className="contactNumber" id="contactNumber" name="contactNumber" value="formData.contactNumber" onChange={handleInputChange} required/>
            </div>
            <div>
            <label htmlFor="serviceType">Type of service desired</label>
                <select name="serviceType" id="serviceType" className="form-control" value="formData.serviceType" onChange={handleInputChange} required>
                <option value="">Please select an option</option>
                <option value="type1">ILS</option>
                <option value="type2">SLS</option>
                <option value="type3">Socialization</option>
                </select>
            </div>
                <input className="btn btn-primary" type="submit" value="Request Referral" />
            </form>

        </div>
    </div>
)

}

export default ReferralForm