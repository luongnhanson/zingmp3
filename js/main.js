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
            name: 'Yêu vội vàng',
            singer: 'Lê Bảo Bình',
            path : './accsets/music/song1.mp3',
            image : './accsets/img/yeu voi vang.jpg' 
        },
        {
            id: 2,
            name: 'nói với em một lời trước khi xa rời',
            singer: 'Lirycs',
            path : './accsets/music/song2.mp3',
            image : './accsets/img/song2.jpg' 
        },
        {
            id: 3,
            name: 'Váy cưới',
            singer: 'Lirycs',
            path : './accsets/music/song3.mp3',
            image : './accsets/img/song3.jpg' 
        },
        {
            id: 4,
            name: 'anh yêu vội thế ',
            singer: 'LaLa Trần',
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
            name: 'Yêu đơn phương',
            singer: 'LaLa Trần',
            path : './accsets/music/song11.mp3',
            image : './accsets/img/song6.jpg' 
        },
        {
            id: 7,
            name: 'Hoa bằng lăng',
            singer: 'Kidz',
            path : './accsets/music/song7.mp3',
            image : './accsets/img/song2.jpg' 
        },
        {
            id: 8,
            name: 'Tướng quân',
            singer: 'Đình Long',
            path : './accsets/music/song8.mp3',
            image : './accsets/img/song8.jpg' 
        },
        { 
            id: 9,
            name: 'Hết duyên hết nợ',
            singer: 'Hồ Gia Khánh',
            path : './accsets/music/song9.mp3',
            image : './accsets/img/song9.jpg' 
        },
        {
            id: 10,
            name: 'Hạnh phúc đó em không có',
            singer: 'Thái Hoàng remix',
            path : './accsets/music/song10.mp3',
            image : './accsets/img/song11.jpg' 
        },
        {
            id: 11,
            name: 'Chúc em bên người',
            singer: 'Tiến Bịp remix',
            path : './accsets/music/song12.mp3',
            image : './accsets/img/song10.jpg' 
        },
        {
            id: 12,
            name: 'Muôn kiếp là anh em',
            singer: 'Huấn Hoa Hồng remix',
            path : './accsets/music/song13.mp3',
            image : './accsets/img/song7.jpg' 
        },
        {
          id: 13,
          name: 'Eyes - Đôi mắt',
          singer: 'G.Ducky',
          path : './accsets/music/song14.mp3',
          image : './accsets/img/song46.jpg' 
        },
        {
            id: 14,
            name: 'Giàu Vì Bạn Sang Vì Vợ',
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
            name: 'CHƠI',
            singer: 'HIEUTHUHAI, MANBO',
            path : './accsets/music/song17.mp3',
            image : './accsets/img/song49.jpg' 
        },
        {
            id: 17,
            name: 'Thủ Đô Cypher',
            singer: 'RPT Orijinn, LOW G, RZMas',
            path : './accsets/music/song18.mp3',
            image : './accsets/img/song50.jpg' 
        },
        {
            id: 18,
            name: 'Buông Hàng',
            singer: 'Young Milo',
            path : './accsets/music/song19.mp3',
            image : './accsets/img/song51.jpg' 
        },
        {
            id: 19,
            name: 'Người Chơi Hệ Đẹp',
            singer: '16 Typh',
            path : './accsets/music/song20.webm',
            image : './accsets/img/song52.jpg' 
        },
        {
            id: 20,
            name: 'Ghé Qua',
            singer: 'Dick, PC, Tofu',
            path : './accsets/music/song21.webm',
            image : './accsets/img/song53.jpg' 
        },
        { 
            id: 21,
            name: 'Đìu Anh Luôn Giữ Kín Trong Tym',
            singer: 'RPT MCK, tlinh, 2pillz ',
            path : './accsets/music/song22.webm',
            image : './accsets/img/song54.jpg' 
        },
        {
            id: 22,
            name: 'Xích Thêm Chút',
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
    // xử lý hiện menu
    menu.onclick = function(e) {
      sidebar.classList.toggle('hide-on-tablet')
    }
    // xử lý ẩn hiện header
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        header.setAttribute('style', 'background-color: #37075d;')
      } else {
        header.removeAttribute('style')
      }
    }

    // xử lý search
    for (var i = 0; i < aElement.length; i++) {
        aElement[i].onmousedown = function(e) {
            e.preventDefault();
        }
    }
    
    // xử lý click setting
    setting.onclick = function(e) {
        ShowSetting.classList.toggle('show-settings')
    }
    
    // xử lý thả cảm xúc
    like.onclick = function() {
      follow.classList.toggle('footer-liking')
    }

    // xử lý login
    option.onclick = function(e) {
      e.preventDefault()
      openLogin.classList.toggle('open')
    }

    // xử lý chuyển tab navbar
    
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

    // xử lý chuyển tab home
    sidebars.forEach((sidebar, index) => {
      sidebar.onclick = function(e) {
        e.preventDefault()
          $('.sidebar-nav__item.actives').classList.remove('actives')
          sidebar.classList.add('actives')
          
          $('.home-tab.sliders').classList.remove('sliders')
          hometabs[index].classList.add('sliders')
      }
    })

    // xử lý nút like
    for (var i = 0; i < followLike.length; i++) {
      followLike[i].onclick = function () {
        for (var j = 0; j < followLikes.length; j++) {
          followLikes[j].classList.toggle('follow-like')
        }
      }
    }

    // xử lý hành vi mặc dịnh sidebar
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

    // xử lý phóng đại footer
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


    // xử lý phát tất cả
    button.onclick = function () {
      audio.play();
    }
    playbtns.onclick = function () {
      audio.play();
    }
    
    //
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
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

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    // document.onscroll = function () {
    //   const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //   const newCdWidth = cdWidth - scrollTop;

    //   cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
    //   cd.style.opacity = newCdWidth / cdWidth;
    // };

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
      cdThumbAnimatel.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
      cdThumbAnimatel.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };



    // Xử lý khi tua song
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

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("activetional", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("activetional", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
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
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
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
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
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
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("activetional", this.isRandom);
    repeatBtn.classList.toggle("activetional", this.isRepeat);
  }
}

app.start();