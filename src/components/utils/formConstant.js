const formMapping = [
    { name: "firstName", label: "First Name", key: "firstName", inputType: "text", size: 6 },
    { name: "lastName", label: "Last Name", key: "lastName", inputType: "text", size: 6 },
    { name: "email", label: "Enter Email Address", key: "email", inputType: "text", size: 6 },
    { name: "phoneNo", label: "Enter Phone Number", key: "phoneNo", inputType: "number", size: 6 },
    { name: "address", label: "Enter Your Address", key: "phoneNo", inputType: "text", size: 12 },
]

const interfaces = {
    dashboard:"dashboard",
    cart:"cart",
    review:'review'
}

export {
    formMapping,
    interfaces
}