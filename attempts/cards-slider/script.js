const slider = document.querySelector('div.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const data = [
    {
        id: '1',
        name: 'Switzerland',
        desc: 'Renowned for its breathtaking Alpine scenery and precision in craftsmanship',
        image: './images/africa-4258558_1280.jpg'
    },
    {
        id: '2',
        name: 'Finland',
        desc: 'Known for its saunas, lakes, and a deep connection to nature',
        image: './images/animal-4683920_1920.jpg'
    },
    {
        id: '3',
        name: 'Iceland',
        desc: 'Famous for its stunning geothermal landscapes, waterfalls, and glaciers',
        image: './images/masai-mara-7235519_1280.jpg'
    },
    {
        id: '4',
        name: 'Australia',
        desc: 'Distinguished by its diverse ecosystems, ranging from beaches to bushland',
        image: './images/tree-3546941_1280.jpg'
    },
    {
        id: '5',
        name: 'Netherlands',
        desc: 'Characterized by its iconic canals, tulip fields, and windmills',
        image: './images/biggabi.jpeg'
    },
    {
        id: '6',
        name: 'Ireland',
        desc: 'Known for its lush green landscapes and rich cultural heritage',
        image: './images/brennanjohnson.jpeg'
    }
]

const generateItems=()=>{
    slider.innerHTML = ''

    for (const item of data) {
        const sliderItem = document.createElement('div')
        sliderItem.className = 'item'
        sliderItem.dataset.index=item.id
        sliderItem.style.background = `url(${item.image})`
    
        sliderItem.innerHTML = `
            <div class="content">
                <div class="name">${item.name}</div>
                <div class="description">${item.desc}</div>
                <button>See More</button>
            </div>
        `
    
        slider.appendChild(sliderItem)
    }

}

prev.addEventListener('click', ()=>{
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length-1])
})

next.addEventListener('click', ()=>{
    let items=document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})


const init=()=> generateItems()

init()