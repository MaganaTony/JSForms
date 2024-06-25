const body = document.querySelector("body");

// function to get value from form with event listener from submit

const form = document.getElementById("form");
const listInputs = (form) => {
  let results = [];
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    //retrieve all values from input fields
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const about = document.getElementById("about").value;
    const image = document.getElementById("image").value;
    const pushValues = (name, location, about, image) => {
      results.push(name, location, about, image);
    };
    pushValues(name, location, about, image);
    //push values to results array
    return results;
  });
  return results;
};
const inputs = listInputs(form);

const listChecks = (form) => {
  let results = [];
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const checkedCheckboxes = (array) => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          array.push(checkbox.name);
        }
      });
      return results;
    };
    checkedCheckboxes(results);
  });
  return results;
};
const checks = listChecks(form);

// function to create card with values from form after submit
const createCard = (inputs, checks) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const container = document.createElement("div");
        container.className = "container mt-5 d-flex justify-content-center align-items-center flex-column";


        const cardContainer = document.createElement("div");
        cardContainer.className = "card-container p-4 rounded";
        cardContainer.style.backgroundColor = "#1f1f1f";
        cardContainer.style.width = "20rem";
        cardContainer.style.height = "auto";
        const card = document.createElement("div");
        card.className = "card text-white rounded";
        card.style.backgroundColor = "#333333";

        const cardImage = document.createElement("img");
        cardImage.className = "card-img-top mt-3 rounded-circle w-50";
        cardImage.style.margin = "0 auto";
        cardImage.src = inputs[3];
        cardImage.alt = "Card image cap";


        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.className = "text-center"
        cardTitle.textContent = inputs[0];
        const cardTextLocation = document.createElement("p");
        cardTextLocation.className = "card-text text-center ";
        cardTextLocation.style.color = "greenyellow";
        cardTextLocation.style.marginTop = "-5px";
        cardTextLocation.textContent = inputs[1];

      

        const cardTextDescription = document.createElement("p");
        cardTextDescription.className = "card-text text-center font-weight-light";
        cardTextDescription.style.color = "Gainsboro";
        cardTextDescription.textContent = ('"' + inputs[2] + '"');
        const list = document.createElement("ul");
        list.className = "d-flex justify-content-center g-2 align-items-center flex-column list-group text-center";

        //create card interest for each checkbox
        const createCardInterest = (checks) => {
            checks.forEach((check) => {
                const cardInterestBody = document.createElement("li");
                cardInterestBody.className = "list-group-item text-white mb-3 ";
                cardInterestBody.style.width = "16rem";
                cardInterestBody.style.borderRadius = "10px";
                cardInterestBody.style.fontWeight = "bold";
                cardInterestBody.style.fontSize = "0.85rem";
                cardInterestBody.style.backgroundColor = "#5A5A5A";
                cardInterestBody.textContent = check;
                list.appendChild(cardInterestBody);
            });
        };
        
        
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardTextLocation);
        cardBody.appendChild(cardTextDescription);
        card.appendChild(cardImage);
        card.appendChild(cardBody);
        createCardInterest(checks);
        card.appendChild(list);
        cardContainer.appendChild(card);
        container.appendChild(cardContainer);
        body.appendChild(container);
    });
}

createCard(inputs, checks);
