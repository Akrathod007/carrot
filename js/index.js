window.onload = function () {
  var accountMenu = document.getElementById("account");
  accountMenu.onmouseover = () => {
    const dropdown = document.getElementById("account-menu");
    dropdown.style.display = "flex";
  };
  // accountMenu.onmouseout = (e) => {
  //   const dropdown = document.getElementById("account-menu");
  //   dropdown.style.display = "none";
  // };

  //Open Cart Menu
  const cartBtn = document.getElementById("cart");
  cartBtn.onclick = () => {
    const overlay = document.getElementById("cart-overlay");
    const cartList = document.getElementById("cart-list");
    overlay.style.display = "block";
    cartList.style.animation = "cartList 0.5s linear forwards";
  };

  const closeBtn = document.getElementById("close-btn");
  closeBtn.onclick = () => {
    const cartList = document.getElementById("cart-list");
    const overlay = document.getElementById("cart-overlay");
    cartList.style.animation = "cartListClose 0.5s linear forwards";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 600);
  };

  // Increase and decrease qty
  const increaseQnt = document.getElementsByClassName("increase-qnt");
  for (var btn of increaseQnt) {
    btn.onclick = (e) => {
      const div = e.target.parentElement;
      const label = div.getElementsByClassName("qnt")[0];
      const text = Number(label.innerHTML);
      label.innerHTML = text + 1;
    };
  }

  const decreaseQnt = document.getElementsByClassName("decrease-qnt");
  for (var btn of decreaseQnt) {
    btn.onclick = (e) => {
      const div = e.target.parentElement;
      const label = div.getElementsByClassName("qnt")[0];
      const text = Number(label.innerHTML);
      if (text > 1) {
        label.innerHTML = text - 1;
      }
    };
  }
  setInterval(() => {
    const time = new Date().toLocaleTimeString().split(":");
    console.log(time);
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    var seconds = document.getElementById("second");
    var second = time[2].toString().split(" ");

    hour.innerHTML = time[0];
    minute.innerHTML = time[1];
    seconds.innerHTML = second[0];
  }, 1000);
};
