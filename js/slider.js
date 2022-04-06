

const leftPlyalist = document.querySelector('.play-header__arrow-left')
const rightPlyalist = document.querySelector('.play-header__arrow-right')
const playlistLists = document.querySelectorAll('.play-list')


leftPlyalist.onclick = function() {
    this.sliders(-5, 0, playlistLists[0], leftPlyalist)
}

rightPlyalist.onclick = function() {
    this.sliders(5, 0, playlistLists[0], rightPlyalist)
}

