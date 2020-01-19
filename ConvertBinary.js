var blobURL;
var fileName;

// Convert a base64 string into a binary Uint8 Array 

function convertDataURIToBinary(dataURI) {
    var BASE64_MARKER = ';base64,';
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}

// File Reader
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
function readFile(evt) {
    var f = evt.target.files[0];

    if (f) {
        if (/(jpe?g|png|gif)$/i.test(f.type)) {
            var r = new FileReader();
            r.onload = function (e) {
                var base64Img = e.target.result;
                var binaryImg = convertDataURIToBinary(base64Img);
                var blob = new Blob([binaryImg], { type: f.type });
                blobURL = window.URL.createObjectURL(blob);
                fileName = f.name;
                document.getElementById('nameImg').value = fileName;
                document.getElementById('typeImg').value = f.type;
                document.getElementById('sizeImg').value = f.size;
                document.getElementById('base64Url').value = base64Img;
                document.getElementById('blobUrl').value = blobURL;
                document.getElementById('base64Img').src = base64Img;
                document.getElementById('blobImg').src = blobURL;
                document.getElementById('binaryImg').innerHTML = JSON.stringify(binaryImg, null, 2);
            }
            r.readAsDataURL(f);
        } else {
            alert("Failed file type");
        }
    } else {
        alert("Failed to load file");
    }
}

var downloadFile = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function () {
        a.href = blobURL;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(blobURL);
    };
}());

document.getElementById('inputImg').addEventListener('change', readFile, false);
document.getElementById('saveImg').addEventListener('click', downloadFile, false);