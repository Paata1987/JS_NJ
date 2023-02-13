const App = {
  data() {
    return {
      title: "Note List",
      placeholderString: "task name",
      inputValue: "",
      notes: ["something1", "something2", "something3"],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },

    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
    doubleCountCompiuted() {
      console.log("compiutedLog: ");

      return this.notes.length * 3;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = "";
      }
      console.log("changed value", value);
    },
  },
};
Vue.createApp(App).mount("#app");
