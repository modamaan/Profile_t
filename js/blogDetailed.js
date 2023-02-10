import data from "./blogData.js";

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