function sendMail(){
    var a ={
        name:document.getElementById("name").value,
        name:document.getElementById("lastname").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
    const serviceID="service_960cyca";
const templateID="template_48z0yqa";


emailjs.send(serviceID,templateID,a)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("lastname").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send successfully")
    }
)
.catch((err) => console.log(err)); 
}

