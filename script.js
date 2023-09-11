var clutter = "";

function encryption(){
    document.querySelector('#encrypt-btn').addEventListener('click',function(){
        var input = document.getElementById("txtmsg").value
        console.log(input)
        var password = document.getElementById("password").value
        console.log(password)

        const str = input.split("")
        console.log(str)

        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()} `
        });
        console.log(clutter)

        //document.querySelector('#result').style.display ="block"
        document.querySelector('#result').innerHTML = clutter

        var dataArr = [];

        if(JSON.parse(localStorage.getItem('data1'))){
            dataArr = JSON.parse(localStorage.getItem('data1'))
            dataArr.push({"pass": password, "input": input, "clutter": clutter})

        }else{
            dataArr.push({"pass": password, "input": input, "clutter": clutter})

        }

       // dataArr = [{"pass": password, "input": input, "clutter": clutter}]
        
        localStorage.setItem('data1', JSON.stringify(dataArr))
    })
}
encryption();

function decryption(){
    document.querySelector("#decrypt-btn").addEventListener('click',function(){
        var clutter2 = "";
        //getting an emoji msg
        var input2 = document.querySelector("#emojimsg").value
        //getting final password
        var pass2 = document.querySelector("#finalpassword").value

        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)

        var str2 = input2.split(" ")
        str2.forEach(element =>{
            clutter2 += ` &#128${element.codePointAt(0)}`
        })
        console.log(clutter2)

        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i
                console.log(i)
            }
        }
        if(found.clutter === clutter2){
            document.querySelector("#result").style.display = 'block'
            document.querySelector("#result").style.color = '#eee'
            document.querySelector("#result").innerHTML = found.input
        }else{
            document.querySelector("#result").style.display = 'block'
            document.querySelector("#result").style.color = '#eee'
            document.querySelector("#result").innerHTML = 'Wrong Password'
            
        }
    })

}
decryption();




function btnClicking(){
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#1c1c1c"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate="180deg"
        document.querySelector("#result").style.display = "none"

    })
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#enc-btn").style.backgroundColor = "#1c1c1c"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate="0deg"
        document.querySelector("#result").style.display = "none"
    })
    document.querySelector("#encrypt-btn").addEventListener("click",function(){
        document.querySelector("#result").style.display = "block"
    })
    document.querySelector("#decrypt-btn").addEventListener("click",function(){
        document.querySelector("#result").style.display = "block"
    })
}
btnClicking()



