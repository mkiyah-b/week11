let ball = document.querySelector("#ball");
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  // console.log(`Acceleration along the X-axis ${acl.x}`);
  // console.log(`Acceleration along the Y-axis ${acl.y}`);
  // console.log(`Acceleration along the Z-axis ${acl.z}`);
  if (acl.y < 0) {
    ball.style.top = 0;
  }
  else if ((acl.y * 50) > window.innerHeight) {
    ball.style.bottom = 0;
  }
  else {
    ball.style.top = (acl.y * 50) + 'px';
  }
  
  if (acl.x < 0) {
    ball.style.left = 0;
  }
  else if ((acl.x * 50) > window.innerWidth) {
    ball.style.right = 0;
  }
  else {
    ball.style.left = (acl.x * 50) + 'px';
  }
  
});

acl.start();