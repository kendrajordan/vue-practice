var app = new Vue({
  el:'#app',
  data:{
    text:"This is a data variable",
    message:'HEllO wOrld, thIs is a mEssAgE dAtA vArIAblE.',
    textbox:"",
    grocerylist:['rice','apples','milk','bread'],
    seen:false,
    link:"https://bootcamp-f18.slack.com/messages/CDCBCTU8J/",
    title:'All Dogs Go to Heaven',
    released:'1989',
    output:"",
    hours:20,
    isRing:true,
    password:'password',
    categories:[
      {name:'JavaScript', sub:['Vue.js','React','Angular2']},
      {name:'Databases', sub:['MySQL','PostgreSQL','MariaDB']},
      {name:'Operating Systems', sub:['macOS','Linux','Windows']}
    ]

  },
  methods:{
    lowercase: function(){
      this.message=this.message.toLowerCase();
    },
    seenToggle: function(){
         this.seen = !this.seen;
    },
    pressedEnterOrSpace: function(){
      alert('You pressed the enter or space key!')
    },
    keyinput: function(event){
      this.output = event.target.value;
    }
  }
})
