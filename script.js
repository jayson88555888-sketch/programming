/* =====================================================
   PROGRAMMING LEARNING HUB
===================================================== */


/* =====================================================
   RESOURCE DATA
===================================================== */

const resources = [

    {
        type: "pdf",

        title: "Arrays and Linked Lists",

        description:
            "Programming notes covering arrays and linked lists.",

        icon: "📄",

        url:
            "https://raw.githubusercontent.com/jayson88555888-sketch/programming_learning/main/Arrays%20and%20Linked%20Lists.pdf"
    },


    {
        type: "image",

        title: "Programming Reference",

        description:
            "Programming reference image from the learning repository.",

        icon: "🖼️",

        url:
            "https://raw.githubusercontent.com/jayson88555888-sketch/programming_learning/main/6165938364373209348.jpg"
    }

];


/* =====================================================
   VIDEO DATA
===================================================== */

const videos = [

    {
        title: "Programming Learning Video 1",

        description:
            "Programming learning video.",

        videoId:
            "IqQ7QpmiBJ0"
    },


    {
        title: "Programming Learning Video 2",

        description:
            "Programming learning video.",

        videoId:
            "KiB0vRi2wlc"
    }

];


/* =====================================================
   GET HTML ELEMENTS
===================================================== */

const resourceGrid =
    document.getElementById("resourceGrid");

const videoGrid =
    document.getElementById("videoGrid");

const searchInput =
    document.getElementById("searchInput");

const themeButton =
    document.getElementById("themeButton");


/* =====================================================
   DISPLAY RESOURCES
===================================================== */

function displayResources(resourceArray) {

    resourceGrid.innerHTML = "";


    if (resourceArray.length === 0) {

        resourceGrid.innerHTML = `
            <div class="no-results">
                <h3>🔎 No resources found</h3>

                <p>
                    Try another search.
                </p>
            </div>
        `;

        return;
    }


    resourceArray.forEach(resource => {

        const card =
            document.createElement("article");


        card.className =
            "resource-card";


        let buttons = "";


        /* =========================
           PDF
        ========================== */

        if (resource.type === "pdf") {

            buttons = `

                <a
                    href="${resource.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="card-button primary-button"
                >
                    👁 View PDF
                </a>

                <a
                    href="${resource.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="card-button secondary-button"
                    download
                >
                    ⬇ Download
                </a>

            `;
        }


        /* =========================
           IMAGE
        ========================== */

        else if (resource.type === "image") {

            buttons = `

                <a
                    href="${resource.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="card-button primary-button"
                >
                    🖼️ View Image
                </a>

                <a
                    href="${resource.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="card-button secondary-button"
                >
                    🔗 Open
                </a>

            `;
        }


        card.innerHTML = `

            <div class="card-top">

                <div class="card-icon">
                    ${resource.icon}
                </div>

            </div>


            <div class="card-content">

                <h3>
                    ${resource.title}
                </h3>

                <p>
                    ${resource.description}
                </p>


                <div class="card-buttons">

                    ${buttons}

                </div>

            </div>

        `;


        resourceGrid.appendChild(card);

    });

}


/* =====================================================
   DISPLAY VIDEOS
===================================================== */

function displayVideos() {

    videoGrid.innerHTML = "";


    videos.forEach(video => {

        const card =
            document.createElement("article");


        card.className =
            "video-card";


        card.innerHTML = `

            <div class="video-container">

                <iframe
                    src="https://www.youtube.com/embed/${video.videoId}"
                    title="${video.title}"
                    loading="lazy"
                    allowfullscreen>
                </iframe>

            </div>


            <div class="video-info">

                <h3>
                    ▶️ ${video.title}
                </h3>

                <p>
                    ${video.description}
                </p>

            </div>

        `;


        videoGrid.appendChild(card);

    });

}


/* =====================================================
   SEARCH
===================================================== */

searchInput.addEventListener(
    "input",
    function () {

        const searchText =
            this.value
                .toLowerCase()
                .trim();


        const filtered =
            resources.filter(resource => {

                return (

                    resource.title
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    resource.description
                        .toLowerCase()
                        .includes(searchText)

                );

            });


        displayResources(filtered);

    }
);


/* =====================================================
   DARK MODE
===================================================== */

themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            themeButton.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

        else {

            themeButton.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);


/* =====================================================
   LOAD SAVED THEME
===================================================== */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}


/* =====================================================
   START WEBSITE
===================================================== */

displayResources(resources);

displayVideos();