// let mainEl = document.g("main");
// mainEl.style.color= "var(--main-bg)"
// You can try this.
var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
  ];
  
  
  
  let mainEl = document.querySelector("main");
  mainEl.style.backgroundColor = "var(--main-bg)";
  
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
  
  mainEl.className = "flex-ctr";
  
  let topMenuEl = document.getElementById("top-menu");
  
  topMenuEl.style.height = "100%";
  
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  
  topMenuEl.className = "flex-around";
  
  function menu(arr, menu1) {
    arr.forEach((element) => {
    // created anchor tags
  let newAnchor = document.createElement('a');
  
  // created href attributes
  newAnchor.setAttribute('href', element.href);
  
  // set new elements content text property of link object
  newAnchor.innerHTML = element.text;
  
  menu1.append(newAnchor);
  
  }
    )
  }
  menu(menuLinks, topMenuEl)
  