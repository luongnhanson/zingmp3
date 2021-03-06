const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('.header')
const aElement = $$('.header-search__select-link')
const setting = $('.header-user__item-icon-setting')
const ShowSetting = $('.header-user__item--active')
const like = $('.footer-like')
const follow = $('.footer-like')
const volumbtn = $('.volume-btn')
const volume = $('.volume-container')
const playbtn = $('.btn-toggle-play')
const player = $('.footer-control__btn')
const option = $('.header-container__actions-link--active')
const openLogin = $('.header-container__actions')
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const playlists = $('.playlists')
const volumctn = $(".volume-container");
const icon = $('.option')
const navbars = $$('.content-navbar__container-item')
const navbarx = $$('.content1-navbar1__container-item1')
const contents = $$('.container-tab')
const button = $('.play-music__header-btn')
const headerElement = $('.footer-info__header')
const headingElement = $('.footer-info__heading')
const img = $('.play-music__container-img')
const playlisting = $('.playlistlist')
const sidebars = $$('.sidebar-nav__item')
const hometabs = $$('.home-tab')
const followLikes = $$('.home-follow__left-content-icon')
const followLike = $$('.home-follow__left-content-icon-left')
const liElement = $$('.sider-navlist__item')
const abtn = $('.sider-navlist__block-link')
const liElements = $$('.sider-navlist__library-item')
const liElementr = $$('.sider-navlist__footer-item')
const afooter = $('.sidebar-footer__link')
const btnheader = $$('.header-container__actions-link')
const menu = $('.header-searchs__menu')
const sidebar = $('.sidebar')
const playbtns = $('.play-musics__header-btn')
const showcd = $$('.home-footer__setting-icon')
const footerContainer = $('.home-footer__container')
const footer = $('.footer')
const homeFooter = $('.home-footer')
const cdThumbl = $('.home-footer__dashboard-cd-thumb')
const namesong = $('.home-footer__dashboard-header')
const singgersong = $$('.home-footer__dashboard-heading')


