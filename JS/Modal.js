//Close modal on click outside of picture
window.onclick = function(event) {
	var modal = document.getElementById('myModal');
	var modalImg = document.getElementById("pic");
	var cap = document.getElementById("caption");

	if ((event.target == cap) || (event.target == modal)) {
	  modal.style.display = "none";
	}
}
//Display modal on click of image
function show_modal(img_src, caption){
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("pic");
    var captionText = document.getElementById("caption");
    var b = document.getElementsByTagName('body')[0];
    modal.style.display = "block";
    modalImg.src = img_src;
    captionText.innerHTML = caption;
    b.style.overflow = "hidden";
}
//Close modal on click of X
function closeModal(){
    var modal = document.getElementById('myModal');
    var b = document.getElementsByTagName('body')[0];
    modal.style.display = "none";
    b.style.overflow = "auto";
}

