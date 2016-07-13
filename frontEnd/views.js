// var currentModelId = 0;
var MediaShowView = Backbone.View.extend({
  tagName: 'div',
  className: 'container-fluid',


  initialize: function() {

       this.listenTo(this.model, "change", this.render);
  },


  events :{
    "click .next": "moveToNextImg",
    "click .previous":"moveToPrevImg"
  },
  moveToNextImg: function(e){
    // console.log(this.model.id+1)
    // currentModelId = this.model.id;
    var nextModel = this.model.id+1;
    var numberOfModels =  mediaList.length;
    // if(nextModel<numberOfModels){
      var router = new Router();
      router.navigate("timeline/media/"+nextModel, {trigger: true});
    // }else{
    //   alert("this is the last image")
    // }
    // alert(nextModel)
  },
  moveToPrevImg: function(e){
    // console.log(this.model.id+1)
    // currentModelId = this.model.id ;
    var prevModel = this.model.id-1;
    console.log(prevModel)
    var numberOfModels =  mediaList.length;
    // if(prevModel< 0 ){
      var router = new Router();
      router.navigate("timeline/media/"+prevModel, {trigger: true});
    // }else{
    //   alert("this is the first image")
    // }
    // alert(nextModel)
  },


  template: _.template($("#mediaShow").html()),

  render: function(){
    var mediaShowTemplate = this.template(this.model.attributes);
    this.$el.html(mediaShowTemplate);
    return this;
  }
});

// //////////////////////////////
var TimelineView = Backbone.View.extend({
  tagName: 'div',
  // className: 'container-fluid',
  // events:{
    // "click .media": "showMedia"
  // },

  // showMedia : function (e){
    // console.log(e.currentTarget.id)
    // location.href = "#/the_route_you_want";
  // },

  initialize: function() {
       this.listenTo(this.model, "change", this.render);
  },
  template: _.template($("#timeline").html()),

  render: function(){
    var timelineTemplate = this.template(this.model.attributes);
    this.$el.html(timelineTemplate);
    return this;
  }

})
