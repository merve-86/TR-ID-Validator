const idInput = document.getElementById("id");
const btn = document.getElementById("check");
const msg = document.getElementById("msg");

btn.addEventListener("click", (e) => {
    e.preventDefault();
  if (!idInput.value) {
    return alert("Lütfen ID Giriniz");
  }
  let id = idInput.value;
  idKontrol(id);  
});

const idKontrol = (id) => {
  let rakamlar = id.split("").map(Number);

  let tekIndeksToplam =
    rakamlar[0] + rakamlar[2] + rakamlar[4] + rakamlar[6] + rakamlar[8];
  let ciftIndeksToplam = rakamlar[1] + rakamlar[3] + rakamlar[5] + rakamlar[7];
  let onuncuRakam = (tekIndeksToplam * 7 - ciftIndeksToplam) % 10;
  let onbirinciRakam =
    (rakamlar.slice(0, 9).reduce((a, b) => a + b, 0) + onuncuRakam) % 10;

  if (
    rakamlar[0] == 0 ||
    rakamlar[9] != onuncuRakam ||
    rakamlar[10] != onbirinciRakam ||
    rakamlar.length != 11
  ) {
    msg.textContent = `${id} is invalid`;
    msg.style.color = "red"
  } else {
    msg.textContent = `${id} is a valid TR ID Number`;
    msg.style.color = "black";
  }
};
