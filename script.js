
// বাংলাদেশের বিভাগ ও কিছু জেলার তথ্য
const bangladeshData = {
    "ঢাকা": {
        districts: ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ", "টাঙ্গাইল", "মানিকগঞ্জ", "মুন্সীগঞ্জ", "নরসিংদী", "ফরিদপুর", "গোপালগঞ্জ", "মাদারীপুর", "রাজবাড়ী", "শরীয়তপুর", "কিশোরগঞ্জ"],
        history: "ঢাকা বাংলাদেশের রাজধানী ও দেশের অন্যতম প্রধান প্রশাসনিক, অর্থনৈতিক এবং সাংস্কৃতিক কেন্দ্র। মুঘল আমলে ঢাকা গুরুত্বপূর্ণ নগরীতে পরিণত হয়।"
    },
    "চট্টগ্রাম": {
        districts: ["চট্টগ্রাম", "কক্সবাজার", "কুমিল্লা", "ফেনী", "নোয়াখালী", "লক্ষ্মীপুর", "চাঁদপুর", "ব্রাহ্মণবাড়িয়া", "রাঙামাটি", "বান্দরবান", "খাগড়াছড়ি"],
        history: "চট্টগ্রাম বন্দর, পাহাড়, সমুদ্র ও বৈচিত্র্যময় সংস্কৃতির জন্য পরিচিত। দেশের বাণিজ্য ও পর্যটনে এই বিভাগের গুরুত্বপূর্ণ ভূমিকা রয়েছে।"
    },
    "রাজশাহী": {
        districts: ["রাজশাহী", "বগুড়া", "পাবনা", "নাটোর", "নওগাঁ", "জয়পুরহাট", "চাঁপাইনবাবগঞ্জ", "সিরাজগঞ্জ"],
        history: "রাজশাহী অঞ্চল আম, রেশম, শিক্ষা ও প্রাচীন প্রত্নতাত্ত্বিক নিদর্শনের জন্য পরিচিত।"
    },
    "খুলনা": {
        districts: ["খুলনা", "বাগেরহাট", "সাতক্ষীরা", "যশোর", "নড়াইল", "মাগুরা", "ঝিনাইদহ", "কুষ্টিয়া", "চুয়াডাঙ্গা", "মেহেরপুর"],
        history: "খুলনা অঞ্চল সুন্দরবন, নদী, উপকূলীয় পরিবেশ ও ঐতিহাসিক স্থাপনার জন্য পরিচিত।"
    },
    "বরিশাল": {
        districts: ["বরিশাল", "ভোলা", "পটুয়াখালী", "পিরোজপুর", "বরগুনা", "ঝালকাঠি"],
        history: "বরিশাল নদী, খাল, কৃষি ও নৌপথের ঐতিহ্যের জন্য পরিচিত।"
    },
    "সিলেট": {
        districts: ["সিলেট", "মৌলভীবাজার", "হবিগঞ্জ", "সুনামগঞ্জ"],
        history: "সিলেট চা-বাগান, পাহাড়, হাওর, জলাবন ও ধর্মীয়-সাংস্কৃতিক ঐতিহ্যের জন্য পরিচিত।"
    },
    "রংপুর": {
        districts: ["রংপুর", "দিনাজপুর", "কুড়িগ্রাম", "গাইবান্ধা", "লালমনিরহাট", "নীলফামারী", "পঞ্চগড়", "ঠাকুরগাঁও"],
        history: "রংপুর অঞ্চলে কৃষি, লোকসংস্কৃতি, ঐতিহাসিক স্থাপনা ও প্রাকৃতিক বৈচিত্র্যের সমৃদ্ধ ঐতিহ্য রয়েছে।"
    },
    "ময়মনসিংহ": {
        districts: ["ময়মনসিংহ", "জামালপুর", "শেরপুর", "নেত্রকোনা"],
        history: "ময়মনসিংহ লোকসাহিত্য, নদী, কৃষি ও সাংস্কৃতিক ঐতিহ্যের জন্য পরিচিত।"
    }
};

