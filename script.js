const advertisementsData = [
  {
    title: "Ad 1",
    description: "This is the first advertisement",
    image: "https://placehold.co/150",
    contact: "contact1@example.com",
  },

  {
    title: "Ad 2",
    description: "This is the first advertisement",
    image: "https://placehold.co/150",
    contact: "contact2@example.com",
  },
  {
    title: "Ad 3",
    description: "This is the first advertisement",
    image: "https://placehold.co/150",
    contact: "contact3@example.com",
  },
  {
    title: "Ad 4",
    description: "This is the first advertisement",
    image: "https://placehold.co/150",
    contact: "contact4@example.com",
  },
  {
    title: "Ad 5",
    description: "This is the first advertisement",
    image: "https://placehold.co/150",
    contact: "contact5@example.com",
  },
  {
    title: "Ad 6",
    description: "This is the first advertisement",
    image: "https://placehold.co/150",
    contact: "contact6@example.com",
  }
];

const showAds = (ads) => {
  const advertisementsContainer = document.getElementById("advertisements");
  advertisementsContainer.innerHTML = ""; 

  /*<div class="card mb-4 col-md-4">
        <img class="card-img-top" src="https://placehold.co/150" alt="Ad 1">
        <div class="card-body">
          <h5 class="card-title">Ad 1</h5>
          <p class="card-text">This is the first advertisement.</p>
          <p class="card-text" onclick="alert('Contact: contact1@example.com')">Contact: ***</p>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-info btn-block" onclick="alert('Contact: contact1@example.com')">Details</button>
        </div>
      </div>*/
      ads.map((ad) => {
    const adCard = document.createElement("div");
    adCard.classList.add("card", "mb-4", "col-md-4");

    const adImage = document.createElement("img");
    adImage.classList.add("card-img-top");
    adImage.src = ad.image;
    adImage.alt = ad.title;

    const adCardbody = document.createElement("div");
    adCardbody.classList.add("card-body");

    const adTitle = document.createElement("h5");
    adTitle.classList.add("card-title");
    adTitle.textContent = ad.title;

    const adDescription = document.createElement("p");
    adDescription.classList.add("card-text");
    adDescription.textContent = ad.description;

    const adContact = document.createElement("p");
    adContact.classList.add("card-text");

    const hiddenContact=document.createElement("span");
    hiddenContact.textContent="***";
    hiddenContact.style.cursor="pointer";
    adContact.appendChild(hiddenContact);

    let isContactVisible = false;
    hiddenContact.onclick=()=> {
      if (isContactVisible) {
        hiddenContact.textContent = "***"; 
      } else {
        hiddenContact.textContent = ad.contact; 
      }
      isContactVisible = !isContactVisible; 
    };



    

    adCardbody.appendChild(adTitle);
    adCardbody.appendChild(adDescription);
    adCardbody.appendChild(adContact);

    const adFooter = document.createElement("div");
    adFooter.classList.add("card-footer", "text-center");

    const adButton = document.createElement("button");
    adButton.classList.add("btn", "btn-info", "btn-block");
    adButton.textContent = "Details";
    adButton.onclick = () => alert(`Contact: ${ad.contact}`);

    adFooter.appendChild(adButton);

    adCard.appendChild(adImage);
    adCard.appendChild(adCardbody);
    adCard.appendChild(adFooter);

    advertisementsContainer.appendChild(adCard);
  });
};

showAds(advertisementsData);


const filteredAds=()=>{
  const title = document.getElementById("filterTitle").value.toLowerCase();
  const filteredAdvertisements = advertisementsData.filter(ad => 
    ad.title.toLowerCase().includes(title)
  );
      showAds(filteredAdvertisements);
}

document.getElementById("filterTitle").addEventListener("input", filteredAds);



