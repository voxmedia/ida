var Router =Backbone.Router.extend({
  routes: {
    "": "timeline",
    "timeline": "timeline",
    // "timeline/:tid": "showTimeline",
    // "timeline/:tid/media/:id":"showMedia"
    "timeline/media/:id":"showMedia"
  },
  home: function(){
  console.log("home<--")
  //TODO: figure out why this doesn't load.
  //also how to route home view
  },

  // timeline: function(tid){
  //   console.log("timeline"+1)
  //     console.log("timeline no id")
  // },
  // timeline:  function (){
  //   $("#main").html("Timelines");
  //   console.log("timeline")
  // },

  timeline: function(){
    // console.log("timeline"+1)
      console.log("timeline id ")
      //TODO:find from collection
      // var newDefaultTimeline = new Timeline();
      // var newDefaultTimelineView = new TimelineView({model: newDefaultTimeline})
      $("#main").html(newDefaultTimelineView.render().$el);
  },

  showMedia :function(id){
    var newDefaultMedia = mediaList.get({id:id})
      // var newDefaultMedia = new Media({id:id});
      // newDefaultMedia.fetch();
      // console.log(newDefaultMedia.id)
      var newDefaulmediaView = new MediaShowView({model: newDefaultMedia})
      $("#main").html(newDefaulmediaView.render().$el);
  }


})
