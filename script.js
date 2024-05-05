switchNav(1);


var cacheCalls = {
    "cached" : false,
    "cache" : []
};
var activePage = 1

function switchNav(number) {
    const main = document.getElementById('main');
    
    main.innerHTML = '';


    changeActive(number);
    
    switch (number) {
        case 1:
            main.innerHTML=`
                <h1>What's the Truth and Reconiliation Commission?</h1>
                <p>The Truth and Reconciliation Commission of Canada (TRC) is a report about happened at residential schools in Canada. It came out in 2015. It told the truth by the direct stories of Survivors and their families including the First Nations, Inuit and Metis. They also heard from other members of their communities and people who worked at the residential schools. The reports had Ten Principles for Reconciliation and 94 Calls to Action.</p>
            `
            break;
        case 2:
            fetchCalls()          
            break;
        case 3:
            const call17 = {
                "main" :"3",
                "number": "17",
                "title" :"We call upon all levels of government to enable residential school Survivors and their families to reclaim names changed by the residential school system by waiving administrative costs for a period of five years for the name-change process and the revision of official identity documents, such as birth certificates, passports, driver’s licenses, health cards, status cards, and social insurance numbers."
            }

            main.innerHTML=`
                <h1>What's in a name? TRC #17</h1>
                <div class="call">
                    <h2>Call to Action #${call17.number}</h2>
                    <p>${call17.title}</p>
                </div>

                <div><p>Your name is part of your heritage. It is what connects you to your ancestry and your community. It is typically chosen by your parents and your family name is carried forward. This is how you are known to others. People make assumptions about your background based on your name.  When the Indigenous community members were forced to take on new names, it was a forceful way of stripping them of their identity. It was a way to assimilate Indigenous people and take them from their own culture.</p></div>
                <div><p>Now that the TRC Call to Action #17 has finally come into effect, Indigenous people are allowed to reclaim their hereditary family name.  The Canadian government is said to make this easy by “just filling a form”. There are many problems with it, though. From my research, there are 3 main issues:</p></div>
                <div><p>1) Red tape and paperwork: It seems it still takes a lot of time, forms, and patience to have your name used on official documentation. There is a lawyer in BC who is willing to assist Indigenous people for free, but its unsure if he would help anyone from across Canada.</p></div>

                <div><p>2) Many still don’t know about it: even looking up how to change your names, I came across some links that were dead, and couldn’t find very much that is specific to Quebec. At least the Canada.ca website had some clear links. They can be found on the this section of the website <a onclick="switchNav(4)"><b>(PAGE HERE)</b></a></p></div>
                <div><p>3) Language: there are many Indigenous names that don’t line up well with the required alphabet (Roman or French).  There are also names with colons in it, which may not be accepted properly as a name on applications or email addresses that Indigenous people may want to use when they reclaim their name.</p></div>
                <div><p>Overall this process can be long and difficult but can help you reconnect to your heritage.</p></div>
                <div><p>Here you will find links for you to actually change your name. This powerful step can be long and frustrating but in the end, be part of healing for the wrongs done against the Indigenous people in the past.</p></div>
            `
            break;
        case 4:
            main.innerHTML=`
                <h1>Reclaim Your Indigenous Name.</h1>
                <div><p>Here are a few links to help you get started!</p></div>
                <div>
                    <p>Passport:</p>
                    <a href="https://www.canada.ca/content/dam/ircc/migration/ircc/english/passport/forms/pdf/pptc657-eng.pdf"><i>Link</i></a>
                </div>
                <div>
                    <p>Confirmation of Elgibility for a Reclaimed Name Change:</p>
                    <a href="https://www.canada.ca/content/dam/ircc/documents/pdf/english/kits/forms/irm0004e.pdf"><i>Link</i></a>
                </div>
                <div>
                    <p>Statutory Declaration to Reclaim an Indigenous name on Canadian Citizenship Certificates or Permanent Resident Cards:</p>
                    <a href="https://www.canada.ca/content/dam/ircc/documents/pdf/english/kits/forms/irm0005e.pdf"><i>Link</i></a>
                </div>        
            `
            break;
        case 5:
            main.innerHTML=`
                <h1>Bibliography and further readings:</h1>

                <p class="call">To access the reports and resources on from the National Centre for Truth and Reconciliation, please go to: <a href="nctr.ca/records/reports/">nctr.ca/records/reports/</a></p>
                <p class="call">“Reclaiming Indigenous names on Immigration, Refugees and Citizenship Canada identity documents.” Government of Canada, 14 June 2021. <a href="https://www.canada.ca/en/immigration-refugees-citizenship/news/2021/06/reclaiming-indigenous-names-on-immigration-refugees-and-citizenship-canada-identity-documents.html">https://www.canada.ca/en/immigration-refugees-citizenship/news/2021/06/reclaiming-indigenous-names-on-immigration-refugees-and-citizenship-canada-identity-documents.html</a></p>
                <p class="call">Auger, Odette, “Reclaiming Indigenous name on official documents an exercise of difficulty, frustration and pain,” <a href="https://windspeaker.com/news/windspeaker-news/reclaiming-indigenous-name-official-documents-exercise-difficulty-frustration">https://windspeaker.com/news/windspeaker-news/reclaiming-indigenous-name-official-documents-exercise-difficulty-frustration</a></p>
                <p class="call">Deer, Ka'nhehsí:io, “Call me Ka'nhehsí:io: Why I'm reclaiming my Kanien'kéha name,” CBC, 21 September 2020. <a href="https://www.cbc.ca/news/indigenous/ka-nhehs%C3%AD-io-deer-kanien-k%C3%A9ha-name-pov-1.5723536">https://www.cbc.ca/news/indigenous/ka-nhehs%C3%AD-io-deer-kanien-k%C3%A9ha-name-pov-1.5723536</a></p>
                <p class="call">Reynolds, Christopher, “Indigenous people can now reclaim traditional names on their passports and other ID.” CBC¸ 14 June 2021, <a href="https://www.cbc.ca/news/politics/indigenous-traditional-names-passport-1.6064850">https://www.cbc.ca/news/politics/indigenous-traditional-names-passport-1.6064850</a></p>
                <p class="call">Yuzda, Lisa and Steacy, Lisa, Process to reclaim Indigenous names on ID challenging; B.C. First Nations leaders unaware of option, City News, 23 June 2021. <a href=" https://vancouver.citynews.ca/2021/06/23/canada-bc-indigenous-names-government-documents/"> https://vancouver.citynews.ca/2021/06/23/canada-bc-indigenous-names-government-documents/</p>
                `
            break;
            
        default:
            break;
    };
};