const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isVolume: false,
    config: {},
    // (1/2) Uncomment the line below to use localStorage
    // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
    songs: [
        {
            id: 1,
            name: 'Y??u v???i v??ng',
            singer: 'L?? B???o B??nh',
            path : './accsets/music/song1.mp3',
            image : './accsets/img/yeu voi vang.jpg' 
        },
        {
            id: 2,
            name: 'n??i v???i em m???t l???i tr?????c khi xa r???i',
            singer: 'Lirycs',
            path : './accsets/music/song2.mp3',
            image : './accsets/img/song2.jpg' 
        },
        {
            id: 3,
            name: 'V??y c?????i',
            singer: 'Lirycs',
            path : './accsets/music/song3.mp3',
            image : './accsets/img/song3.jpg' 
        },
        {
            id: 4,
            name: 'anh y??u v???i th??? ',
            singer: 'LaLa Tr???n',
            path : './accsets/music/song4.mp3',
            image : './accsets/img/song4.jpg' 
        },
        {
            id: 5,
            name: 'hoa tren giay',
            singer: 'Giang Joole',
            path : './accsets/music/song5.mp3',
            image : './accsets/img/song5.jpg' 
        },
        {
            id: 6,
            name: 'Y??u ????n ph????ng',
            singer: 'LaLa Tr???n',
            path : './accsets/music/song11.mp3',
            image : './accsets/img/song6.jpg' 
        },
        {
            id: 7,
            name: 'Hoa b???ng l??ng',
            singer: 'Kidz',
            path : './accsets/music/song7.mp3',
            image : './accsets/img/song2.jpg' 
        },
        {
            id: 8,
            name: 'T?????ng qu??n',
            singer: '????nh Long',
            path : './accsets/music/song8.mp3',
            image : './accsets/img/song8.jpg' 
        },
        { 
            id: 9,
            name: 'H???t duy??n h???t n???',
            singer: 'H??? Gia Kh??nh',
            path : './accsets/music/song9.mp3',
            image : './accsets/img/song9.jpg' 
        },
        {
            id: 10,
            name: 'H???nh ph??c ???? em kh??ng c??',
            singer: 'Th??i Ho??ng remix',
            path : './accsets/music/song10.mp3',
            image : './accsets/img/song11.jpg' 
        },
        {
            id: 11,
            name: 'Ch??c em b??n ng?????i',
            singer: 'Ti???n B???p remix',
            path : './accsets/music/song12.mp3',
            image : './accsets/img/song10.jpg' 
        },
        {
            id: 12,
            name: 'Mu??n ki???p l?? anh em',
            singer: 'Hu???n Hoa H???ng remix',
            path : './accsets/music/song13.mp3',
            image : './accsets/img/song7.jpg' 
        },
        {
          id: 13,
          name: 'Eyes - ????i m???t',
          singer: 'G.Ducky',
          path : './accsets/music/song14.mp3',
          image : './accsets/img/song46.jpg' 
        },
        {
            id: 14,
            name: 'Gi??u V?? B???n Sang V?? V???',
            singer: 'RPT MCK',
            path : './accsets/music/song15.mp3',
            image : './accsets/img/song47.jpg' 
        },
        {
            id: 15,
            name: 'Walk On Da Street',
            singer: '16 Typh, 16 BrT',
            path : './accsets/music/song16.mp3',
            image : './accsets/img/song48.jpg' 
        },
        {
            id: 16,
            name: 'CH??I',
            singer: 'HIEUTHUHAI, MANBO',
            path : './accsets/music/song17.mp3',
            image : './accsets/img/song49.jpg' 
        },
        {
            id: 17,
            name: 'Th??? ???? Cypher',
            singer: 'RPT Orijinn, LOW G, RZMas',
            path : './accsets/music/song18.mp3',
            image : './accsets/img/song50.jpg' 
        },
        {
            id: 18,
            name: 'Bu??ng H??ng',
            singer: 'Young Milo',
            path : './accsets/music/song19.mp3',
            image : './accsets/img/song51.jpg' 
        },
        {
            id: 19,
            name: 'Ng?????i Ch??i H??? ?????p',
            singer: '16 Typh',
            path : './accsets/music/song20.webm',
            image : './accsets/img/song52.jpg' 
        },
        {
            id: 20,
            name: 'Gh?? Qua',
            singer: 'Dick, PC, Tofu',
            path : './accsets/music/song21.webm',
            image : './accsets/img/song53.jpg' 
        },
        { 
            id: 21,
            name: '????u Anh Lu??n Gi??? K??n Trong Tym',
            singer: 'RPT MCK, tlinh, 2pillz ',
            path : './accsets/music/song22.webm',
            image : './accsets/img/song54.jpg' 
        },
        {
            id: 22,
            name: 'X??ch Th??m Ch??t',
            singer: 'RPT Groovie, TLinh, RPT MCK',
            path : './accsets/music/song23.webm',
            image : './accsets/img/song55.jpg' 
        },
        {
            id: 23,
            name: 'Tay To',
            singer: 'RPT MCK, RPT PhongKhin',
            path : './accsets/music/song24.webm',
            image : './accsets/img/song56.jpg' 
        },
        {
            id: 24,
            name: 'SIMPLE LOVE',
            singer: 'Obito, Seachains, Davis, Lena',
            path : './accsets/music/song25.webm',
            image : './accsets/img/song57.jpg' 
        },
    ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },

  
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
              <div class="song ${index === this.currentIndex ? "active" : ""}" data-index="${index}">
                  <div class="thumb"
                      style="background-image: url('${song.image}')">
                  </div>
                  <div class="body">
                      <h3 class="title">${song.name}</h3>
                      <p class="author">${song.singer}</p>
                  </div>
                  <div class="option">
                    <i class="option-icon1 fa-solid fa-microphone"></i>
                    <i class="option-icon2 option-liking fa-solid fa-heart"></i>
                    <i class="option-icon3 fas fa-ellipsis-h"></i>
                  </div>
            </div>
      `;
    });
    playlist.innerHTML = htmls.join("");

    const html = this.songs.map((song, index) => {
      return `
            <div class="song ${index === this.currentIndex ? "active" : ""}" data-index="${index}">
                <i class="song-icon fa-solid fa-music"></i>
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                  <i class="option-icon1 fa-solid fa-microphone"></i>
                  <i class="option-icon2 option-liking fa-solid fa-heart"></i>
                  <i class="option-icon3 fas fa-ellipsis-h"></i>
                </div>
            </div>
      `;
    });
    playlists.innerHTML = html.join("");

    const htmlr = this.songs.map((song, index) => {
      return `
                <div class="song ${index === this.currentIndex ? "active" : ""}" data-index="${index}">
                    <h1 class="song-text">${song.id}</h1>
                    <i class="song-icon fa-solid fa-left-right"></i>
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                      <i class="option-icon1 fa-solid fa-microphone"></i>
                      <i class="option-icon2 option-liking fa-solid fa-heart"></i>
                      <i class="option-icon3 fas fa-ellipsis-h"></i>
                    </div>
                </div>
      `;
    });
    playlisting.innerHTML = htmlr.join("");

  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    // x??? l?? hi???n menu
    menu.onclick = function(e) {
      sidebar.classList.toggle('hide-on-tablet')
    }
    // x??? l?? ???n hi???n header
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        header.setAttribute('style', 'background-color: #37075d;')
      } else {
        header.removeAttribute('style')
      }
    }

    // x??? l?? search
    for (var i = 0; i < aElement.length; i++) {
        aElement[i].onmousedown = function(e) {
            e.preventDefault();
        }
    }
    
    // x??? l?? click setting
    setting.onclick = function(e) {
        ShowSetting.classList.toggle('show-settings')
    }
    
    // x??? l?? th??? c???m x??c
    like.onclick = function() {
      follow.classList.toggle('footer-liking')
    }

    // x??? l?? login
    option.onclick = function(e) {
      e.preventDefault()
      openLogin.classList.toggle('open')
    }

    // x??? l?? chuy???n tab navbar
    
    navbars.forEach((navbar, index) => {
      navbar.onclick = function() {
          $('.content-navbar__container-item.slider').classList.remove('slider')
          navbar.classList.add('slider')
          
          $('.container-tab.sliders').classList.remove('sliders')
          contents[index].classList.add('sliders')
      }
    })

    navbarx.forEach((navbar, index) => {
      navbar.onclick = function() {
          $('.content1-navbar1__container-item1.slider').classList.remove('slider')
          navbar.classList.add('slider')
          
          // $('.container-tab.sliders').classList.remove('sliders')
          // contents[index].classList.add('sliders')
      }
    })

    // x??? l?? chuy???n tab home
    sidebars.forEach((sidebar, index) => {
      sidebar.onclick = function(e) {
        e.preventDefault()
          $('.sidebar-nav__item.actives').classList.remove('actives')
          sidebar.classList.add('actives')
          
          $('.home-tab.sliders').classList.remove('sliders')
          hometabs[index].classList.add('sliders')
      }
    })

    // x??? l?? n??t like
    for (var i = 0; i < followLike.length; i++) {
      followLike[i].onclick = function () {
        for (var j = 0; j < followLikes.length; j++) {
          followLikes[j].classList.toggle('follow-like')
        }
      }
    }

    // x??? l?? h??nh vi m???c d???nh sidebar
    for(var i = 0; i < liElement.length; i++) {
      liElement[i].onclick = function(e) {
        e.preventDefault();
      }
    }

    for(var i = 0; i < liElements.length; i++) {
      liElements[i].onclick = function(e) {
        e.preventDefault();
      }
    }

    for(var i = 0; i < liElementr.length; i++) {
      liElementr[i].onclick = function(e) {
        e.preventDefault();
      }
    }

    for(var i = 0; i < btnheader.length - 1; i++) {
      btnheader[i].onclick = function(e) {
        e.preventDefault();
        showSuccessToast();
      }
    }

    abtn.onclick = function(e) {
      e.preventDefault();
    }

    afooter.onclick = function(e) {
      e.preventDefault();
    }

    // x??? l?? ph??ng ?????i footer
    footer.onclick = function() {
      footerContainer.classList.add('sliders')
    }

    for(var i = 2; i < showcd.length; i++) {
      showcd[i].onclick = function(e) {
        footerContainer.classList.remove('sliders')
      }
    }

    homeFooter.onclick = function(e) {
      e.preventDefault();
    }


    // x??? l?? ph??t t???t c???
    button.onclick = function () {
      audio.play();
    }
    playbtns.onclick = function () {
      audio.play();
    }
    
    //
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // X??? l?? CD quay / d???ng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();


    const cdThumbAnimatel = cdThumbl.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimatel.pause();

    // X??? l?? ph??ng to / thu nh??? CD
    // Handles CD enlargement / reduction
    // document.onscroll = function () {
    //   const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //   const newCdWidth = cdWidth - scrollTop;

    //   cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
    //   cd.style.opacity = newCdWidth / cdWidth;
    // };

    // X??? l?? khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song ???????c play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
      cdThumbAnimatel.play();
    };

    // Khi song b??? pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
      cdThumbAnimatel.pause();
    };

    // Khi ti???n ????? b??i h??t thay ?????i
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };



    // X??? l?? khi tua song
    // Handling when seek
    progress.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;

    };
  

    volume.oninput = function(e){
      audio.volume = e.target.value / 100;
    }


    volumbtn.onclick = function() {
        if (_this.isVolume) {
            _this.isVolume = false;
            volume.classList.remove("volume-btning")
            audio.volume = 1.0;
          } else {
            _this.isVolume = true;
            volume.classList.add("volume-btning")
            audio.volume = 0.0;
          }
    }
    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // X??? l?? b???t / t???t random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("activetional", _this.isRandom);
    };

    // X??? l?? l???p l???i m???t song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("activetional", _this.isRepeat);
    };

    // X??? l?? next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // L???ng nghe h??nh vi click v??o playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // X??? l?? khi click v??o song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // X??? l?? khi click v??o song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
          
        }

        if (e.target.closest(".option")) {
          
        }

        if (e.target.closest(".option")) {

        }
      }
    };

    playlists.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // X??? l?? khi click v??o song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // X??? l?? khi click v??o song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
          
        }

        if (e.target.closest(".option")) {
          
        }

        if (e.target.closest(".option")) {

        }
      }
    };

    playlisting.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // X??? l?? khi click v??o song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // X??? l?? khi click v??o song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
          
        }

        if (e.target.closest(".option")) {
          
        }

        if (e.target.closest(".option")) {

        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    namesong.textContent = this.currentSong.name
    headerElement.textContent = this.currentSong.name;
    headingElement.textContent = this.currentSong.singer;
    for(var i = 1; i < singgersong.length; i++) {
      singgersong[i].textContent = this.currentSong.singer;
    }
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    cdThumbl.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();

  },
    

  start: function () {
    // G??n c???u h??nh t??? config v??o ???ng d???ng
    // Assign configuration from config to application
    this.loadConfig();

    // ?????nh ngh??a c??c thu???c t??nh cho object
    // Defines properties for the object
    this.defineProperties();

    // L???ng nghe / x??? l?? c??c s??? ki???n (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // T???i th??ng tin b??i h??t ?????u ti??n v??o UI khi ch???y ???ng d???ng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hi???n th??? tr???ng th??i ban ?????u c???a button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("activetional", this.isRandom);
    repeatBtn.classList.toggle("activetional", this.isRepeat);
  }
}

app.start();