const quote = document.querySelector('.quote');
const author = document.querySelector('.author')



const newQuote = document.querySelector('.generateQuote');
newQuote.addEventListener('click',() => {
  const apiKey = 'D0Dh6UXqaZYYeDFZUBdhHcotSJqDwNLu4q7K8PqU';
      const options = {
        headers : {'x-api-key' : apiKey}
      }
  
  
  fetch('https://api.api-ninjas.com/v1/quotes',options)
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  
  })
  .then(data => console.log(data[0].quote))
  .catch(err => console.log(err));

})


