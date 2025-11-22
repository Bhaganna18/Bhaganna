// When the "Download Resume" button is clicked, download your PDF file
document.addEventListener("DOMContentLoaded", function() {
  const downloadBtn = document.getElementById("downloadBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function(e) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = "Bhaganna Kudare"; // PDF file should be in the same folder
      link.download = "Bhaganna_Choudappa_Kudare_Resume.jpg";
      link.click();
    });
  }
});