const data = [
    {
        id: '1',
        name: 'Myles Lewis Skelly',
        position: 'Left Back',
        bio: 'Master of the dark arts, Starboy and the best young talent in the world.',
        image: './../../images/mls.jpeg'
    },
    {
        id: '2',
        name: 'Bukayo Saka',
        position: 'Right Wing',
        bio: "Best right winger and future ballon d'or",
        image: './../../images/sakabernabeu.jpeg'
    },
    {
        id: '3',
        name: 'Declan Rice',
        position: 'Left Central Midfielder',
        bio: 'Engine of the best team in the world. Better than your shin-kicker',
        image: './../../images/ricerma.jpeg'
    },
    {
        id: '4',
        name: 'Gabriel Martinelli',
        position: 'Left Wing',
        bio: "Arsenal's magnificent speed star. Dribbles better than you.",
        image: './../../images/martinelli.jpeg'
    },
    {
        id: '5',
        name: "William Saliba",
        position: 'Right Center Back',
        bio: "Rolls Royce. Best Center Back in the world.",
        image: './../../images/getupmbappe.jpeg'
    },
    {
        id: '6',
        name: 'Kylian Mbappe',
        position: "Declan Rice's back pocket.",
        bio: "Best player in Declan Rice's and Saliba's pockets. #Owned",
        image: './../../images/getupmbappe2.jpeg'
    }

]

const headerGroup = document.querySelector('hgroup.hgroup')
const list = document.querySelector('ul.cards')
list.style.setProperty("--nth-siblings", data.length)


// list.innerHTML = ''

data.forEach((item, i) => {
    const listItem = document.createElement('li')
    listItem.className = 'card'
    listItem.style.setProperty("--nth-child", i)
    listItem.innerHTML = `
        <a href="#" class="avatar-link-wrapper">
                        <div class="visual">
                            <img src=${item.image} alt=${item.name} class="avatar-img"
                                width="144" height="144">
                        </div>
                        <div class="tooltiptext">
                            <h3 class="team-name">${item.name}</h3>
                            <div class="team-content-wrapper">
                                <p class="team-position">${item.position}</p>
                                <p class="team-bio">
                                    ${item.bio}
                                </p>
                            </div>
                        </div>
                    </a>
                    `

    list.appendChild(listItem)
})

const headline=document.createElement('h2')
headline.class='headline'
const tagline=document.createElement('p')
tagline.class='tagline'

headline.textContent='Fogging Machine'
tagline.textContent='Arsenals Best moments of the season 24/25'

headerGroup.appendChild(headline)
headerGroup.appendChild(tagline)