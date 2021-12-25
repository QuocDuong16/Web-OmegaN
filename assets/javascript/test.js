function ShowIfSP(SP) {
    document.getElementById("ThongTinSP").style.display = 'flex';
    document.getElementById("ifSP_Overlay").style.display = 'flex';
    console.log(SP);
    id = (SP.split(/[SP]/));
    var IDimg = "img" + id[2];
    var img = $('#SP' + id[2] + ' img').attr('src');
    var name = document.getElementById("name" + (id[2] - 1) + "").innerHTML;
    var price = document.getElementById("price" + (id[2] - 1) + "").innerHTML;
    console.log(price);
    document.getElementById("ThongTinSP").innerHTML = '<img src="' + img + '" alt=""><div id="ThongTinSP_text"><div id="name_TTSP">' + name + '</div><div id="gia_TTSP">' + price + '</div><div ><input class="SoluongSP" type="button" value="-" onclick="TangSLSP(this.value)"><input class="SoluongSP" id="soluongSP" type="text" min="1" max="10" value="1"><input class="SoluongSP"type="button" value="+" onclick="TangSLSP(this.value)"></div><input id="order" type="button" onclick="check();getTTSP();" value="Order"></div>'
}