let i = 0;
setInterval(() => {
    document.body.innerHTML = "";
    var child = document.createElement("canvas");
    child.setAttribute("id", "canvas");
    var ctx = child.getContext("2d");

    let x = child.width / 2;
    let y = child.height / 2;

    ctx.beginPath();
    ctx.arc(x, y, 75, 0, 2 * Math.PI, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("3", x + 60, y + 4.9);
    ctx.fill();

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("4", x + 50, y + 40);

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("5", x + 25, y + 63);

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("6", x - 6, y + 67);

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("7", x - 39, y + 63);

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("8", x - 58, y + 40);

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("9", x - 64, y + 4.9);

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("10", x - 64, y - 28);

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("11", x - 39, y - 50);

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("12", x - 10, y - 52);

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("1", x + 25, y - 50);

    ctx.beginPath();
    ctx.font = "23px serif";
    ctx.fillText("2", x + 50, y - 28);

    const d = new Date();
    let seconds = d.getSeconds();
    let t = i + 6 * seconds;
    let m = d.getMinutes();
    let h = d.getHours();
    if (h < 12) h += 12;

    let theta = Math.abs((60 * h - 11 * m) / 2);
    console.log(h, m);

    ctx.translate(x, y);
    ctx.rotate((-90 + 6 * m) * Math.PI / 180);
    ctx.translate(-x, -y);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y - 5);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x + 10, y + 5);
    ctx.closePath();
    ctx.fill();

    var ctx = child.getContext("2d");
    ctx.save();

    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(theta * Math.PI / 180);
    ctx.translate(-x, -y);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y - 5);
    ctx.lineTo(x + 40, y);
    ctx.lineTo(x + 10, y + 5);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate((6 * i) * Math.PI / 180);
    ctx.translate(-x, -y);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y - 5);
    ctx.lineTo(x + 60, y);
    ctx.lineTo(x + 10, y + 5);
    ctx.closePath();
    ctx.fill();


    document.body.appendChild(child);
    i += 1;
    i %= 60;
}, 1000);
