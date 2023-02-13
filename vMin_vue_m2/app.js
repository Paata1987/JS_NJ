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
    inputCHangeHandler(event) {
      //console.log(event.target.value);
      this.inputValue = event.target.value;
    },
    addNewNote() {
      this.notes.push(this.inputValue);
    },
  },
};
Vue.createApp(App).mount("#app");
