let main = document.querySelector("main")
let selectBox = document.querySelector("select")



async function get(){

    let tercih = selectBox.options[selectBox.selectedIndex].value

    const response = await fetch("https://restcountries.com/v3.1/all")
    const response_json = await response.json()
    console.log(response_json)

     response_json.forEach(element => {

        if(element.region == tercih){
         main.innerHTML+=`
         <div>
         
          <h2>${element.name.common}</h2>
          <h4>Region: ${element.region}</h4>
          <h4>Area: ${element.area}/km</h4>
          <h4>Population: ${element.population}</h4>
          <img src=${element.flags.png}>



         </div>
         `
         
        }
    });
}





   
    


   
    


   

