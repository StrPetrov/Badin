let i = 0;

setInterval(function() {
    i = i + 1;

    if (i === 5) {
        i = 0;
    }

    const arr = document.querySelectorAll('span.timeline-dot');

    switch(i) {
        case 0: {
            arr[4].style.backgroundColor = 'white';
            arr[0].style.backgroundColor = 'blue';
            break;
        }
        case 1: {
            arr[0].style.backgroundColor = 'white';
            arr[1].style.backgroundColor = 'blue';
            break;
        }
        case 2: {
            arr[1].style.backgroundColor = 'white';
            arr[2].style.backgroundColor = 'blue';
            break;
        }
        case 3: {
            arr[2].style.backgroundColor = 'white';
            arr[3].style.backgroundColor = 'blue';
            break;
        }
        case 4: {
            arr[3].style.backgroundColor = 'white';
            arr[4].style.backgroundColor = 'blue';
        }
    }
}, 3000);


let text0 = `I have been with Badin since 2017 and had a privilege to influence our culture,
contribute to the career development of my colleagues, and create good systems. 
The main advantage, and the main reason why I am here is the freedom to create,
influence, contribute, and leave my mark.`;
let name0 = `Geordie Lindsay-Russell`;
let position0 = `Business Analyst Project Management`;

let text1 = `In our collaboration, we most appreciate your flexibility and ability to
quickly adapt to changing customer requirements. We also appreciate the demonstrated
competence in all spheres. We would describe the cooperation with you as very motivating
and useful for us (hopefully for you too) as we have learned a lot during this project.`;
let name1 = `Nikola Ristović`;
let position1 = `Head of Satellite Applications Unit, Raiffeisen bank`;

let text2 = `My personal impression after a year and a half of working with the Badin
team is that the guys, without having previously encountered the TELCO industry, 
easily understood its processes and accepted to change our in-house solution. The impression
is that they work quickly and complement each other perfectly as a team. Their code complies
with the requirements. I know that the way requests are received is not the best practice, nor 
is the frequency and timing of changes of requests, and that it may bother the guys, 
but they still remain professionals who try to meet the user requirements as much as they can.`;
let name2  = `Dragan Andrejić`;
let position2 = `Software Team Leader, Telekom Srbija`;

let text3 = `Badin and team take complete ownership of the given project or tasks. I would like to mention that the team is very honest and sincere. If a mistake is made, there are no excuses but acceptance and continuing to rectify the situation with the best possible solution and making sure we are satisfied. This comes because of a strong technical presence in the team.
We at Eton Institute are happy with the service provided and continue the relationship with BadinSoft in the long run.`;
let name3 = `Karthik Rao`;
let position3 = `Head of Technology, Eton Institute`;

let text4 = `Tranxactor has worked with the team behind Badin since the beginning. 
This highly talented team became the backbone of the software development and support
for Tranxactor's product suite as well as the daily technical support for many of our
clients around the world. The team works as much a partner as a service provider to 
Tranxactor, and continues to provide a range of critical services to support Tranxactor
and its global clients. We have no hesitation in recommending Badin as a solid and 
reliable software partner.`;
let name4 = `Fangsin Lim`;
let position4 = `COO Tranxactor`;


setInterval(function() {
    let myPara = document.getElementsByClassName('message');
    let myName = document.getElementsByClassName('name');
    let myPosition = document.getElementsByClassName('position');

    switch (i) {
        case 0: {
            myPara[0].innerHTML = text0;
            myName[0].innerHTML = name0;
            myPosition[0]. innerHTML = position0;
            break;
        }
        case 1: {
            myPara[0].innerHTML = text1;
            myName[0].innerHTML = name1;
            myPosition[0]. innerHTML = position1;
            break;
        }
        case 2: {
            myPara[0].innerHTML = text2;
            myName[0].innerHTML = name2;
            myPosition[0]. innerHTML = position2;
            break;
        }
        case 3: {
            myPara[0].innerHTML = text3;
            myName[0].innerHTML = name3;
            myPosition[0]. innerHTML = position3;
            break;
        }
        case 4: {
            myPara[0].innerHTML = text4;
            myName[0].innerHTML = name4;
            myPosition[0]. innerHTML = position4;
        }
    }
}, 3000)



