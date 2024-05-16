/* ABOUT SECTION */
const tedText = "TED began in 1984 as a conference where Technology, Entertainment and Design converged and today covers almost all topics - from science to business to global issues - in more than 100 languages. TED is a non-profit organisation developed to spreading ideas, usually in the form of short, powerful talks (18 minutes or less) and believes passionately in the power of ideas to change attitudes, lives and ultimately, the world. It is a global community, welcoming people from every discipline and culture who seek a deeper understanding of the world."
const tedxText = "The TEDx Program is a local gathering designed to help communities, organisations and individuals to speak conversation and connection through local TED-like experiences. TEDx events are fully planned and coordinated independently, on a community-by-community basis. The content and design of each TEDx event is unique and developed independently but all of them stick to the motto-Ideas worth sharing."
const tedxrvceText = "TEDxRVCE was set up in 2017, with a vision to provide a platform for ground-breaking ideas and innovation, stimulating creativity and free-thinking amongst the student populace pecifically, while also catering to the general public. Into the third year, it also aims at creating an open atmosphere for idea sharing and brainstorming among the youth of tomorrow, ensuring a brighter future"

const about = [tedText,tedxText,tedxrvceText]

const ted = document.getElementById("ted")
const tedx = document.getElementById("tedx")
const tedxrvce = document.getElementById("tedxrvce")

const text = document.getElementById("text")

text.innerHTML = about[0]

ted.addEventListener('click', function() {
    text.innerHTML = about[0]
    ted.classList.add("active")
    if(tedx.classList.length == 2)
        tedx.classList.remove("active")
    if(tedxrvce.classList.length == 2)
        tedxrvce.classList.remove("active")
})

tedx.addEventListener('click', function() {
    text.innerHTML = about[1]
    tedx.classList.add("active")
    if(ted.classList.length == 2)
        ted.classList.remove("active")
    if(tedxrvce.classList.length == 2)
        tedxrvce.classList.remove("active")
})

tedxrvce.addEventListener('click', function() {
    text.innerHTML = about[2]
    tedxrvce.classList.add("active")
    if(ted.classList.length == 2)
        ted.classList.remove("active")
    if(tedx.classList.length == 2)
        tedx.classList.remove("active")
})