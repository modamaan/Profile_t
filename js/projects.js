const data = [
  {
    title: "Product Card",
    source:"https://github.com/modamaan/Product_Card",
    external:"https://modamaan.github.io/Product_Card/",
    desc: "Association for Nike ",
    tech:[
        {stack: "Html"},
        {stack: "Css"},
        {stack: "Js"},
    ]
  },
  {
    title: "Education_website",
    source:"https://github.com/modamaan/Education_website",
    external:"https://modamaan.github.io/Education_website/",
    desc: "Association for Computing ",
    tech:[
        {stack: "Html"},
        {stack: "Css"},
        {stack: "Js"},
    ]
  },
  {
    title: "Portfolio",
    source:"https://modamaan.github.io/portfolio/",
    external:"https://modamaan.github.io/portfolio/",
    desc: "Association for Computing ",
    tech:[
        {stack: "React"},
        {stack: "Css"},
        {stack: "HTML"},
    ]
  },
  {
    title: "Education_website",
    source:"https://github.com/modamaan/Education_website",
    external:"https://modamaan.github.io/Education_website/",
    desc: "Association for Computing ",
    tech:[
        {stack: "Html"},
        {stack: "Css"},
        {stack: "Js"},
    ]
  },
];

const projectContainer = document.getElementById("projectContents");
const projects = data.map((project, i) => {
  return (
    `  
    <div class="col-lg-6 " key='${i}'>
      <div class="card shadow">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5>Featured Project</h5>
            <div class="links">
              <a href="${project.source}" target="_blank"><i class="fa fa-github " aria-hidden="true"></i></a>
              <a href="${project.external}" target="_blank"><i class="fa fa-external-link  " aria-hidden="true"></i></a>
            </div>
          </div>
          <h3>${project.title}</h3>
          <p class="mt-3">
           ${project.desc}
          </p>
          ${project.tech.map((stack, i)=>{
            return ` 
            <span class="badge rounded-pill ">${stack.stack}</span>
            `
          })}
        </div>
      </div>
    </div>`
  )
}).join('');

projectContents.innerHTML = projects;
