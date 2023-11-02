const button2= document.getElementById("btn")

const handleForm =(event)=>{

    event.preventDefault()

    const firstName = document.getElementById("i1").value
    const lastName = document.getElementById("i2").value
    const email = document.getElementById("i3").value
    const password = document.getElementById("i4").value
    
    const error0ne = document.getElementById("error1")
    const errortwo = document.getElementById("error2")
    const errorThree = document.getElementById("error1")
    const errorfour = document.getElementById("error2")



    if(!firstName){
        error0ne.textContent = "please enter your firstname"
     } else if(!lastName){
         errortwo.textContent = "please enter your lastname "
     }
    if(!email){
       errorThree.textContent = "please enter an email"
    } else if(!password){
        errorfour.textContent = "please enter a password"
    }
    console.log({firstName, lastName, email, password});
    
}


button2.addEventListener("click",
handleForm)
 





 const button3 = document.getElementById("btnn")

 const handleFormm =(Event)=>{

    Event.preventDefault()
    const email = document.getElementById("i3").value
    const password = document.getElementById("i4").value


    if(!email){
        errorThree.textContent = "please enter your email"
    } else if(!password){
        errorFour.textContent = "please enter password"
    }
    console.log({email, password});
 }

 





  