// নির্বাচিত কিছু জেলার নমুনা তথ্য
const districtDetails = {
    "সিলেট": {
        division: "সিলেট",
        history: "সিলেট উত্তর-পূর্ব বাংলাদেশের একটি ঐতিহ্যবাহী জেলা। চা-শিল্প, প্রাকৃতিক সৌন্দর্য, সুফি ঐতিহ্য এবং স্বতন্ত্র ভাষা ও সংস্কৃতি এই জেলার পরিচয়ের অংশ।",
        upazilas: ["সিলেট সদর", "দক্ষিণ সুরমা", "বিশ্বনাথ", "ওসমানীনগর", "বালাগঞ্জ", "বিয়ানীবাজার", "গোলাপগঞ্জ", "জকিগঞ্জ", "কানাইঘাট", "জৈন্তাপুর", "কোম্পানীগঞ্জ", "গোয়াইনঘাট", "ফেঞ্চুগঞ্জ"],
        places: ["জাফলং", "রাতারগুল জলাবন", "বিছানাকান্দি", "হযরত শাহজালাল (রহ.)-এর মাজার"],
        food: ["সাতকরা দিয়ে রান্না", "স্থানীয় মাছের পদ", "পিঠা"],
        culture: "সিলেটি ভাষা, লোকসংগীত, চা-বাগানের জীবন ও ধর্মীয় ঐতিহ্য এ অঞ্চলের সংস্কৃতির অংশ।"
    },
    "ঢাকা": {
        division: "ঢাকা",
        history: "ঢাকা বাংলাদেশের রাজধানী। মুঘল আমল থেকে আধুনিক বাংলাদেশ পর্যন্ত প্রশাসন, ব্যবসা, শিক্ষা ও সংস্কৃতিতে এই শহর গুরুত্বপূর্ণ ভূমিকা পালন করেছে।",
        upazilas: ["সাভার", "ধামরাই", "কেরানীগঞ্জ", "নবাবগঞ্জ", "দোহার"],
        places: ["লালবাগ কেল্লা", "আহসান মঞ্জিল", "জাতীয় স্মৃতিসৌধ", "জাতীয় সংসদ ভবন"],
        food: ["বিরিয়ানি", "বাকরখানি", "কাচ্চি"],
        culture: "পুরান ঢাকার ঐতিহ্যবাহী খাবার, উৎসব, স্থাপত্য ও নগরজীবন ঢাকার সংস্কৃতির গুরুত্বপূর্ণ অংশ।"
    },
    "কক্সবাজার": {
        division: "চট্টগ্রাম",
        history: "কক্সবাজার বাংলাদেশের দক্ষিণ-পূর্ব উপকূলের একটি পর্যটন জেলা। সমুদ্রসৈকত, সামুদ্রিক পরিবেশ ও স্থানীয় জনগোষ্ঠীর সংস্কৃতি এ জেলার পরিচয়ের অংশ।",
        upazilas: ["কক্সবাজার সদর", "চকরিয়া", "ঈদগাঁও", "মহেশখালী", "পেকুয়া", "রামু", "উখিয়া", "টেকনাফ", "কুতুবদিয়া"],
        places: ["কক্সবাজার সমুদ্রসৈকত", "হিমছড়ি", "ইনানী সৈকত", "মহেশখালী"],
        food: ["সামুদ্রিক মাছ", "শুঁটকি", "স্থানীয় খাবার"],
        culture: "সমুদ্রনির্ভর জীবনযাত্রা, স্থানীয় হস্তশিল্প ও উপকূলীয় খাবার এ অঞ্চলের বৈশিষ্ট্য।"
    },
    "বগুড়া": {
        division: "রাজশাহী",
        history: "বগুড়া উত্তরবঙ্গের একটি পরিচিত জেলা। নিকটবর্তী মহাস্থানগড় প্রাচীন বাংলার অন্যতম গুরুত্বপূর্ণ প্রত্নতাত্ত্বিক নিদর্শন।",
        upazilas: ["বগুড়া সদর", "শিবগঞ্জ", "শেরপুর", "ধুনট", "দুপচাঁচিয়া", "আদমদীঘি", "কাহালু", "নন্দীগ্রাম", "সোনাতলা", "সারিয়াকান্দি", "গাবতলী", "শাজাহানপুর"],
        places: ["মহাস্থানগড়", "গোকুল মেধ", "ভাসু বিহার"],
        food: ["বগুড়ার দই", "স্থানীয় মিষ্টি"],
        culture: "প্রাচীন প্রত্নতত্ত্ব, কৃষি ও স্থানীয় খাবার বগুড়ার পরিচিত ঐতিহ্য।"
    },
    "দিনাজপুর": {
        division: "রংপুর",
        history: "দিনাজপুর উত্তর বাংলাদেশের একটি ঐতিহ্যবাহী জেলা। কান্তজিউ মন্দির, কৃষি ও ঐতিহাসিক স্থাপনা এই জেলার পরিচিত সম্পদ।",
        upazilas: ["দিনাজপুর সদর", "বিরল", "বিরামপুর", "বোচাগঞ্জ", "ফুলবাড়ী", "ঘোড়াঘাট", "হাকিমপুর", "কাহারোল", "খানসামা", "নবাবগঞ্জ", "পার্বতীপুর", "বীরগঞ্জ", "চিরিরবন্দর"],
        places: ["কান্তজিউ মন্দির", "রামসাগর", "নয়াবাদ মসজিদ"],
        food: ["চিড়া", "স্থানীয় পিঠা", "ঐতিহ্যবাহী মিষ্টি"],
        culture: "কৃষি, লোকজ ঐতিহ্য ও ঐতিহাসিক স্থাপনা দিনাজপুরের সংস্কৃতির অংশ।"
    }
};

