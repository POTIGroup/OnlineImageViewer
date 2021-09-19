if (window.File) {
    document.getElementById("dropuploader").addEventListener("drop", onDrop, false);
}

if (!window.File) {
    alert("Sorry, It doesnt work your browser. Because your browser has not FileAPI.");
}

function onDrop(event) {
    var files = event.dataTransfer.files;
    var uploadButton = document.getElementById ("")

    for (var i = 0; i < files.length; i++) {
        var f = files[i];
        var reader = new FileReader();

        if (!f.type.match('image.*')) {
            alert("The file is not work");
            continue;
        }

        reader.onerror = function(e) {
            alert ("An Error");
        }

        if (f.type.match('image.*')) {
            reader.onload = function(e) {
                var img = document.getElementById("imagedisplay");
                img.src = e.target.result;

                ChangeEditor();
            }
            reader.readAsDataURL(f);
        }
    }

    event.preventDefault();
}

var file = document.getElementById('filebrowser');
var button = document.getElementById('uploadbutton');

uploadbutton.addEventListener("click", function(e) {
    if (file) {
        file.click();
        var reader = new FileReader();

        reader.onload = function(e) {
            var src = e.target.result;
        }
    }
}, false);

function ChangeEditor (event) {
    var uploadButton = document.getElementById ("uploadbutton");
    var dropuploader = document.getElementById ("dropuploader");

    uploadButton.style.visibility = "hidden";
    dropuploader.style.visibility = "hidden";
}
