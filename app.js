const cssVue = Vue.createApp({

    data() {
      return {
        red: 0,
        blue: 0,
        orange: 0,
        green: 0,
        myArray: [this.red, this.blue, this.orange, this.green],

        intervalTime: 100,
        winner: "",
        result: true,
        wert: 10,
        widthNum: 1230,
        myInterval: "",
        myTimeout: "",
        myCar:"",
        selectColor:true

      };
    },
    methods: {

      myRed() {
        const randomRed = Math.floor(Math.random() * this.wert)
        this.red += randomRed
        if (this.red <= this.widthNum) {
          document.querySelectorAll(".box")[0].style.width = this.red + 'px'

        } else {
        
          if(this.myCar=="Red"){
            this.winner = "Your guess is correct... Red Car won"
          }else{
            this.winner = "Your guess is wrong!!! Red Car won"
          }
     
          this.stop()
          this.mySettimeout()
        }
      },
      myBlue() {
        const randomBlue = Math.floor(Math.random() * this.wert)
        this.blue += randomBlue
        if (this.blue <= this.widthNum) {
          document.querySelectorAll(".box")[1].style.width = this.blue + 'px'


        } else {
         
          if(this.myCar=="Blue"){
            this.winner = "Your guess is correct... Blue Car won"
          }else{
            this.winner = "Your guess is wrong!!! Blaues Car won"
          }
          this.stop()
          this.mySettimeout()


        }
      },
      myOrange() {
        const randomOrange = Math.floor(Math.random() * this.wert)
        this.orange += randomOrange
        if (this.orange <= this.widthNum) {
          document.querySelectorAll(".box")[2].style.width = this.orange + 'px'

        } else {

       
          if(this.myCar=="Orange"){
            this.winner = "Your guess is correct... Orange car won"
          }else{
            this.winner = "Your guess is wrong!!! Orange car won"
          }
          this.stop()
          this.mySettimeout()
        }
      },
      myGreen() {
        const randomGreen = Math.floor(Math.random() * this.wert)
        this.green += randomGreen
        if (this.green <= this.widthNum) {
          document.querySelectorAll(".box")[3].style.width = this.green + 'px'

        } else {

      
          if(this.myCar=="Green"){
            this.winner = "Your guess is correct... Green car won"
          }else{
            this.winner = "Your guess is wrong!!! Green car won"
          }
          this.stop()
          this.mySettimeout()

        }
      },

      start() {
if(!this.myCar && this.red==0){
  alert("Please select your car")
   }else{ 

        this.myInterval = setInterval(this.myRed, this.intervalTime);
        this.myInterval2 = setInterval(this.myBlue, this.intervalTime);
        this.myInterval3 = setInterval(this.myOrange, this.intervalTime);
        this.myInterval4 = setInterval(this.myGreen, this.intervalTime);
      }
      },
      stop() {

        clearInterval(this.myInterval);
        clearInterval(this.myInterval2);
        clearInterval(this.myInterval3);
        clearInterval(this.myInterval4);
        this.selectColor = !this.selectColor
      
      

      },

      reset() {

        this.red = 0,
          this.blue = 0,
          this.orange = 0,
          this.green = 0,
          this.wert = 0,
          window.location.reload();
        
      },


      mySettimeout() {
        this.myTimeout = setTimeout(this.reset, 10000);
      }

    },
    computed: {
      colorChange() {
        if (this.red >= this.widthNum) {
          return { backgroundColor: "red" }

        }
        else if (this.blue >= this.widthNum) {
          return { backgroundColor: "blue" }

        }
        else if (this.orange >= this.widthNum) {
          return { backgroundColor: "orange" }

        }
        else if (this.green >= this.widthNum) {
          return { backgroundColor: "green" }

        }
      }
    },

  });


  cssVue.mount("#newProject");
