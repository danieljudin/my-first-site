function light(sw) {

    var pic;
    if (sw == 0) {
      pic = "https://www.w3schools.com/js/pic_bulboff.gif"
    } else {
      pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2biJRStuHK-QL44qUM7TZsJs_uhmzqNozV09uGkum_pzU4e_se_K8p0xN3pxBmRlges&usqp=CAU"
    }
    document.getElementById('myImage').src = pic;
}