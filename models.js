var  Media = Backbone.Model.extend({

    // defaults: {
      // id: 1,
      // timelineTitle: "Timeline title",
      // title: "Media Title",
      // hashtag:"#SomethingTrendy",
      // timeStamp: "11-07-2016",
      // retweetsCount:"347",
      // description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // sourceUrl:"www.vox.com",
      // sourceName: "Vox",
      // imgUrl: "./images/juarez1.jpg",
      // videoUrl:"",
      // gifUrl:"",
      // mediaType: "img"
    // },
    initialize: function(){

      this.on("invalid", function(model, error){
        console.log(error);
      });

      //on change event listener
      this.on('change', function(){
        // console.log('- Values for this model have changed. '+JSON.stringify(this));
        // this.save();
        //TO do that, need to implemente, myAPI.js to overight Backoben.sync() interface
      });
    }
});

////////////////////////////////
var  Timeline = Backbone.Model.extend({
  // defaults: {
  //   title:"Timeline Title ",
  //   description: "some awesome description. We Took A 2,428-Mile Road Trip Along The Mexico Border: Here's What We Saw",
  //   hashtag:[
  //     "#example",  "#example2",
  //   ],
  //   "rows":
  //   [
  //     {
  //       "heading":"Some heading",
  //       "date": "12-07-2016",
  //       "medias":
  //       [
  //         {
  //           "id": 1,//
  //           // "title": "Media Title",
  //           // "hashtag":["#SomethingTrendy", "#something"],
  //           // "timeStamp": "11-07-2016",
  //           // "retweetsCount":"347",
  //           // "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //           // "sourceUrl":"www.vox.com",
  //           // "sourceDescriptiong": "Vox",
  //           "imgUrl": "./images/juarez1.jpg",
  //           // "videoUrl":"",
  //           // "gifUrl":"",
  //           // "mediaType": "img"
  //         },
  //         {
  //           "id":2,
  //           "title": "Media Title2",
  //           "hashtag":["#SomethingTrendy2", "#something2"],
  //           "timeStamp": "11-07-2016",
  //           "retweetsCount":"347",
  //           "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //           "sourceUrl":"www.vox.com",
  //           "sourceDescriptiong": "Vox",
  //           "imgUrl": "./images/juarez2.jpg",
  //           "videoUrl":"",
  //           "gifUrl":"",
  //           "mediaType": "img"
  //         },
  //         {
  //           "id": 3,
  //           "imgUrl": "./images/juarez1.jpg"
  //         },
  //         {
  //           "id": 4,
  //           "imgUrl": "./images/juarez1.jpg"
  //         }
  //       ]
  //     },
  //     {
  //       "heading":"Some heading",
  //       "date": "12-07-2016",
  //       "medias":
  //       [
  //         {
  //           "id": 1,//
  //           // "title": "Media Title",
  //           // "hashtag":["#SomethingTrendy", "#something"],
  //           // "timeStamp": "11-07-2016",
  //           // "retweetsCount":"347",
  //           // "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //           // "sourceUrl":"www.vox.com",
  //           // "sourceDescriptiong": "Vox",
  //           "imgUrl": "./images/juarez1.jpg",
  //           // "videoUrl":"",
  //           // "gifUrl":"",
  //           // "mediaType": "img"
  //         },
  //         {
  //           "id":2,
  //           "title": "Media Title2",
  //           "hashtag":["#SomethingTrendy2", "#something2"],
  //           "timeStamp": "11-07-2016",
  //           "retweetsCount":"347",
  //           "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //           "sourceUrl":"www.vox.com",
  //           "sourceDescriptiong": "Vox",
  //           "imgUrl": "./images/juarez2.jpg",
  //           "videoUrl":"",
  //           "gifUrl":"",
  //           "mediaType": "img"
  //         },
  //         {
  //           "id": 4,
  //           "imgUrl": "http://pbs.twimg.com/media/CnFjA7pUMAACySQ.jpg"
  //         }
  //       ]
  //     }
  //   ]
  // },
  initialize: function(){
    this.on("invalid", function(model, error){
      console.log(error);
    });
    //on change event listener
    this.on('change', function(){
      // console.log('- Values for this model have changed. '+JSON.stringify(this));
      // this.save();
      //TO do that, need to implemente, myAPI.js to overight Backoben.sync() interface
    });
  }

})
/////////////////////////////
