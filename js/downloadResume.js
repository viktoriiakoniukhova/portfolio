document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Define the path to your PDF file in the "assets" folder
    const pdfFilePath = "assets/CV_Viktoriia.pdf";

    // Create a hidden anchor element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfFilePath;
    downloadLink.download = "CV_Viktoriia.pdf";

    // Trigger the click event of the anchor element to start the download
    downloadLink.click();
  });
