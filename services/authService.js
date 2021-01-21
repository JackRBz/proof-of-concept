const validateInput = async (user) =>{
    const {first_name, last_name, email, password1, password2} = user;
    let errors = [];

    if (!first_name || !last_name || !email || !password1 || !password2) {
        errors.push({ msg: "Please enter all fields" });
      }
    
      if (password1 !== password2) {
        errors.push({ msg: "Passwords do not match" });
      }
    
      if (password1.length < 6) {
        errors.push({ msg: "Password must be at least 6 characters" });
      }

      return errors;
}


module.exports = {validateInput}