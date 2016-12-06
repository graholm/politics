$.ajax({
  method: "GET",
  url: "https://www.govtrack.us/api/v2/person",
  success: function(data) {  
    var arr = []
    data.objects.forEach(function(object){
    arr.push(object.firstname)
    console.log (object.firstname) 
    })
  }
})

