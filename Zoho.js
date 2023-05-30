function loadZohoForm() {
    var zohoForm = document.getElementById("zohoForm");
    if (zohoForm) {
      var zohoEmbedScript = document.createElement('script');
      zohoEmbedScript.src = "https://js.zohostatic.com/forms/v2/js/form_embed.js";
      zohoForm.appendChild(zohoEmbedScript);
    }
  }
  
  window.addEventListener("load", loadZohoForm);
  