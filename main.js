alert(`game  battle tebak angka
1.silahkan menebak angka 1 - 10
2. kamu akan bermain dalam 3 ronde.
3.player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BATTLE!!!`);
let skorPL1 = 0;
let skorPL2 = 0;
let ronde = 1;
let stop = true;

while (stop) {
  let pL1 = parseInt(prompt("Player 1: masukan angka"));
  let PL2 = parseInt(prompt("Player 2: masukan angka"));

  let random = getRandom();
  let ulangi = validasi(PL1, PL2);
  if (!ulangi) {
    stop = window.confirm("Ulangi?");
  } else {
    if (PL1 !== random && PL2 !== random) {
      alert("Tidak ada yang benar. hasil SERI");
    } else {
      if (PL1 === random) {
        alert("Player 1 Win");
        skorP1++;
      }
      if (PL2 === random) {
        alert("Player 2 Win");
        skorP2++;
      }
    }

    alert(`
    Nilai yang dicari: ${random}
    -----------------------------------
    - Player 1: ${skorPL1}
    - Player 2: ${skorPL2}`);

    ronde++;
    if (ronde <= 5) {
      stop = window.confirm("Ronde " + ronde + "?");
    } else {
      if (skorPL1 > skorPL2) {
        alert("Good Jobs PLayer 1");
        stop = false;
      } else if (skorPL1 < skorPL2) {
        alert("Good Jobs Player 2");
        stop = false;
      } else {
        alert(`Wow pertarungan yang sangat sengit`);
        ronde = 1;
        skorPL1 = 0;
        skorPL2= 0;
        stop = window.confirm("Apakah mau main lagi?");
      }
    }
  }
}

function validasi(player1, player2) {
  if (player1 === player2) {
    alert("tebakan tidak boleh sama");
    return false;
  }

  if (player1 < 1 || player2 < 1) {
    alert("tebakan tidak boleh lebih kecil dari 1");
    return false;
  }

  if (player1 > 3 || player2 > 3) {
    alert("tebakan tidak boleh lebih besar dari 3");
    return false;
  }

  if (isNaN(player1) || isNaN(player2)) {
    alert("salah satu player belum menebak");
    return false;
  }

  return true;
}
