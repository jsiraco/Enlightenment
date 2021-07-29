

//All public domain metmuseum images
//only public domain images can have image URL accessed
//https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=isPublicDomain

fetch('/defaultPoem.js')
    .then(response => response)









/*
async function getPoemData() {
  
    let url = 'https://www.poemist.com/api/v1/randompoems';
    try {
    let res = await fetch(url);
    return await res.json();
    } catch (error) {
      console.log(error);
    } 
  }
  
  async function renderPoems() {
    let poems = await getPoemData();
    
    let html = '';
    poems.forEach(poem => {
      let htmlSegment = `<div class="poem">
                          <h1> ${poem.title}</h1>
                          <div>${poem.content}</div>
                          <div>${poem.poet.name}</div>
                          </div>`;
          html += htmlSegment;       
    })
    
    let poemText = document.querySelector('.container');
    poemText.innerHTML = html;
  }
  
  renderPoems();*/