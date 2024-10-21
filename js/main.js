// I am creating an application that when a user enters a city and state OR a zip code, a list is returned of all of the public restoooms near by. 

//there will be a button that can be clicked which will use the iformation that was inputted to return specific restrooms from the api provided from goweewee.com

// this info will be be printed to the DOM via the up area in my HTML doc.

//If there are no public restrooms I would like to print "Sorry, there are no public Loos in this area, please search another area."

document.querySelector('#button').addEventListener('click', getLoo)
function getLoo() {
    const city = document.querySelector('#city').value
    const zip = document.querySelector('#zip').value

    const url = `https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=30&unisex=true&query=${city}${zip}`

    console.log('This is the entered city:', city)
    console.log('This is the entered zip code:', zip)

    fetch(url)
        // {
        //     mode: 'no-cors',
        //     headers:{
        //         'Access-Control-Allow-Origin':'*'
        //     }
        // })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data[0])

            data.forEach(element => {
                console.log(element['street'])
               const li = document.createElement('li')
               li.textContent = `Location:${element.name}, Address:${element.street},`

               document.querySelector('#listOfLoos').appendChild(li)

            });

            // console.log(data.street)
            // console.log(data.city)
            // console.log(data.state)


          


        })
        .catch(err => {
            console.error(`error: ${err}`)
        });

}