// HTML element নির্বাচন
const divisionSelect = document.getElementById("division-select");
const districtSelect = document.getElementById("district-select");
const searchForm = document.querySelector(".search-box");
const searchInput = document.getElementById("site-search");

// নিরাপদে লেখা HTML-এ বসানোর জন্য
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}

// বিভাগ বদলালে জেলার তালিকা আপডেট
if (divisionSelect && districtSelect) {
    divisionSelect.addEventListener("change", function () {
        const division = this.value;
        districtSelect.innerHTML = '<option value="">জেলা নির্বাচন করুন</option>';

        if (!division || !bangladeshData[division]) return;

        bangladeshData[division].districts.forEach(function (district) {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    });

    districtSelect.addEventListener("change", function () {
        showDistrictDetails(this.value);
    });
}

// জেলার বিস্তারিত তথ্য দেখানো
function showDistrictDetails(district) {
    if (!district) return;

    let details = districtDetails[district];

    if (!details) {
        const division = Object.keys(bangladeshData).find(function (name) {
            return bangladeshData[name].districts.includes(district);
        });

        details = {
            division: division || "বাংলাদেশ",
            history: district + " জেলার বিস্তারিত ইতিহাস, উপজেলা, দর্শনীয় স্থান, খাবার ও সংস্কৃতির তথ্য ধাপে ধাপে যুক্ত করা হবে।",
            upazilas: ["তথ্য শিগগির যুক্ত করা হবে"],
            places: ["তথ্য শিগগির যুক্ত করা হবে"],
            food: ["তথ্য শিগগির যুক্ত করা হবে"],
            culture: "এই জেলার সংস্কৃতি সম্পর্কে যাচাই করা তথ্য পরবর্তীতে যুক্ত করা হবে।"
        };
    }

    let result = document.getElementById("dynamic-district-details");

    if (!result) {
        result = document.createElement("section");
        result.id = "dynamic-district-details";
        result.className = "detail-panel";
        districtSelect.closest(".selector-panel").insertAdjacentElement("afterend", result);
    }

    result.innerHTML = `
        <div class="detail-content">
            <span class="tag">${escapeHTML(details.division)} বিভাগ</span>
            <h2>${escapeHTML(district)} জেলা</h2>
            <h3>ইতিহাস ও পরিচিতি</h3>
            <p>${escapeHTML(details.history)}</p>

            <h3>উপজেলা</h3>
            <ul class="upazila-list">
                ${details.upazilas.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
            </ul>

            <h3>দর্শনীয় স্থান</h3>
            <div class="place-grid">
                ${details.places.map(item => `
                    <article class="place-card">
                        <h4>${escapeHTML(item)}</h4>
                        <p>এই স্থানের অবস্থান, ইতিহাস ও ভ্রমণ-পরামর্শের তথ্য যুক্ত করা যাবে।</p>
                    </article>
                `).join("")}
            </div>

            <h3>স্থানীয় খাবার</h3>
            <p>${details.food.map(escapeHTML).join(" • ")}</p>

            <h3>সংস্কৃতি</h3>
            <p>${escapeHTML(details.culture)}</p>

            <a class="button" href="#feedback">এই জেলা সম্পর্কে মতামত দিন</a>
        </div>
    `;

    result.scrollIntoView({ behavior: "smooth", block: "start" });
}

// সার্চ: জেলা, বিভাগ, উপজেলা ও পরিচিত স্থান
if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const query = searchInput.value.trim().toLocaleLowerCase("bn");

        if (!query) {
            searchInput.focus();
            return;
        }

        const district = Object.keys(districtDetails).find(name =>
            name.toLocaleLowerCase("bn").includes(query)
        );

        if (district) {
            const division = districtDetails[district].division;
            if (divisionSelect) {
                divisionSelect.value = division;
                divisionSelect.dispatchEvent(new Event("change"));
            }
            if (districtSelect) {
                districtSelect.value = district;
            }
            showDistrictDetails(district);
            return;
        }

        const division = Object.keys(bangladeshData).find(name =>
            name.toLocaleLowerCase("bn").includes(query)
        );

        if (division) {
            if (divisionSelect) {
                divisionSelect.value = division;
                divisionSelect.dispatchEvent(new Event("change"));
            }
            document.getElementById("districts").scrollIntoView({ behavior: "smooth" });
            return;
        }

        const places = {
            "জাফলং": "সিলেট",
            "রাতারগুল": "সিলেট",
            "বিছানাকান্দি": "সিলেট",
            "মহাস্থানগড়": "বগুড়া",
            "কান্তজিউ": "দিনাজপুর",
            "সুন্দরবন": "বাগেরহাট",
            "লালবাগ": "ঢাকা",
            "স্মৃতিসৌধ": "ঢাকা"
        };

        const foundPlace = Object.keys(places).find(name =>
            name.toLocaleLowerCase("bn").includes(query)
        );

        if (foundPlace) {
            showDistrictDetails(places[foundPlace]);
            return;
        }

        alert("দুঃখিত, এই তথ্যটি নমুনা ডেটায় পাওয়া যায়নি। অন্য নাম দিয়ে খুঁজুন।");
    });
}

