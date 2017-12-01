function onSignIn(response) {
    // Conseguindo as informações do seu usuário:
    var perfil = response.getBasicProfile();
 
    // Conseguindo o ID do Usuário
    var userID = perfil.getId();
 
    // Conseguindo o Nome do Usuário
    var userName = perfil.getName();
 
    // Conseguindo o E-mail do Usuário
    var userEmail = perfil.getEmail();
 
    // Conseguindo a URL da Foto do Perfil
    var userPicture = perfil.getImageUrl();
 
    document.getElementById('user-photo').src = userPicture;
    document.getElementById('user-name').innerText = userName;
    document.getElementById('user-email').innerText = userEmail;
 
    // Recebendo o TOKEN que você usará nas demais requisições à API:
    var LoR = response.getAuthResponse().id_token;
    console.log("~ le Tolkien: " + LoR);   
    
   // updateSigninStatus();
   window.location.href = "https://localhost/ProjetoNetBeans/DesafioDevVoxus/public_html/cadastro.html";
                        
};

 function updateSigninStatus(isSignedIn) {
        // When signin status changes, this function is called.
        // If the signin status is changed to signedIn, we make an API call.
        if (isSignedIn) {
          
        }
      }
        
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
    });
}