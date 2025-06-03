const cardsList=document.querySelector('ul.cards')

let config={
    radius: 250,
    rotationSpeed: 0.5,
    itemCount: 8,
    currentAngle: 0,
    animationId: null,
    paused: false
}

const cardData = [
    { icon: '🌞', title: 'Sun' },
    { icon: '🌍', title: 'Earth' },
    { icon: '🌕', title: 'Moon' },
    { icon: '⭐', title: 'Star' },
    { icon: '🪐', title: 'Saturn' },
    { icon: '☄️', title: 'Comet' },
    { icon: '🌌', title: 'Galaxy' },
    { icon: '🔭', title: 'Telescope' },
    { icon: '🚀', title: 'Rocket' },
    { icon: '👨‍🚀', title: 'Astronaut' },
    { icon: '🛸', title: 'UFO' },
    { icon: '🌠', title: 'Shooting Star' }
];


const generateCards=()=>{
    cardsList.innerHTML=''

    for(i=0; i<config.itemCount;i++){
        const card=document.createElement('li')

        card.className='card'
        card.dataset.index=i

        const data=cardData[i%cardData.length]

        card.innerHTML=`
            <div class="card-icon">${data.icon}</div>
            <div class="card-title">${data.title}</div>
        `

        card.addEventListener('mouseenter',()=> {config.paused=true})

        card.addEventListener('mouseleave', ()=>{config.paused=false})

        cardsList.appendChild(card)
    }
}

const positionCards=()=>{
    const cards=document.querySelectorAll('.card')
    const totalCards=cards.length

    if(totalCards===0) return;

    const anglePerItem=360/totalCards

    cards.forEach((card, index)=>{
        const angle=config.currentAngle+(index*anglePerItem)

        const radians=angle*(Math.PI/180)

        const x =Math.cos(radians) * config.radius;
        const y = Math.sin(radians) * config.radius * 0.5

        const zIndex=Math.round(Math.sin(radians)*5)+5

        card.style.transform=`translate(${x}px, ${y}px)`
        card.style.zIndex=zIndex

        const hue=(index * (360 / totalCards))%360
        const bgColor=`linear-gradient(135deg, hsl(${hue}, 80%, 85%), hsl(${(hue+60)%360}, 80%, 90%))
        `

        card.style.backgroud=bgColor
    })
}

const animate =()=>{
    if(!config.paused){
        config.currentAngle+=config.rotationSpeed

        if(config.currentAngle>=360){
            config.currentAngle-=360
        }

        positionCards()
    }

    config.animationId=requestAnimationFrame(animate);
}

const init=()=>{
    generateCards()
    positionCards()
    animate();
}

init()

window.addEventListener('resize', ()=>{positionCards()})