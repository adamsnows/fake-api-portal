const img = document.getElementById("avatar"); /* input do tipo file */
​
document
  .getElementById("pegarAvatar" /* Botão de envio */)
  .addEventListener("click", async () => {
    //cria os headers e coloca o Authorization
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Client-ID {{Cole aqui o seu clientID}}"); // o client id vocÊ pega assim que registra a sua aplicação no imgur é bem fácil
​
    //cria um objeto com a chave image pedida pela api e o valor é o que for colocado no input
    let formdata = new FormData();
    formdata.append("image", img.files[0]);
​
    //cria os options
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
​
    return await fetch("https://api.imgur.com/3/image", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => console.log("error", error));
  });