function userinput(){
    var univname = document.getElementById("name").value
    var univcountry = document.getElementById("country").value
  
    fetch(`http://universities.hipolabs.com/search?name=${univname}&country=${univcountry}`)
    .then((response) => response.json())
    .then((data) => {
       console.log(data)
  
       var header = document.getElementById("display")
       header.innerHTML = data[0].name + data[0].web_pages[0] + data[0].country ;
    for (let count=0 ; count < 5 ; count++ ){
      var lists = document.createElement("li")
      var place = document.getElementById("displaydata")
      let random = (Math.floor(Math.random() * data.length))
      lists.innerHTML =  "University Name: " + data[random].name + "\n//Website Link: " + data[random].web_pages[0] + "\n//Country: " +data[random].country;
      place.appendChild(lists)
    
  
    }
  })
  .catch(err => alert("Sorry, Please Enter Different Data!"));
  }
function close_window() {
  if (confirm("Close Window?")) {
    close();
  }
} 