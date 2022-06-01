const mainvue = {
  data() {
      return {
          list01: [true, false, false, false, false, false, false, false],
          list02: [true, false, false, false, false, false],
          list03: [true, false, false, false, false, false],
          list04: [true, false, false, false, false, false, false],
          list05: [true, false, false],
          list06: [true, false, false, false]
      };
  },

  methods: {
      cg01(idx) {
          this.list01 = [false, false, false, false, false, false, false, false];
          this.list01[idx] = true;
      },
      cg02(idx) {
          this.list02 = [false, false, false, false, false, false];
          this.list02[idx] = true;
      },
      cg03(idx) {
          this.list03 = [false, false, false, false, false];
          this.list03[idx] = true;
      },
      cg04(idx) {
          this.list04 = [false, false, false, false, false, false, false];
          this.list04[idx] = true;
      },
      cg05(idx) {
          this.list05 = [false, false, false];
          this.list05[idx] = true;
      },
      cg06(idx) {
          this.list06 = [false, false, false, false];
          this.list06[idx] = true;
      },
  }

};

const main = Vue.createApp(mainvue).mount('#vueapp');