function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class CardProfile extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      index: 4,
      currentTime: "0:00",
      musicList: [
      {
        name: "Anonymous Hackers",
        author: "Official",
        img:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/2bbf3a52005319.5901123c114f4.gif",
        audio:
        "https://github.com/MohammadTaseenKhan/audio-hub/blob/main/Anonymous%20Hackers%20Theme%20Song(Official)2020%F0%9F%98%B3.mp3?raw=true",
        duration: "3:29" },

      {
        name: "Bass Booster Arabic Remix",
        author: "Bass Song",
        img: "https://i.ytimg.com/vi/IBOLa6zvPLY/maxresdefault.jpg",
        audio:
        "https://github.com/MohammadTaseenKhan/audio-hub/blob/main/Bass%20Booster%20Arabic%20Remix%202022%20(Bass%20Song)%20Best%20Arabic%20Music%20%23Remix.mp3?raw=true",
        duration: "3:10" },

      {
        name: "DJ Gimi-O × Habibi",
        author: "Slowed",
        img: "https://i.ytimg.com/vi/0EPCzeNCNBc/maxresdefault.jpg",
        audio:
        "https://github.com/MohammadTaseenKhan/audio-hub/blob/main/DJ%20Gimi-O%20%C3%97%20Habibi%20%5BSlowed%5D%20_%20Sword%20Dance%20Kingdom%20Of%20Saudi%20Arabia-GyP90wEOwMc.mp3?raw=true",
        duration: "1:50" },


      {
        name: "Dior - Sigma Male Rule Song",
        author: "T3NZU Remix",
        img: "https://i.ytimg.com/vi/xeUwu3FHjaM/hqdefault.jpg",
        audio:
        "https://github.com/MohammadTaseenKhan/audio-hub/blob/main/Dior%20-%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20(T3NZU%20Remix)%20Sigma%20Male%20Rule%20Song%20(Car%20Mix)%20Bass%20Boosted.mp3?raw=true",
        duration: "2:22" },

      {
        name: "Fatih Yılmaz & Amorf",
        author: "Arabic Trap",
        img: "https://i.ytimg.com/vi/DBAr8tl4ZpY/maxresdefault.jpg",
        audio:
        "https://github.com/MohammadTaseenKhan/audio-hub/blob/main/Fatih%20Y%C4%B1lmaz%20&%20Amorf%20-%20Menak%20(Arabic%20Trap)-DBAr8tl4ZpY.mp3?raw=true",
        duration: "2:26" },
{
        name: "Balti - Ya Lili feat",
        author: "ERS Remix",
        img: "https://i.ytimg.com/an_webp/BLlo7rMXI_Q/mqdefault_6s.webp?du=3000&sqp=CJz11pIG&rs=AOn4CLAyMfoe4-NkUUT-vgjvJLDBevIgpA",
        audio:
        "https://github.com/MohammadTaseenKhan/audio-hub/blob/main/Balti%20-%20Ya%20Lili%20feat.%20Hamouda%20(ERS%20Remix)%20_%20Overdrive%20Stealing%20%5BCar%20Scene%5D.mp3?raw=true",
        duration: "1:50" },
{
        name: "Best Hacker music",
        author: "Deface",
        img: "https://i.ytimg.com/an_webp/Z-VfaG9ZN_U/mqdefault_6s.webp?du=3000&sqp=CL_m1pIG&rs=AOn4CLCvAEttMvhCFA0-ftIt-yuyWY96hQ",
        audio:
        "https://github.com/MohammadTaseenKhan/audio-hub/blob/main/Best%20Hacker%20music%20%20%20Deface%20Music%20EVER.mp3?raw=true",
        duration: "4:30" },

        {
                name: "Coke Studio Season 14 Pasoori",
                author: "Ali Sethi & Shae Gill",
                img: "https://i.ytimg.com/an_webp/5Eqb_-j3FDA/mqdefault_6s.webp?du=3000&sqp=CICA15IG&rs=AOn4CLDjr2_CFx5Qcd5n0TRBSPQ6xxwcLQ",
                audio:
                "https://github.com/MohammadTaseenKhan/audio-hub/blob/main/Coke%20Studio%20_%20Season%2014%20_%20Pasoori%20_%20Ali%20Sethi%20x%20Shae%20Gill.mp3?raw=true",
                duration: "4:30" },


      {
        name: "Humood - Kun Anta",
        author: "Official Music",
        img: "https://i.ytimg.com/vi/qKVW_wJs91Q/maxresdefault.jpg",
        audio:
        "https://github.com/MohammadTaseenKhan/audio-hub/blob/main/Humood%20-%20Kun%20Anta%20_%20%D8%AD%D9%85%D9%88%D8%AF%20%D8%A7%D9%84%D8%AE%D8%B6%D8%B1%20-%20%D9%83%D9%86%20%D8%A3%D9%86%D8%AA%20_%20Official%20Music%20Video.mp3?raw=true",
        duration: "4:33" }],


      pause: false });_defineProperty(this, "changeCurrentTime",


















    e => {
      const duration = this.playerRef.duration;

      const playheadWidth = this.timelineRef.offsetWidth;
      const offsetWidht = this.timelineRef.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;

      const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

      this.playheadRef.style.width = userClickWidhtInPercent + "%";
      this.playerRef.currentTime = duration * userClickWidhtInPercent / 100;
    });_defineProperty(this, "hoverTimeLine",

    e => {
      const duration = this.playerRef.duration;

      const playheadWidth = this.timelineRef.offsetWidth;

      const offsetWidht = this.timelineRef.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;
      const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

      if (userClickWidhtInPercent <= 100) {
        this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
      }

      const time = duration * userClickWidhtInPercent / 100;

      if (time >= 0 && time <= duration) {
        this.hoverPlayheadRef.dataset.content = this.formatTime(time);
      }
    });_defineProperty(this, "resetTimeLine",

    () => {
      this.hoverPlayheadRef.style.width = 0;
    });_defineProperty(this, "timeUpdate",

    () => {
      const duration = this.playerRef.duration;
      const timelineWidth =
      this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
      const playPercent = 100 * (this.playerRef.currentTime / duration);
      this.playheadRef.style.width = playPercent + "%";
      const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
      this.setState({
        currentTime });

    });_defineProperty(this, "formatTime",

    currentTime => {
      const minutes = Math.floor(currentTime / 60);
      let seconds = Math.floor(currentTime % 60);

      seconds = seconds >= 10 ? seconds : "0" + seconds % 60;

      const formatTime = minutes + ":" + seconds;

      return formatTime;
    });_defineProperty(this, "updatePlayer",

    () => {
      const { musicList, index } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      this.playerRef.load();
    });_defineProperty(this, "nextSong",

    () => {
      const { musicList, index, pause } = this.state;

      this.setState({
        index: (index + 1) % musicList.length });

      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });_defineProperty(this, "prevSong",

    () => {
      const { musicList, index, pause } = this.state;

      this.setState({
        index: (index + musicList.length - 1) % musicList.length });

      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });_defineProperty(this, "playOrPause",

    () => {
      const { musicList, index, pause } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      if (!this.state.pause) {
        this.playerRef.play();
      } else {
        this.playerRef.pause();
      }
      this.setState({
        pause: !pause });

    });_defineProperty(this, "clickAudio",

    key => {
      const { pause } = this.state;

      this.setState({
        index: key });


      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });}componentDidMount() {this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);this.playerRef.addEventListener("ended", this.nextSong, false);this.timelineRef.addEventListener("click", this.changeCurrentTime, false);this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);}componentWillUnmount() {this.playerRef.removeEventListener("timeupdate", this.timeUpdate);this.playerRef.removeEventListener("ended", this.nextSong);this.timelineRef.removeEventListener("click", this.changeCurrentTime);this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);}

  render() {
    const { musicList, index, currentTime, pause } = this.state;
    const currentSong = musicList[index];
    return /*#__PURE__*/(
      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("div", { className: "current-song" }, /*#__PURE__*/
      React.createElement("audio", { ref: ref => this.playerRef = ref }, /*#__PURE__*/
      React.createElement("source", { src: currentSong.audio, type: "audio/ogg" }), "Your browser does not support the audio element."), /*#__PURE__*/


      React.createElement("div", { className: "img-wrap" }, /*#__PURE__*/
      React.createElement("img", { src: currentSong.img })), /*#__PURE__*/

      React.createElement("span", { className: "song-name" }, currentSong.name), /*#__PURE__*/
      React.createElement("span", { className: "song-autor" }, currentSong.author), /*#__PURE__*/

      React.createElement("div", { className: "time" }, /*#__PURE__*/
      React.createElement("div", { className: "current-time" }, currentTime), /*#__PURE__*/
      React.createElement("div", { className: "end-time" }, currentSong.duration)), /*#__PURE__*/


      React.createElement("div", { ref: ref => this.timelineRef = ref, id: "timeline" }, /*#__PURE__*/
      React.createElement("div", { ref: ref => this.playheadRef = ref, id: "playhead" }), /*#__PURE__*/
      React.createElement("div", {
        ref: ref => this.hoverPlayheadRef = ref,
        class: "hover-playhead",
        "data-content": "0:00" })), /*#__PURE__*/



      React.createElement("div", { className: "controls" }, /*#__PURE__*/
      React.createElement("button", {
        onClick: this.prevSong,
        className: "prev prev-next current-btn" }, /*#__PURE__*/

      React.createElement("i", { className: "fas fa-backward" })), /*#__PURE__*/


      React.createElement("button", { onClick: this.playOrPause, className: "play current-btn" },
      !pause ? /*#__PURE__*/
      React.createElement("i", { className: "fas fa-play" }) : /*#__PURE__*/

      React.createElement("i", { class: "fas fa-pause" })), /*#__PURE__*/


      React.createElement("button", {
        onClick: this.nextSong,
        className: "next prev-next current-btn" }, /*#__PURE__*/

      React.createElement("i", { className: "fas fa-forward" })))), /*#__PURE__*/



      React.createElement("div", { className: "play-list" },
      musicList.map((music, key = 0) => /*#__PURE__*/
      React.createElement("div", {
        key: key,
        onClick: () => this.clickAudio(key),
        className:
        "track " + (
        index === key && !pause ? "current-audio" : "") + (
        index === key && pause ? "play-now" : "") }, /*#__PURE__*/


      React.createElement("img", { className: "track-img", src: music.img }), /*#__PURE__*/
      React.createElement("div", { className: "track-discr" }, /*#__PURE__*/
      React.createElement("span", { className: "track-name" }, music.name), /*#__PURE__*/
      React.createElement("span", { className: "track-author" }, music.author)), /*#__PURE__*/

      React.createElement("span", { className: "track-duration" },
      index === key ? currentTime : music.duration))))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(CardProfile, null), document.getElementById("root"));




var isCtrl = false;

document.onkeyup = function (e) {

if (e.which == 17)

isCtrl = false;

}

document.onkeydown = function (e) {

if (e.which == 123)

isCtrl = true;

if (((e.which == 85) || (e.which == 65) || (e.which == 88) || (e.which == 67) || (e.which == 86) || (e.which == 2) || (e.which == 3) || (e.which == 123) || (e.which == 83)) && isCtrl == true) {

alert('WE HAVE DISABLED THIS FUNCTION FOR SECURITY REASONS');

return false;

}

}

// right click code

var isNS = (navigator.appName == "Netscape") ? 1 : 0;

if (navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);

function mischandler() {

alert('Sorry you can not copy anything from this website ');

alert('Rather than copying you can share the link of the website ');

return false;

}

function mousehandler(e) {

var myevent = (isNS) ? e : event;

var eventbutton = (isNS) ? myevent.which : myevent.button;

if ((eventbutton == 2) || (eventbutton == 3)) return false;

}

document.oncontextmenu = mischandler;

document.onmousedown = mousehandler;

document.onmouseup = mousehandler;

//select content code disable alok goyal

function killCopy(e) {

return false

}

function reEnable() {

return true

}

document.onselectstart = new Function("return false")

if (window.sidebar) {

document.onmousedown = killCopy

document.onclick = reEnable

}
