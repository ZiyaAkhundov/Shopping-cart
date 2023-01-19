if(localStorage.length==0){
    let temp=`<p class="noProducts">No products</p>`;
    $(".cartProducts-blocks").append(temp);
}
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    // console.log(`${key}: ${JSON.parse(localStorage.getItem(key)).imagesrc}`)
    let temp=`
    <div class="cart-products" productId=${key}>
        <div class="cart-image">
            <img src="${JSON.parse(localStorage.getItem(key)).imagesrc}">
        </div>
        <div class="cart-product-description">
            <p class="cart-product-description-p" title="${JSON.parse(localStorage.getItem(key)).productDescription}">${JSON.parse(localStorage.getItem(key)).productDescription}</p>
            <p class="cart-product-price"><span>${JSON.parse(localStorage.getItem(key)).productPrice}</span><span>$</span></p>
        </div>
        <div class="cart-product-count">
            <i class="fa-solid fa-plus" productId=${key}></i>
            <p id="cartProduct-count">${JSON.parse(localStorage.getItem(key)).count}</p>
            <i class="fa-solid fa-minus" productId=${key}></i>
        </div>
        <div class="cart-buttons">
            <button acceptid="accept" productid="${key}">Pay</button>
            <button removeid="remove" productid="${key}">Remove</button>
        </div>
    </div>
    `;
    $(".cartProducts-blocks").append(temp)
  }
  $.each($("[removeid=remove]"),function(key,val){
    $(val).click(function(){
        for(let i=0;i<localStorage.length;i++){
            if(localStorage.key(i)==$(val).attr("productid")){
                localStorage.removeItem($(val).attr("productid"));
            }
    }
    let product=document.querySelectorAll(".cart-products");
    product.forEach(element => {
       if($(element).attr("productId")==$(val).attr("productid")){
        $(element).remove()
       }
    }); 
    })
  });
$.each($(".fa-plus"),function(key,val){
    let n=Number($(val).parent().parent().children().eq(1).find(".cart-product-price").children().eq(0).text())
    $(val).click(function(){
        $(val).siblings("#cartProduct-count").text(Number($(val).siblings("#cartProduct-count").text())+1);
        $(val).parent().parent().children().eq(1).find(".cart-product-price").children().eq(0).text(n*(Number($(val).siblings("#cartProduct-count").text())))
        console.log( $(val).parent().children().eq(1).find(".cart-product-price").children().eq(0).text());
    })
})
$.each($(".fa-minus"),function(key,val){
    let n=Number($(val).parent().parent().children().eq(1).find(".cart-product-price").children().eq(0).text())
    $(val).click(function(){
        if(Number($(val).siblings("#cartProduct-count").text())>1){
             $(val).siblings("#cartProduct-count").text(Number($(val).siblings("#cartProduct-count").text())-1);
             $(val).parent().parent().children().eq(1).find(".cart-product-price").children().eq(0).text(n*(Number($(val).siblings("#cartProduct-count").text())))
        }
    })
})