function changeActive(pageNum) {
    if(!pageNum) console.log("?")
    if (pageNum==activePage || !activePage) {
        document.getElementById(`page${pageNum}`).classList.add('activeNav')
        activePage = pageNum
    }
    else {
        document.getElementById(`page${activePage}`).classList.remove('activeNav')
        document.getElementById(`page${pageNum}`).classList.add('activeNav')
        activePage = pageNum
    }
}

function fetchCalls() {
    fetch('/calls.json').then(response => response.json()).then(data => {
        buildView(data);
    });  
};

// NAVIGATION 5
function buildView(data) {
    var allCalls = [];

    if (!cacheCalls.cached) {
        for (mains of data.main) {
            const lookup = mains.num;
            
            var found = {
                title: mains.title,
                foundCalls: []
            };
            
            for (call of data.calls) {
                if (call.main == lookup) {
                    found.foundCalls.push(call);
                };
            };
    
            allCalls.push(found);
        };

        cacheCalls.cache = allCalls;
        cacheCalls.cached = true;
    }
    else {
        allCalls = cacheCalls.cache;
    };
    
  
    for (call of allCalls) {
        document.getElementById("main").innerHTML += `
            <h1>${call.title}</h1>
            <p>${parseCalls(call.foundCalls)}</p>
        `;
    };
};

function parseCalls(data) {
    var parse = '';

    for (call of data) {
        var callParse = `<div class="callsToAction"><p><b>${call.number}:</b> ${call.title}</p>`;
        
        if (call.sub) {
            for (sub of call.sub) {
                callParse += `<p class="subCall"><b>${sub.number}:</b> ${sub.title}</p>`;
            };
        }

        callParse += `</div>`;

        parse += callParse;
    };

    return parse;
};