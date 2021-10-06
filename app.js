new Vue({
  el: "#app",
  data: {
    title: "DO TOU THINK YOU CAN GET A DISCOUNT FROM ME?",
    damage: 100,
    goodImg: "./img/1.png",
    badImg: "./img/2.png",
    kick: "./play/PUNCH.mp3",
    finalKick: "./play/attack.mp3",
  },
  methods: {
    damageDown() {
      if (this.damage >= 0) {
        this.damage -= 10;
      }
      if (this.damage == 0) {
        this.title = "Easy, OK!... You have DISCOUNT my friend :/";
      }
    },
    play(sound) {
      if (sound && this.damage >= 0) {
        let audio = new Audio(sound);
        audio.play();
      }
    },
  },
});
