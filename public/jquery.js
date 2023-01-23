var products_array=[
    {imagesrc:"tree/main/images/Picture1.jpg",id:"g102",imageparagraph:" G G102 LIGHTSYNC RGB Aydınlatmalı 8.000 DPI Kablolu Oyuncu Mouse - Siyah G102 Lightsync ",productfactory:"logitech",price:"20"},
    {imagesrc:"tree/main/images/Picture2.jpg",id:"A400",imageparagraph:" A400 Ssd 240gb 500mb-350mb/s Sata3 Ssd (Sa400s37/240g) 210129779 ",productfactory:"Kingston" ,price:"10"},
    {imagesrc:"tree/main/images/Picture3.jpg",id:"Dtxm/256",imageparagraph:" Dtxm/256 256gb Usb3.2 Gen.1 Datatraveler Exodia M Usb Flash Bellek Dtxm 256 DTXM/256GB ",productfactory:"Kingston" ,price:"40"},
    {imagesrc:"tree/main/images/Picture4.jpg",id:"82h802rltx",imageparagraph:" Ideapad 3 82h802rltx I5 1135g7 8gb 256gb Ssd 15.6 Windows 11 Home Taşınabilir Bilgisayar 82H802RLTX",productfactory:"LENOVO" ,price:"1500"},
    {imagesrc:"tree/main/images/Picture5.jpg",id:"P68",imageparagraph:" P68 Bluetooth Kablosuz Stereo Kulaklık - Siyah ",productfactory:"Universal" ,price:"56"},
    {imagesrc:"tree/main/images/Picture6.jpg",id:"Klasse",imageparagraph:" Klasse Tiger Longteng Huoyun Special Edition 480x400x4 Mm E-sports Oyuncu Mouse Pad Mousepad 1026953",productfactory:"Kl-asse Markt" ,price:"23"},
    {imagesrc:"tree/main/images/Picture7.jpg",id:"G3420",imageparagraph:" Pıxma G3420 Photoink Wifi Mürekkepli Megatank Yazıcı 8681987430459 ",productfactory:"Canon",price:"420"},
    {imagesrc:"tree/main/images/Picture8.jpg",id:"FRNKTN20372",imageparagraph:" Erkek Saat Cüzdan Kemer Kartlık Hediye Seti 20-001 FRNKTN20372 ",productfactory:"Frank Martin" ,price:"30"}];
    
    $(document).ready(function() {
    function productInsert(){
        $.each(products_array, function(key,val) {             
            let temp=`
            <div class="products" id="${val.id}">
                <div class="products-image">
                    <img title="${val.id}" src="${val.imagesrc}">
                </div>
                <div class="products-paragraph">
                    <p class="product-p">${val.imageparagraph}</p>
                    <p class="product-price"><span>${val.price}</span><span>$</span></p>
                </div>
                <div class="products-buttons">
                    <button class="productButton">Add Cart</button>
                </div>
            </div>
            `;     
            $(".products-blocks").append(temp);
        });  
    }
    productInsert();
    let prodcutsbutton=$(".productButton");
    $.each(prodcutsbutton,function(key,val){
        $(val).on("click",function(){

            $("#productCount").text(Number($("#productCount").text())+1)
            $(this).text("Product has been added cart");
            $(this).removeClass("productButton");
            $(this).addClass("addCart");
          let productid=$(this).parents(".products").attr("id");
          let productinfo={
            imagesrc:$(this).parent().parent().children().eq(0).children().eq(0).attr("src"),
            productDescription:$(this).parent().parent().children().eq(1).children().eq(0).text(),
            productPrice:$(this).parent().parent().children().eq(1).children().eq(1).children().eq(0).text(),
            count:1
          }
         
           localStorage.setItem(productid,JSON.stringify(productinfo))
        })
    })
    // localStorage.removeItem("P68");
    $.each(products_array,function(key,val){
            for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
            $.each($(".products"),function(key,val){
                if(localStorage.key(i)==val.id){
                    $(val).children().eq(2).children().text("Product has been added cart")
                $(val).children().eq(2).children().addClass("addCart")
                $(val).children().eq(2).children().removeClass("productButton")
            }
            })
      }
        })
    $("#productCount").text(localStorage.length)
});

