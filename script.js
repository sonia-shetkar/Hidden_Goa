// Slider functionality
const track = document.querySelector('.slider-track');
const imgs = document.querySelectorAll('.slider-track img');
const prevBtn = document.querySelector('.slider-btn.left');
const nextBtn = document.querySelector('.slider-btn.right');
let idx = 0;

function updateSlider() {
  track.style.transform = `translateX(-${idx * (imgs[0].clientWidth + 10)}px)`;
}
prevBtn.addEventListener('click', () => {
  idx = (idx - 1 + imgs.length) % imgs.length;
  updateSlider();
});
nextBtn.addEventListener('click', () => {
  idx = (idx + 1) % imgs.length;
  updateSlider();
});

// Place data & injection
const talukaData = {
  Ponda: [
    { name: "Shantadurga Temple", info: "Interior temple complex admired for culture." },
    { name: "Narsinha Temple", info: "Ancient Vishnu shrine with tranquil vibe." },
    { name: "Devki Krishna Temple", info: "Unique portrayal of mother Devaki with baby Krishna." }
  ],
  Mormugao: [
    { name: "Japanese Garden", info: "Cliffside garden with zen aesthetics & sea views." },
    { name: "Betul Fort", info: "Historic fort with stunning coastal views." },
    { name: "Bogmalo Beach", info: "Serene beach near Vasco offering water activities." }
  ],
  Salcete: [
    { name: "Chandor Village", info: "Ancient capital with Portuguese mansions." },
    { name: "Betul Beach", info: "Quiet coastal spot near river mouth." },
    { name: "Our Lady of Hope Church", info: "Hilltop church with panoramic views." }
  ],
  Bardez: [
    { name: "Morjim Beach", info: "Olive Ridley turtle nesting site." },
    { name: "Reis Magos Fort", info: "Restored fort with cultural events." },
    { name: "Saligao Seminary", info: "Peaceful seminary rich in frescoes." }
  ],
  Tiswadi: [
    { name: "St. Augustine Tower", info: "Ruins of 1600s church tower." },
    { name: "Dona Paula Viewpoint", info: "Legendary cliff viewpoint near Panaji." },
    { name: "Old Goa Churches", info: "Cluster of historic UNESCO churches." }
  ],
  Quepem: [
    { name: "Salaulim Dam", info: "Reservoir with landscaped garden." },
    { name: "Curdi Submerged Village", info: "Historic settlement revealed in dry season." },
    { name: "Holy Cross Chapel", info: "Quiet chapel atop green hillock." }
  ],
  Canacona: [
    { name: "Butterfly Beach", info: "Hidden cove accessible by trek or boat." },
    { name: "Galgibaga Beach", info: "Olive Ridley turtle nesting beach." },
    { name: "Cotigao Sanctuary", info: "Second-largest forest reserve in Goa." }
  ],
  Sattari: [
    { name: "Tambdi Surla Temple", info: "12th‑century temple in dense forest." },
    { name: "Mhadei Wildlife Sanctuary", info: "Rich biodiversity hotspot." },
    { name: "Nandren Waterfall", info: "Serene waterfall reachable via forest trail." }
  ],
  Bicholim: [
    { name: "Arvalem Caves", info: "6th‑century Buddhist-style rock caves." },
    { name: "Arvalem Waterfall", info: "Seasonal waterfall next to the caves." },
    { name: "Mayem Lake", info: "Wooded lake ideal for boating and picnics." }
  ],
  Sanguem: [
    { name: "Usgalimal Encravings", info: "Ancient carvings over thousand-year-old rock." },
    { name: "Netravali Sanctuary", info: "Vast sanctuary with waterfalls and wildlife." },
    { name: "Tambdi Falls", info: "Falling cascade hidden in forest." }
  ],
  Pernem: [
    { name: "Terekhol Fort", info: "Portuguese fort with panoramic views." },
    { name: "Querim Beach", info: "Tranquil beach on Goa’s northern tip." },
    { name: "Arambol Lake", info: "Freshwater lake situated behind the beach." }
  ],
  Dharbandora: [
    { name: "Bhagwan Mahaveer Sanctuary", info: "Largest wildlife sanctuary housing Dudhsagar Falls." },
    { name: "Devil’s Canyon", info: "Mysterious gorge known for local legends." },
    { name: "Nandanvan Jungle Safari", info: "Eco-tourism site with rescued wildlife." }
  ]
};

const container = document.getElementById("taluka-container");
Object.entries(talukaData).forEach(([taluka, places]) => {
  const card = document.createElement("div");
  card.className = "taluka-card";
  card.innerHTML = `<h3>${taluka}</h3>` + places.map(p => `<p><strong>${p.name}:</strong> ${p.info}</p>`).join("");
  container.appendChild(card);
});





  