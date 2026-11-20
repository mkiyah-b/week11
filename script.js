
let earring = document.querySelector("#movingPart");
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  // console.log(`Acceleration along the X-axis ${acl.x}`);
  // console.log(`Acceleration along the Y-axis ${acl.y}`);
  // console.log(`Acceleration along the Z-axis ${acl.z}`);

  earring.style.transform = "rotate(" + (acl.x * 10) + "deg)";
  
});

acl.start();