// নিবন্ধের বিস্তারিত অংশ দেখানো
document.querySelectorAll(".read-more").forEach(function (link) {
    link.addEventListener("click", function (event) {
        const article = this.closest(".article-card");

        if (article) {
            event.preventDefault();

            let detail = article.querySelector(".expanded-detail");

            if (!detail) {
                detail = document.createElement("div");
                detail.className = "expanded-detail";
                detail.style.padding = "0 17px 18px";
                detail.innerHTML = `
                    <p>এই স্থানের পূর্ণ ইতিহাস, যাতায়াতের উপায়, দর্শনীয় স্থান,
                    স্থানীয় সংস্কৃতি ও ভ্রমণ-পরামর্শ আরও যাচাই করা তথ্য দিয়ে
                    এখানে যুক্ত করা হবে। ভ্রমণের আগে স্থানীয় নির্দেশনা জেনে নিন।</p>
                `;
                article.appendChild(detail);
                this.textContent = "বিস্তারিত বন্ধ করুন ↑";
            } else {
                detail.remove();
                this.textContent = "বিস্তারিত পড়ুন →";
            }
        }
    });
});

// লগইন ফর্ম: শুধু ইনপুট যাচাই
// প্রকৃত লগইনের জন্য সার্ভার ও ডেটাবেস প্রয়োজন
const loginForm = document.querySelector("#login .form-card");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const identifier = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value;

        if (!identifier || !password) {
            alert("ইমেইল/মোবাইল এবং পাসওয়ার্ড লিখুন।");
            return;
        }

        alert("ফর্মের তথ্য পাওয়া গেছে। প্রকৃত লগইন চালু করতে নিরাপদ সার্ভার ও ডেটাবেস যুক্ত করতে হবে।");
    });
}

