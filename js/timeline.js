const data = [
  {
    title: "Mern stack developer 💻 ",
    date: "Oct 21, 2023",
    desc: "Learn how to working backend database nodejs , passord encryption etc. .",
  },
  {
    title: "Javascript",
    date: "Mar 10, 2022",
    desc: "Learn Javascript help of yt channels develop more small projects using js",
  },
  {
    title: "Bootstrap 5",
    date: "Jan 3, 2022",
    desc: "Learn how to use bootstrap help of yestech media yt channel",
  },
  {
    title: "Static webpage",
    date: "apr 30 2021",
    desc: "Learn how to create static webpage and develop first static web with the help of Brototype youtube channel",
  },
];

const timelineContainer = document.getElementById("timelineContainer");
const timeline = data.map((timeline, i) => {
  return `
  <div class="row content" key='${i}'>
        <div class="col-lg-1 col-md-2 col-sm-3">
            <div class="verticleLine"></div>
            <div class="badgeEle mt-2 mb-2"></div>
            <div class="verticleLine"></div>
          </div>
          <div class="col-lg-11 col-md-10 col-sm-9">
            <div class="card shadow">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5>${timeline.title}</h5>
                  <h4>${timeline.date}</h4>
                </div>
                <p class="mt-3">${timeline.desc}</p>
              </div>
            </div>
          </div>
          </div>
          `;
}).join('');

timelineContainer.innerHTML = timeline;
