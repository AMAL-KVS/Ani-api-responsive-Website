var check = true;
function chatOpen() {
  if (check) {
    document.getElementById("chatScreen").style.display = "block";
    document.getElementById("floatBtn").style.display = "none";
    document.getElementById("floatBtnSend").style.display = "block";
    document.getElementById("floatBanner").style.display = "none";
  }
}
function chatClose() {
  document.getElementById("chatScreen").style.display = "none";
  document.getElementById("floatBtn").style.display = "block";
  document.getElementById("floatBtnSend").style.display = "none";
  document.getElementById("floatBanner").style.display = "block";
}

// chatscreen
var chatCount = 1;
function chatSend() {
  var text = document.getElementById("msgInput").value;
  if (text.length > 0) {
    switch (chatCount) {
      case 1:
        var msg = document.getElementById("msgInput").value;
        document.getElementById("SingleChat-1").style.display = "block";
        document.getElementById("InnerChat1").innerHTML = msg;
        document.getElementById("msgInput").value = "";
        chatCount = 2;
        break;
      case 2:
        var msg = document.getElementById("msgInput").value;
        document.getElementById("SingleChat-2").style.display = "block";
        document.getElementById("InnerChat2").innerHTML = msg;
        document.getElementById("msgInput").value = "";
        chatCount = 3;
        break;

      case 3:
        var msg = document.getElementById("msgInput").value;
        document.getElementById("SingleChat-3").style.display = "block";
        document.getElementById("InnerChat3").innerHTML = msg;
        document.getElementById("msgInput").value = "";
        chatCount = 4;
        break;

      case 4:
        var msg = document.getElementById("msgInput").value;
        document.getElementById("SingleChat-4").style.display = "block";
        document.getElementById("InnerChat4").innerHTML = msg;
        document.getElementById("msgInput").value = "";
        chatCount = 5;
        break;

      case 5:
        var msg = document.getElementById("msgInput").value;
        document.getElementById("SingleChat-5").style.display = "block";
        document.getElementById("InnerChat5").innerHTML = msg;
        document.getElementById("msgInput").value = "";
        chatCount = 6;
        break;

      case 6:
        var msg = document.getElementById("msgInput").value;
        document.getElementById("SingleChat-6").style.display = "block";
        document.getElementById("InnerChat6").innerHTML = msg;
        document.getElementById("msgInput").value = "";
        chatCount = 7;
        break;

      default:
        var msg = document.getElementById("msgInput").value;
        document.getElementById("SingleChat-6").style.display = "block";
        document.getElementById("InnerChat6").innerHTML = msg;
        document.getElementById("msgInput").value = "";
        chatCount = 8;
        break;
    }
  }
}
// media
function myFunction(ScreenWidth) {
  if (ScreenWidth.matches) {
    chatClose();
    check = false;
  } else {
    check = true;
  }
}
var ScreenWidth = window.matchMedia("(max-width: 980px)");
myFunction(ScreenWidth); // Call listener function at run time
ScreenWidth.addListener(myFunction); // Attach listener function on state changes