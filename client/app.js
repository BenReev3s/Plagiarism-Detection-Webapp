/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
const dropZone = document.querySelector('.drop-zone');
const button = document.querySelector('.drop-zone__button');
// global variable, will be used in a few functions
let file;
const dragText = document.querySelector('#dropText');
const inputFile = document.querySelector('.drop-zone__file');
const compare = document.querySelector('.compare-button');
const submit = document.querySelector('.drop-zone__submit');
const text = document.querySelector('.textContent');
const table = document.querySelector('.table');
const best_match = document.querySelector('.best-table');

// async function managing uploads
async function uploadFile() {
  let return_data = { error: 0, message: '' };
  for (let i = 0; i < inputFile.files.length; i++) {
    try {
    // no file selected
      if (inputFile.files.length === 0) {
        throw new Error('No file selected');
      } else {
      // formdata

        const data = new FormData();
        data.append('title', 'Sample Title');
        data.append('file', inputFile.files[i]);

        // send fetch along with cookies
        const response = fetch('/upload', {
          method: 'POST',
          body: data,
        });


        // server responded with http response != 200
        if (response.status !== 200) { throw new Error(''); }

        // read json response from server
        // success response example : {"error":0,"message":""}
        // error response example : {"error":1,"message":"File type not allowed"}
        const json_response = await response.json();
        if (json_response.error === 1) { throw new Error(); }
      }
    } catch (e) {
    // catch rejected Promises and Error objects
      return_data = { error: 1, message: e.message };
    }
  }
  return return_data;
}


dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('drop-zone--over');
  dragText.textContent = 'Release file to uplaod';
});

dropZone.addEventListener('dragleave', (e) => {
  e.preventDefault();
  dropZone.classList.remove('drop-zone--over');
  dragText.textContent = 'Drag and drop file(s) here';
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();

  inputFile.files = event.dataTransfer.files;
  // showFiles();
});

button.addEventListener('click', () => {
  inputFile.click();
});

inputFile.addEventListener('change', function () {
  file = this.files;
  // showFiles();
});


submit.addEventListener('click', async function () {
  const upload = await uploadFile();

  if (upload.error === 0) { alert('Please select a file'); } else if (upload.error === 1) { alert('Files uploaded sucessfuly ' + upload.message); }
});


async function compareFiles() {
  try {
    const response = await fetch('/compare');

    if (!response.ok) { throw new Error('Status code was: ' + response.status); }

    for (let i = 1; i < table.childNodes.length; i++) {
      table.removeChild(table.childNodes[i]);
    }

    const json_response = await response.json();
    const ratings = json_response.ratings;
    for (let i = 0; i < ratings.length; i++) {
      const row = document.createElement('tr');
      const target = document.createElement('td');
      const target_text = document.createTextNode(ratings[i].target);
      target.appendChild(target_text);
      row.appendChild(target);
      const rating = document.createElement('td');

      const rating_text = document.createTextNode(ratings[i].rating);
      rating.appendChild(rating_text);
      row.appendChild(rating);
      table.appendChild(row);
    }
    const best = json_response.bestMatch;
    const row = document.createElement('tr');
    const target = document.createElement('td');
    const target_text = document.createTextNode(best.target);
    target.appendChild(target_text);
    row.appendChild(target);

    const rating_text = document.createTextNode(best.rating);
    const rating = document.createElement('td');
    rating.appendChild(rating_text);
    row.appendChild(rating);
    best_match.appendChild(row);
  } catch (e) {
    console.log(e);
  }
}


compare.addEventListener('click', async function () {
  await compareFiles();
});
