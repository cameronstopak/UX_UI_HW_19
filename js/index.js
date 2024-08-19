document.addEventListener("DOMContentLoaded", function() { 
  document.getElementById("Work").addEventListener("click", function() { 
    window.scrollTo({ top: document.getElementById("WorkSection").offsetTop, behavior: "smooth" 
    }); })
  

    document.getElementById("Skills").addEventListener("click", function() { 
      window.scrollTo({ top: document.getElementById("SkillsSection").offsetTop, behavior: "smooth" 
      }); })

      document.getElementById("About").addEventListener("click", function() { 
        window.scrollTo({ top: document.getElementById("HeroContainer").offsetTop, behavior: "smooth" 
        }); })
  


      document.getElementById("Contact").addEventListener("click", function() { 
        window.scrollTo({ top: document.getElementById("FooterSection").offsetTop, behavior: "smooth" 
        }); });
      
      });

