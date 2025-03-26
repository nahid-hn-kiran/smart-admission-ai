// // Drag and drop functionality
// const dropArea = document.getElementById("dropArea");
// const fileInput = document.getElementById("fileInput");

// // Prevent default drag behaviors
// ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
//   dropArea.addEventListener(eventName, preventDefaults, false);
//   document.body.addEventListener(eventName, preventDefaults, false);
// });

// // Highlight drop area when dragging over it
// ["dragenter", "dragover"].forEach((eventName) => {
//   dropArea.addEventListener(eventName, highlight, false);
// });

// ["dragleave", "drop"].forEach((eventName) => {
//   dropArea.addEventListener(eventName, unhighlight, false);
// });

// // Handle dropped files
// dropArea.addEventListener("drop", handleDrop, false);

// // Handle file selection
// fileInput.addEventListener("change", handleFiles, false);

// function preventDefaults(e) {
//   e.preventDefault();
//   e.stopPropagation();
// }

// function highlight() {
//   dropArea.style.borderColor = "#4a8cff";
//   dropArea.style.backgroundColor = "#f0f7ff";
// }

// function unhighlight() {
//   dropArea.style.borderColor = "#cbd5e0";
//   dropArea.style.backgroundColor = "white";
// }

// function handleDrop(e) {
//   const dt = e.dataTransfer;
//   const files = dt.files;
//   handleFiles(files);
// }

// function handleFiles(e) {
//   const files = e.target?.files || e;
//   const fileNames = [];

//   for (let i = 0; i < files.length; i++) {
//     fileNames.push(files[i].name);
//   }

//   if (fileNames.length > 0) {
//     alert("Files selected: " + fileNames.join(", "));
//     // Here you would normally upload the files to a server
//   }
// }

// // Form submission
// const submitBtn = document.querySelector(".btn-primary");
// submitBtn.addEventListener("click", function () {
//   alert(
//     "Your essay has been submitted for AI review. You will receive feedback shortly."
//   );
// });

// Toggle switches Desktop
$("#desktop-menu-toggle").click(function () {
  $(".desktop-sidebar").css("display", "block").animate({ left: "0" }, 300);
});

$("#desktop-menu-close").click(function () {
  $(".desktop-sidebar").animate({ left: "-250px" }, 300, function () {
    $(this).css("display", "none");
  });
});

// Toggle Switches Mobile
$("#mobile-menu-toggle").click(function () {
  $(".mobile-sidebar").css("display", "block").animate({ left: "0" }, 300);
});

$("#mobile-menu-close").click(function () {
  $(".mobile-sidebar").animate({ left: "-250px" }, 300, function () {
    $(this).css("display", "none");
  });
});
// Toggle Switches Dashboard Menu
$("#dashboard-menu-toggle").click(function () {
  $(".tablet-dashboard").css("display", "block").animate({ left: "0" }, 300);
});

$("#dashboard-menu-close").click(function () {
  $(".tablet-dashboard").animate({ left: "-250px" }, 300, function () {
    $(this).css("display", "none");
  });
});

// Acordion
$(".form4-accordion").click(function () {
  // Close any other open accordions
  $(".accordion-content").not($(this).next()).slideUp(300);
  $(".form4-accordion i")
    .not($(this).find("i"))
    .removeClass("fa-minus")
    .addClass("fa-plus");

  // Toggle current accordion
  $(this).next(".accordion-content").stop(true, true).slideToggle(300);
  $(this).find("i").toggleClass("fa-plus fa-minus");
});
