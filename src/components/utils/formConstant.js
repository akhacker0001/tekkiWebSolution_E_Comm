const formMapping = [
    { name: "firstName", label: "First Name", key: "firstName", inputType: "text", size: 6 },
    { name: "lastName", label: "Last Name", key: "lastName", inputType: "text", size: 6 },
    { name: "email", label: "Enter Email Address", key: "email", inputType: "text", size: 6 },
    { name: "phoneNo", label: "Enter Phone Number", key: "phoneNo", inputType: "number", size: 12 },

]
const formInitialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: ""

}

const errorFieldMapping = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
}


const errorFieldMessages = {
    firstName: "please atlest three character",
    lastName: "please atlest three character",
    email: "please provide a valid email address",
    phoneNo: "please provide a phone number",
}

const interfaces = {
    dashboard: "dashboard",
    cart: "cart",
    review: 'review'
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
const fieldCondition = {
    firstName: (firstName) => {
        if (firstName.length <  3) {
            return true
        }
        return false

    },
    lastName: (lastName) => {
        if (lastName.length < 3) {
            return true
        }
        return false

    },
    email: (email)=>{
        if(validateEmail(email)) {return false}
        return true

    },
    phoneNo:(phoneNumber)=>{
        if(phoneNumber.toString().length === 10) {
            return false
        }
        return true
    },

}

export {
    formMapping,
    interfaces,
    errorFieldMapping,
    formInitialState,
    fieldCondition,
    errorFieldMessages
}