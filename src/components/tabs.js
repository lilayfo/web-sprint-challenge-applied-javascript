
import axios from 'axios';
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsWrapper = document.createElement('div');
  topics.forEach((linkText) => {
    const link = document.createElement('div');
    topicsWrapper.appendChild(link);
    link.textContent = linkText;
  });
  topicsWrapper.classList.add('topics');
  return topicsWrapper;
};


  const tabsAppender = (selector) => { 
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
      // const URL = 'http://localhost:5001/api/topics'
      
      // const result = axios.get(URL)
      // .then(res => {
      //     // access to data returned from api
      //     console.log(result.data)
      //     const topics = result.data;
      //     element.target.textContent = result.data.topics;
      //     const tabs = Tabs(topics);
      // const element = document.querySelector(selector).appendChild(tabs.render());
      // })
      // .catch(err => {
      //   debugger
      // })
      // const tabsAppender = (selector) =>{

      //   // get element property by css selector class name
        
      //   var element = document.getElementsByClassName(selector)[0];
        
      //   // append child into selector element
        
      //   url_string = "http://localhost:5001/api/topics";
        
      //   fetch(url_string).then((r)=>{r.text().then((d)=>{
        
      //   let CONTENT = d.split(",");
        
      //   console.log(CONTENT);
        
      //   topics_data=tabs(CONTENT);
        
      //   element.appendChild(topics_data);
        
      //   })})
        
      //   }
        
      //   // call tabs appender function
        
      //   tabsAppender("new");
      
        
      //  function tabsAppender()
        
      //   const tabsAppender = (selector) =>{
        
        // get element property by css selector class name
        
        // var element = document.getElementsByClassName(selector)[0];
        
        // // append child into selector element
        
        // url_string = "http://localhost:5001/api/topics";

        // fetch(url_string).then((r)=>{r.text().then((d)=>{
        
        //     let CONTENT = d.split(",");
            
        //     console.log(CONTENT);
            
        //     topics_data = Tabs(CONTENT);
            
        //     element.appendChild(topics_data);
            
        // })})

        axios.get(`http://localhost:5001/api/topics`)
        .then(res => {
        console.log(res)
       const target = document.querySelector(selector);
       const topic = res.data.topics;
        const newTab = Tabs(topic)
         target.appendChild(newTab)
  })
  .catch(err => {
    console.error(err);
  })
}

    export { Tabs, tabsAppender }
     