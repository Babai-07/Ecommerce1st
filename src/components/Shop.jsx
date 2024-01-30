import React from 'react'

function shop() {
  return (
    <>
    
<section>
    <div class="shopBox">
        <div class="shop-box">
            <div class="shopList">
                <ul>
                    <li class="shop-h1"><h1>Walkers</h1></li>
                    <li>Play Tents</li>
                    <li>Toy Robots</li>
                    <li>Wooden Toys</li>
                </ul>
                <ul>
                    <li class="shop-h1"><h1>Baby Dolls</h1></li>
                    <li>Doll Luisa 8" Doll</li>
                    <li>Baby Doll Dark</li>
                    <li>Fashion Doll</li>
                </ul>
                <ul>
                    <li class="shop-h1"><h1>Cars toy</h1></li>
                    <li>Toyta Red Car</li>
                    <li>Honda Black Car</li>
                    <li>Wired Car Dol</li>
                </ul>
                <ul>
                    <li class="shop-h1"><h1>Shop By Age</h1></li>
                    <li>0-12 Months</li>
                    <li>1 To 2 Years</li>
                    <li>2 To 4 Years</li>
                </ul>
            </div>
            <div class="shopImg">
            <img
                  src={require("../kidsimg/b3.jpg")}
                  alt="Toyman kids"
                />
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default shop