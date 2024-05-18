$(document).ready(() => {
    function getJoke() {
        const data = {
            fullname: $("#name").val(),
            todo: $("#todo").val()
        }
        $.ajax({
                url: "https://project-f1aa15.apibrew.io:8443/text",
                type: "POST",
                headers: {
                    'accept': 'application/json',
                    'Authorization': ' API key '
                },
                data: JSON.stringify(data)
            })
            .done((response) => {
                $("#list").append(`
                <ul>
                    <li>${$("#name").val()}</li>
                    <li>${$("#todo").val()}</li>
                </ul>
                `)
            })
            .fail((response) => {
                console.log(response)
            })
    }
    // for submit
    $("#btn").click(getJoke) 
    // for enter keyboard / not selected btn
    $("body").on("keydown",(e) => {
        if(e.key=="Enter" && e.target.id!="btn") {
            getJoke()
        }
      })
})




















// fetch('https://project-f1aa15.apibrew.io:8443/text', {
//   method: 'GET',
//   headers: {
//     'accept': 'application/json',
//     'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tL2FwaWJyZXcvYXBpYnJldyIsInN1YiI6ImNvbnRyb2xsZXIiLCJhdWQiOlsiZ2l0aHViLmNvbS9hcGlicmV3L2FwaWJyZXciXSwiZXhwIjoxNzIxMjM3ODA0LCJuYmYiOjE3MTYwNTM4MDQsImlhdCI6MTcxNjA1MzgwNCwianRpIjoiMTdmMWI3NzktNDA0Yy00ZmJkLWFjM2ItOTRlYjk3ODAxZjhkIiwidXNlcm5hbWUiOiJjb250cm9sbGVyIiwidWlkIjoiOTUzNGU4ODktM2VjYy00ODdmLTk5YTQtMTdkYmYxZTIyYTNhIiwic2NvcGVzIjpbIjo6RlVMTDo6Ojo6OkFMTE9XIl0sInBlcm1pc3Npb25zIjpbeyJpZCI6IjA1ZmMxZWRmLTgyODAtNGJkZC05NzhiLTlmYmJkYWE3OTgxOCIsInZlcnNpb24iOjEsIm9wZXJhdGlvbiI6IkZVTEwiLCJwZXJtaXQiOiJBTExPVyJ9LHsiaWQiOiIwNWZjMWVkZi04MjgwLTRiZGQtOTc4Yi05ZmJiZGFhNzk4MTgiLCJ2ZXJzaW9uIjoxLCJvcGVyYXRpb24iOiJGVUxMIiwicGVybWl0IjoiQUxMT1cifV19.r920itFr5jfSbag-olcNu3bWhcvvexy-JWU1uSZXyAuzlkct8zNPYejigpXmQE9YINcjPVR9c7_VCb_i0wwUc2jHGihGqbn7HpZrycUqJVd6fP4Y_SrnjUT2ZTw3XAHcCn3wDkLod67AfmGr69TSLndxr5zyZHwdUfpxB4w2F0U'
//   }
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with your fetch operation:', error);
//   });
