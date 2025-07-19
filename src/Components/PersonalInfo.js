import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";



export default function PersonalInfo() {
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [contactno, setContactno] = useState('');
    const [email, setEmail] = useState('');
    const [pincode, setPincode] = useState('');
    const [proofOfIdentity, setProofOfIdentity] = useState('');
    const [image, setImage] = useState(null);
    const [validated, setValidated] = useState(false);


    const [errors, setErrors] = useState({
        fullName: '',
        dob: '',
        gender: '',
        address: '',
        contactno: '',
        email: '',
        pincode: '',
        proofOfIdentity: '',
        image: '',


    });

    

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        const newErrors = {};

        if (form.checkValidity() === false) {
            e.preventDefault(); // Prevent form submission if invalid
            e.stopPropagation(); // Stop event propagation
        }

        setValidated(true);

        if (!fullName.trim()) {
            newErrors.fullName = 'Please enter your full name.';
        } else if (!/^[A-Z][a-z]*$/.test(fullName)) {
            newErrors.fullName = 'First letter must be capitalized.';
        }

        // Validate date of birth
        if (!dob) {
            newErrors.dob = 'Please enter your date of birth.';
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
            newErrors.dob = 'Please enter a valid date in the format YYYY-MM-DD.';
        }

        // Validate gender
        if (!gender) {
            newErrors.gender = 'Please select your gender.';
        }

        // Address validation
        if (!address.trim()) {
            newErrors.address = 'Please enter your address.';
        }

        // Contact Number Validation (simple check for a 10-digit number)
        if (!contactno.trim()) {
            newErrors.contactno = 'Please enter your contact number.';
        } else if (!/^\d{10}$/.test(contactno)) {
            newErrors.contactno = 'Please enter a valid 10-digit contact number.';
        }

        // Email Validation
        if (!email.trim()) {
            newErrors.email = 'Please enter your email address.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        // Pincode Validation (simple 6-digit check)
        if (!pincode.trim()) {
            newErrors.pincode = 'Please enter your pincode.';
        } else if (!/^\d{6}$/.test(pincode)) {
            newErrors.pincode = 'Please enter a valid 6-digit pincode.';
        }

        if (!proofOfIdentity) {
            newErrors.proofOfIdentity = 'Please select your proof of identity.';
        }

        // Image Upload Validation
        if (!image) {
            newErrors.image = 'Please upload an image.';
        } else if (!['image/jpeg', 'image/png', 'image/gif'].includes(image.type)) {
            newErrors.image = 'Only JPG, PNG, and GIF files are allowed.';
        }





        // Set errors if any
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({}); // Clear errors if everything is valid
            console.log('Form Submitted!');
            // Proceed with form submission logic (e.g., sending data to an API)
        }
        // Set errors if any
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors); // Set error for full name
        } else {
            setErrors({}); // Clear errors if everything is valid
            console.log('Form Submitted!');
            // Proceed with form submission logic (e.g., sending data to an API)
        }

        // Handle input change and clear error when user types
    };
    const handleChange = (e, field) => {
        const value = e.target.value;
        // Update state dynamically based on field
        if (field === 'fullName') setFullName(value);
        if (field === 'dob') setDob(value);
        if (field === 'gender') setGender(value);
        if (field === 'address') setAddress(value);
        if (field === 'contactno') setContactno(value);
        if (field === 'email') setEmail(value);
        if (field === 'pincode') setPincode(value);
        if (field === 'proofOfIdentity') setProofOfIdentity(value);

        // Clear error when user starts typing in the respective field
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: '',
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        // Clear image error on file selection
        if (file) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                image: '',
            }));
        }
    };

    return (
        <div className="m-10 p-5">
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row justify-center items-center h-100">
                        <div className="col-12 lg:w-11/12 xl:w-7/12">
                            <div className="card shadow-lg rounded-xl">
                                <div className="card-body p-4 md:p-5">
                                    <h3 className="mb-4 pb-2 md:pb-0 md:mb-5 text-2xl font-semibold">
                                        Personal Details
                                    </h3>
                                    <h4 className="mb-4 pb-2 md:pb-0 md:mb-5 text-2xl font-normal">
                                        Please Provide Your Personal Information
                                    </h4>
                                    <form onSubmit={handleSubmit} validated={validated}>
                                        {/* Full Name Field */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="mb-4">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        id="fullName"
                                                        value={fullName}
                                                        onChange={(e) => setFullName(e.target.value)}
                                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${errors.fullName ? 'border-red-500' : ''
                                                            }`}
                                                        placeholder=" "
                                                        required
                                                    />
                                                    <label
                                                        htmlFor="floating_outlined"
                                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-medium text-lg"
                                                    >
                                                        Fullname *
                                                    </label>
                                                </div>
                                                {/* Show error message below input if there's an error */}
                                                {validated && !fullName && (
                                                    <p className="text-sm text-red-500 mt-2">Full Name is required</p>
                                                )}
                                            </div>
                                            <div className="mb-4">
                                                <div className="relative">
                                                    <input
                                                        type="date"
                                                        id="dob"
                                                        value={dob}
                                                        onChange={(e) => handleChange(e, 'dob')}
                                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" " required
                                                    />
                                                    <label
                                                        htmlFor="dob"
                                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
                                                    >
                                                        Date of Birth
                                                    </label>
                                                </div>
                                                {errors.dob && (
                                                    <p className="text-sm text-red-500 mt-2">
                                                        Please enter your Date of Birth.
                                                    </p>
                                                )}
                                            </div>


                                        </div>

                                        {/* Date of Birth and Gender */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="mb-4">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        id="guardianName"
                                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" "
                                                    />
                                                    <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-medium text-lg font-medium"> Guardian Name
                                                    </label>
                                                </div>

                                            </div>

                                            <div className="mb-4">
                                                <h6 className="mb-2 pb-1 font-medium">Gender:</h6>

                                                <div className="flex items-center ">
                                                    {/* Male Radio Button */}
                                                    <input
                                                        id="male"
                                                        type="radio"
                                                        name="gender"  // Same name for all radio buttons in the group
                                                        value="male"
                                                        onChange={(e) => handleChange(e, 'gender')}

                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required
                                                    />
                                                    <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Male
                                                    </label>
                                                    <div className="flex items-center ms-4">
                                                        {/* Female Radio Button */}
                                                        <input
                                                            id="female"
                                                            type="radio"
                                                            name="gender"  // Same name for all radio buttons in the group
                                                            value="female"
                                                            onChange={(e) => handleChange(e, 'gender')}

                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            Female
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center ms-4">
                                                        {/* Other Radio Button */}
                                                        <input
                                                            id="other"
                                                            type="radio"
                                                            name="gender"  // Same name for all radio buttons in the group
                                                            value="other"
                                                            onChange={(e) => handleChange(e, 'gender')}

                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label htmlFor="other" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            Other
                                                        </label>
                                                    </div>
                                                </div>
                                                {errors.gender && (
                                                    <p className="text-sm text-red-500 mt-2  ">
                                                        <br></br>
                                                        Please enter your Gender.
                                                    </p>
                                                )}


                                            </div>

                                        </div>

                                        {/* Address and Pincode */}
                                        <div className="grid grid-cols">
                                            <div className="mb-4">
                                                <div className="relative">
                                                    <textarea
                                                        type="text"
                                                        id="address"
                                                        value={address}
                                                        onChange={(e) => handleChange(e, 'address')}
                                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" " required
                                                    />
                                                    <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-medium text-lg">Address</label>
                                                </div>
                                                {errors.address && (
                                                    <p className="text-sm text-red-500 mt-2  ">
                                                        <br></br>
                                                        Please enter your Address.
                                                    </p>
                                                )}
                                            </div>


                                        </div>

                                        {/* Contact and Alternative Number */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="mb-4">
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        id="contactNumber"
                                                        value={contactno}
                                                        onChange={(e) => handleChange(e, 'contactno')}
                                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" " required
                                                    />
                                                    <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-medium text-lg">Contact Number</label>
                                                </div>
                                                {errors.contactno && (
                                                    <p className="text-sm text-red-500 mt-2  ">
                                                        <br></br>
                                                        Please enter your Contact Number.
                                                    </p>
                                                )}
                                            </div>

                                            <div className="mb-4">
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        id="altContactNumber"
                                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" "
                                                    />
                                                    <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-medium text-lg">                                                        Alternative Contact Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Email Field */}
                                            <div className="mb-4">
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        id="emailAddress"
                                                        value={email}
                                                        onChange={(e) => handleChange(e, 'email')}
                                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" " required
                                                    />
                                                    <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-medium text-lg"> Email
                                                    </label>
                                                </div>
                                                {errors.email && (
                                                    <p className="text-sm text-red-500 mt-2  ">
                                                        <br></br>
                                                        Please enter your Email.
                                                    </p>
                                                )}
                                            </div>

                                            {/* Pincode Field */}
                                            <div className="mb-4">
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        id="pincode"
                                                        value={pincode}
                                                        onChange={(e) => handleChange(e, 'pincode')}
                                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" " required
                                                    />
                                                    <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-medium text-lg"> Pincode
                                                    </label>
                                                </div>
                                                {errors.pincode && (
                                                    <p className="text-sm text-red-500 mt-2  ">
                                                        <br></br>
                                                        Please enter your Pincode.
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Emergency Contact Field */}
                                            <div className="mb-4">
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        id="emergencyContact"
                                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        placeholder=" " required
                                                    />
                                                    <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-medium text-lg"> Emergency Contact Number
                                                    </label>
                                                </div>
                                            </div>

                                            {/* Proof of Identity Selection */}
                                            <div className="mb-4">
                                                <div className="relative">
                                                    <select
                                                        id="proofOfIdentity"
                                                        value={proofOfIdentity}
                                                        onChange={(e) => handleChange(e, 'proofOfIdentity')}
                                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" required
                                                    >
                                                        <option value="" disabled selected>
                                                            Select Proof of Identity
                                                        </option>
                                                        <option value="aadhaar">Aadhaar</option>
                                                        <option value="passport">Passport</option>
                                                        <option value="voterId">Voter ID</option>
                                                        <option value="drivingLicense">Driving License</option>
                                                    </select>
                                                    {/* Dropdown arrow icon */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.23 7.79a1 1 0 011.41 0L10 11.12l3.36-3.33a1 1 0 111.42 1.41l-4 4a1 1 0 01-1.42 0l-4-4a1 1 0 010-1.41z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <label
                                                        htmlFor="proofOfIdentity"
                                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 font-medium text-lg"
                                                    >
                                                        Proof of Identity
                                                    </label>
                                                </div>
                                                {errors.proofOfIdentity && (
                                                    <p className="text-sm text-red-500 mt-2">
                                                        {errors.proofOfIdentity}
                                                    </p>
                                                )}
                                            </div>

                                        </div>

                                                <label className='font-normal mb-3'>Upload File:</label>
                                        <div class="flex items-center justify-center w-full"> 
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 500x400px)</p>
                                                </div>
                                                <input id="dropzone-file"
                                                    type="file" onChange={handleFileChange}
                                                    className="hidden"
                                                    required />
                                            </label>
                                        </div>
                                        {errors.image && (
                                            <p className="text-sm text-red-500 mt-2">{errors.image}</p>
                                        )}


                                        {/* Submit Button */}
                                        <div className="mt-4 pt-2">
                                            <button 
                                                type="submit"
                                                className="btn btn-primary btn-lg float-end py-2 px-4 rounded-md text-white bg-primary-500 focus:outline-none flex align-items-center gap-2"
                                            >
                                                Next <FaArrowRightLong />
                                            </button>
                                            

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
