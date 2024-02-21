checkspeed(130);
function checkspeed(speed) {
  const speedlimit = 70;
  const kmperpoint = 5;

  if (speed < speedlimit + kmperpoint) {
    console.log("ok");
    return;
  }
  const points = Math.floor((speed - speedlimit) / kmperpoint);
  if (points >= 12) console.log("license suspended");
  else console.log("points", points);
}
