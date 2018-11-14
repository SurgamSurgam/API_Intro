document.addEventListener("DOMContentLoaded", () => {
  let APIResponse = {
    "status": "success",
    "message": {
      "affenpinscher": [

      ],
      "african": [

      ],
      "airedale": [

      ],
      "akita": [

      ],
      "appenzeller": [

      ],
      "basenji": [

      ],
      "beagle": [

      ],
      "bluetick": [

      ],
      "borzoi": [

      ],
      "bouvier": [

      ],
      "boxer": [

      ],
      "brabancon": [

      ],
      "briard": [

      ],
      "bulldog": [
        "boston",
        "french"
      ],
      "bullterrier": [
        "staffordshire"
      ],
      "cairn": [

      ],
      "cattledog": [
        "australian"
      ],
      "chihuahua": [

      ],
      "chow": [

      ],
      "clumber": [

      ],
      "cockapoo": [

      ],
      "collie": [
        "border"
      ],
      "coonhound": [

      ],
      "corgi": [
        "cardigan"
      ],
      "cotondetulear": [

      ],
      "dachshund": [

      ],
      "dalmatian": [

      ],
      "dane": [
        "great"
      ],
      "deerhound": [
        "scottish"
      ],
      "dhole": [

      ],
      "dingo": [

      ],
      "doberman": [

      ],
      "elkhound": [
        "norwegian"
      ],
      "entlebucher": [

      ],
      "eskimo": [

      ],
      "frise": [
        "bichon"
      ],
      "germanshepherd": [

      ],
      "greyhound": [
        "italian"
      ],
      "groenendael": [

      ],
      "hound": [
        "afghan",
        "basset",
        "blood",
        "english",
        "ibizan",
        "walker"
      ],
      "husky": [

      ],
      "keeshond": [

      ],
      "kelpie": [

      ],
      "komondor": [

      ],
      "kuvasz": [

      ],
      "labrador": [

      ],
      "leonberg": [

      ],
      "lhasa": [

      ],
      "malamute": [

      ],
      "malinois": [

      ],
      "maltese": [

      ],
      "mastiff": [
        "bull",
        "tibetan"
      ],
      "mexicanhairless": [

      ],
      "mix": [

      ],
      "mountain": [
        "bernese",
        "swiss"
      ],
      "newfoundland": [

      ],
      "otterhound": [

      ],
      "papillon": [

      ],
      "pekinese": [

      ],
      "pembroke": [

      ],
      "pinscher": [
        "miniature"
      ],
      "pointer": [
        "german",
        "germanlonghair"
      ],
      "pomeranian": [

      ],
      "poodle": [
        "miniature",
        "standard",
        "toy"
      ],
      "pug": [

      ],
      "puggle": [

      ],
      "pyrenees": [

      ],
      "redbone": [

      ],
      "retriever": [
        "chesapeake",
        "curly",
        "flatcoated",
        "golden"
      ],
      "ridgeback": [
        "rhodesian"
      ],
      "rottweiler": [

      ],
      "saluki": [

      ],
      "samoyed": [

      ],
      "schipperke": [

      ],
      "schnauzer": [
        "giant",
        "miniature"
      ],
      "setter": [
        "english",
        "gordon",
        "irish"
      ],
      "sheepdog": [
        "english",
        "shetland"
      ],
      "shiba": [

      ],
      "shihtzu": [

      ],
      "spaniel": [
        "blenheim",
        "brittany",
        "cocker",
        "irish",
        "japanese",
        "sussex",
        "welsh"
      ],
      "springer": [
        "english"
      ],
      "stbernard": [

      ],
      "terrier": [
        "american",
        "australian",
        "bedlington",
        "border",
        "dandie",
        "fox",
        "irish",
        "kerryblue",
        "lakeland",
        "norfolk",
        "norwich",
        "patterdale",
        "russell",
        "scottish",
        "sealyham",
        "silky",
        "tibetan",
        "toy",
        "westhighland",
        "wheaten",
        "yorkshire"
      ],
      "vizsla": [

      ],
      "weimaraner": [

      ],
      "whippet": [

      ],
      "wolfhound": [
        "irish"
      ]
    }
  }

  let breedList = [];

  Object.keys(APIResponse.message).forEach(el => {
    if (!APIResponse.message[el].length) {
      let noSub = el[0].toUpperCase() + el.slice(1);
      breedList.push(noSub);
    } else if (APIResponse.message[el].length) {
      APIResponse.message[el].forEach(type => {
        let newEl = el[0].toUpperCase() + el.slice(1);
        let newType = type[0].toUpperCase() + type.slice(1);
        breedList.push(newEl + " " + newType);
      })
    }
  })

  let button = document.querySelector('button');
  let body = document.querySelector('body');


  button.addEventListener('click', (event) => {
    let random = Math.floor(Math.random() * 131);
    let picked = breedList[random];
    let div = document.createElement('div');
    body.append(div);
    let header = document.createElement('h2');
    header.innerText = picked;
    div.append(header);

    if (button.innerText !== 'Another One!') {
      button.innerText = 'Another One!'
    } else if (button.innerText !== "Awesome Pick!"){
      button.innerText = "Awesome Pick!"
    }

    if (div.previousSibling !== '#text') {
      div.previousSibling.remove();
    }


  })


});
