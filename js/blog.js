import data from "./blogData.js";
  
  const latestpostContainer = document.getElementById("latestPost");
  const latestPost =
      `  
      <div class="img-hover-zoom">
      <img
        src="${data[0].img}"
        class="img-fluid rounded"
        alt=""
      />
    </div>
    <h5>${data[0].category}</h5>
    <a href=${data[0].slug}><h1>${data[0].title}</h1></a>
    <p>
    ${data[0].desc}
    </p>
    <div class="d-flex authorDetails">
      <img
        src="https://modamaan.github.io/Profile_t/img/1664894102050.jfif"
        class="img-fluid rounded-circle img-thumbnail"
        alt=""
      />
      <h3>Mohamed Amaan</h3>
      <h3>${data[0].date}</h3>
    </div>`
  
latestpostContainer.innerHTML = latestPost;

const recentpostContainer = document.getElementById("recentPost");
  const recentPost = data.slice(1,3).map((recentPost, i)=>{
    return `  
    <div class="d-flex">
          <div class="img-hover-zoom col-5">
            <img
              width="500"
              height="500"
              class="img-fluid rounded"
              src="${recentPost.img}"
              alt=""
            />
          </div>

          <div class="recentpostDetails col-7">
            <h5>${recentPost.category}</h5>
            <a href=${recentPost.slug}><h1>${recentPost.title}</h1></a>
            <p>
            ${recentPost.desc}
            </p>
            <h3>Mohamed Amaan</h3>
            <h3>${recentPost.date}</h3>
          </div>
        </div>`
  })
     
recentpostContainer.innerHTML = recentPost;

const oldpostContainer = document.getElementById("oldPost");
  const oldPost = data.slice(3).map((oldPost, i)=>{
    return `  
    <div class="col-lg-6 oldPosts">
          <div class="img-hover-zoom">
            <img
              width="500"
              height="500"
              class="img-fluid rounded"
              src="${oldPost.img}"
              alt=""
            />
          </div>
          <h5>${oldPost.category}</h5>
          <a href=${oldPost.slug}><h1>${oldPost.title}</h1></a>
          <p>
          ${oldPost.desc}
          </p>
          <div class="d-flex authorDetails">
            <img
              src="https://modamaan.github.io/Profile_t/img/1664894102050.jfif"
              class="img-fluid rounded-circle img-thumbnail"
              alt=""
            />
            <h3>Mohamed Amaan</h3>
            <h3>${oldPost.date}</h3>
          </div>
        </div>`
  }).join('');
     
oldpostContainer.innerHTML = oldPost;




