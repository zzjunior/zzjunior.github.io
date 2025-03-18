document.addEventListener("DOMContentLoaded", function () {
    const profileContainer = document.getElementById("profile-container");
  
    const profileImage = document.createElement("img");
    profileImage.src = "/assets/images/perfil.jpg";
    profileImage.alt = "Foto de Perfil";
    profileImage.className = "rounded-full w-32 h-32 border-4 border-gray-700 shadow-lg";
  
    profileContainer.appendChild(profileImage);
  });
  