// মতামত ফর্ম: বর্তমান ব্রাউজারে সাময়িকভাবে দেখানো
// এটি কোনো সার্ভারে জমা হয় না
const feedbackForm = document.querySelector("#feedback .form-card");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("visitor-name").value.trim();
        const place = document.getElementById("visitor-place").value;
        const rating = document.getElementById("visitor-rating").value;
        const comment = document.getElementById("visitor-comment").value.trim();

        if (!name || !place || !comment) {
            alert("সব প্রয়োজনীয় তথ্য পূরণ করুন।");
            return;
        }

        let list = document.getElementById("feedback-list");

        if (!list) {
            list = document.createElement("div");
            list.id = "feedback-list";
            list.className = "feedback-list";
            feedbackForm.insertAdjacentElement("afterend", list);
        }

        const entry = document.createElement("article");
        entry.className = "place-card";
        entry.innerHTML = `
            <h3>${escapeHTML(name)}</h3>
            <p><strong>স্থান:</strong> ${escapeHTML(place)}</p>
            <p><strong>রেটিং:</strong> ${"★".repeat(Number(rating))}</p>
            <p>${escapeHTML(comment)}</p>
        `;

        list.prepend(entry);
        feedbackForm.reset();

        alert("আপনার মতামত এই পেজে দেখানো হয়েছে। স্থায়ীভাবে সংরক্ষণ করতে সার্ভার প্রয়োজন।");
    });
};

console.log("Explore Bangladesh JavaScript loaded successfully.");

/* মহাস্থানগড়সহ জায়গার সার্চ ঠিক করা */

const placeToDistrict = {
    "মহাস্থানগড়": "বগুড়া",
    "মহাস্থানগড়": "বগুড়া",
    "mahasthangarh": "বগুড়া",
    "mahasthan garh": "বগুড়া",
    "জাফলং": "সিলেট",
    "jaflong": "সিলেট",
    "রাতারগুল": "সিলেট",
    "ratargul": "সিলেট",
    "কক্সবাজার": "কক্সবাজার",
    "cox's bazar": "কক্সবাজার",
    "কান্তজিউ মন্দির": "দিনাজপুর",
    "kantajew temple": "দিনাজপুর"
};

function searchBangladeshPlace(value) {
    const query = value.trim().toLocaleLowerCase();

    if (!query) {
        alert("জেলা বা স্থানের নাম লিখুন। / Enter a district or place name.");
        return;
    }

    const matchedPlace = Object.keys(placeToDistrict).find(
        name => name.toLocaleLowerCase() === query
    );

    if (matchedPlace) {
        const district = placeToDistrict[matchedPlace];

        if (districtSelect) {
            const division = Object.keys(bangladeshData).find(
                name => bangladeshData[name].districts.includes(district)
            );

            if (division && divisionSelect) {
                divisionSelect.value = division;
                divisionSelect.dispatchEvent(new Event("change"));
            }

            districtSelect.value = district;
        }

        showDistrictDetails(district);

        if (query.includes("মহাস্থান") || query.includes("mahasthan")) {
            showMahasthangarhDetails();
        }

        return;
    }

    const knownDistrict = Object.keys(districtDetails).find(
        name => name.toLocaleLowerCase() === query
    );

    if (knownDistrict) {
        showDistrictDetails(knownDistrict);
        return;
    }

    const knownDivision = Object.keys(bangladeshData).find(
        name => name.toLocaleLowerCase() === query
    );

    if (knownDivision) {
        if (divisionSelect) {
            divisionSelect.value = knownDivision;
            divisionSelect.dispatchEvent(new Event("change"));
        }

        document.getElementById("districts")?.scrollIntoView({
            behavior: "smooth"
        });
        return;
    }

    alert(
        "এই নামের তথ্য এখনো যোগ করা হয়নি। / " +
        "Sorry, this place is not in the current sample data."
    );
}

