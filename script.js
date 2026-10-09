// Edytuj tę listę, aby dodać/zmienić kody fundraiserów.
const FUNDRAISERS = {
  // Wewnętrzny zespół telefundraisingu
  k888: "Iwona Konieczna",
  k555: "Nina Gębczyńska",
  k777: "Aleksandra Sierpińska",
  k111: "Kinga Pyrek",
  k222: "Małgorzata Boaro",
  k333: "Paula Nowak",
  k444: "Kamila Krywoszłyków",

  // Zewnętrzni telefundraiserzy / agencja (kody z poprzedniego widgetu)
  k178: "Beata Wawrzyniak",
  k899: "Klaudia Żulczyk",
  k879: "Natalia Detmerowska",
  k460: "Kamil Warzocha",
  k446: "Kamila Mazurek",
  k689: "Natalia Cieciuch",
  k1262: "Wiktoria Oponecka",
  k1281: "Zuzanna Zalewska",
};

const input = document.getElementById("consultantCode");
const button = document.getElementById("verifyBtn");
const result = document.getElementById("consultantInfo");

function verifyCode() {
  const rawCode = input.value.trim().toLowerCase();
  const normalized = rawCode.startsWith("k") ? rawCode : `k${rawCode}`;
  const fundraiser = FUNDRAISERS[rawCode] || FUNDRAISERS[normalized];

  if (fundraiser) {
    result.classList.remove("error");
    result.classList.add("success");
    result.textContent = `Kod potwierdzony. Osoba prowadząca: ${fundraiser}.`;
    return;
  }

  if (!rawCode) {
    result.classList.remove("success");
    result.classList.remove("error");
    result.textContent = "Wpisz kod, aby rozpocząć weryfikację.";
    return;
  }

  result.classList.remove("success");
  result.classList.add("error");
  result.textContent = "Nie znaleziono takiego kodu. Sprawdź i spróbuj ponownie.";
}

button.addEventListener("click", verifyCode);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    verifyCode();
  }
});