function showMahasthangarhDetails() {
    let panel = document.getElementById("mahasthan-details");

    if (!panel) {
        panel = document.createElement("article");
        panel.id = "mahasthan-details";
        panel.className = "detail-panel";

        const districtPanel = document.getElementById(
            "dynamic-district-details"
        );

        const selector = document.querySelector(".selector-panel");

        if (districtPanel) {
            districtPanel.insertAdjacentElement("afterend", panel);
        } else if (selector) {
            selector.insertAdjacentElement("afterend", panel);
        } else {
            document.querySelector("main")?.appendChild(panel);
        }
    }

    panel.innerHTML = `
        <div class="detail-content">
            <span class="tag">প্রত্নতত্ত্ব / Archaeology</span>
            <h2>মহাস্থানগড় / Mahasthangarh</h2>

            <h3>ইতিহাস / History</h3>
            <p>
                মহাস্থানগড় বগুড়া জেলার শিবগঞ্জ এলাকায় অবস্থিত একটি
                গুরুত্বপূর্ণ প্রাচীন প্রত্নতাত্ত্বিক স্থান। এটি প্রাচীন
                পুণ্ড্রনগরের সঙ্গে সম্পর্কিত এবং বাংলাদেশের প্রাচীন
                নগরসভ্যতা বোঝার জন্য বিশেষ গুরুত্বপূর্ণ।
            </p>
            <p>
                Mahasthangarh is an important archaeological site in
                Shibganj, Bogura District. It is associated with the
                ancient city of Pundranagara and provides insight into
                early urban civilization in Bengal.
            </p>

            <h3>কী দেখবেন / What to see</h3>
            <ul>
                <li>প্রাচীন নগরীর দুর্গপ্রাচীর / Ancient fortified remains</li>
                <li>প্রত্নতাত্ত্বিক নিদর্শন / Archaeological remains</li>
                <li>স্থানীয় জাদুঘর ও আশপাশের ঐতিহাসিক স্থান / Local museum and nearby heritage sites</li>
            </ul>

            <h3>অবস্থান / Location</h3>
            <p>শিবগঞ্জ, বগুড়া, বাংলাদেশ / Shibganj, Bogura, Bangladesh</p>

            <h3>ভ্রমণ পরামর্শ / Travel tips</h3>
            <p>
                যাওয়ার আগে স্থানীয় জাদুঘরের সময়সূচি ও যাতায়াতের তথ্য
                যাচাই করুন। প্রত্নতাত্ত্বিক স্থানে সংরক্ষণবিধি মেনে চলুন।
            </p>
            <p>
                Check local museum opening hours and transport options
                before travelling. Follow heritage-site preservation rules.
            </p>
        </div>
    `;

    panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* আগের সার্চ ইভেন্টকে নতুন সার্চ দিয়ে প্রতিস্থাপন */
if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        searchBangladeshPlace(searchInput.value);
    });
}

/* বাংলা / English language toggle */
const languageToggle = document.getElementById("language-toggle");
let currentLanguage = "bn";

const translations = {
    "হোম": "Home",
    "বিভাগ": "Divisions",
    "জেলা": "Districts",
    "উপজেলা": "Upazilas",
    "তথ্যভাণ্ডার": "Information",
    "মতামত": "Feedback",
    "লগইন": "Login",
    "জনপ্রিয় বিভাগ": "Popular Categories",
    "বাংলাদেশের ৮টি বিভাগ": "Bangladesh's 8 Divisions",
    "জেলা ও উপজেলা খুঁজুন": "Find Districts and Upazilas",
    "সাম্প্রতিক নিবন্ধ": "Recent Articles",
    "আপনার মতামত দিন": "Share Your Feedback",
    "বিস্তারিত পড়ুন →": "Read More →",
    "খুঁজুন ↗": "Search ↗"
};

if (languageToggle) {
    languageToggle.addEventListener("click", function () {
        currentLanguage = currentLanguage === "bn" ? "en" : "bn";

        document.documentElement.lang = currentLanguage;
        languageToggle.textContent =
            currentLanguage === "bn" ? "English" : "বাংলা";

        document.querySelectorAll(
            ".nav a, .section-heading h2, .read-more, .search-box button"
        ).forEach(function (element) {
            if (!element.dataset.originalText) {
                element.dataset.originalText = element.textContent.trim();
            }

            const original = element.dataset.originalText;

            if (currentLanguage === "en") {
                element.textContent = translations[original] || original;
            } else {
                element.textContent = original;
            }
        });

        if (searchInput) {
            searchInput.placeholder = currentLanguage === "en"
                ? "Search a district or place, e.g. Sylhet, Jaflong..."
                : "জেলা বা স্থানের নাম লিখুন...";
        }
    });
}
