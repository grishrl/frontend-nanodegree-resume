var bio = {
    "name":"Lee Grisham",
    "role":"Front-End Jedi",
    "contact":{
        "email":"leegrisham@gmail.com",
        "mobile":"662-587-0427",
        "github":"grishrl",
        "Location":"Ripley, MS"
    },
    "pictureURL":"images/fry.jpg",
    "welcomeMessage":"Howdy, come in and sit a spell!",
    "skills":["JavaScripting", "HTMLing", "CSSing", "Various Computer Stuff"] 
};

var work = {
    "jobs":[
        {
            "employer":"ATS",
            "title":"Feild Represenative II",
            "location":"Corinth, MS",
            "dates":"2010-Current",
            "description":"Laptop/Desktop hardware software support."                    
        },
        {
            "employer":"Caterpillar",
            "title":"IT support",
            "location":"Oxford, MS",
            "dates":"2007-2010",
            "description":"Laptop/Desktop hardware software support."                    
        }
    ]
};

var projects = {
    "projects":[
        {
            "title":"HTML/CSS Portoflio",
            "dates":"Jan 2015",
            "desctiption":"Using boostraps to build a portfolio page.",
            "images":["http://placehold.it/350x150"]
        }
        ,
        {
            "title":"Some Demo Project",
            "dates":"Jan 2015",
            "desctiption":"Lorem Ipsem Blah blah",
            "images":["http://placehold.it/350x150"]
        }
    ]
};

var education = {
    "schools":[
        {
            "name":"University of Mississippi",
            "location":"Oxford, MS",
            "degree":"BS",
            "majors":["Mangament Information Systems"],
            "dates":"2008-2010",
            "url":"http://www.olemiss.edu"
        },
        {
            "name":"Northeast Mississippi Community College",
            "location":"Boonville, MS",
            "degree":"AS",
            "majors":["Computer Science","Business"],
            "dates":"2006-2008",
            "url":"http://www.nemcc.edu"
        }
    ],
    "onlineCourse":[
        {
            "title":"Front End Foundations",
            "school":"CodeSchool",
            "dates":"1/2015",
            "URL":"http://codeschool.com"
        },
        {
            "title":"Shaping up with Angular",
            "school":"CodeSchool",
            "dates":"12/2014",
            "URL":"http://codeschool.com"
        },
        {
            "title":"Intro HTML and CSS",
            "school":"Udacity",
            "dates":"1/2015",
            "URL":"http://udacity.com"
        },
         {
            "title":"Version Control and Git",
            "school":"Udacity",
            "dates":"1/2015",
            "URL":"http://udacity.com"
        },
        {
            "title":"Javascript Basics",
            "school":"Udacity",
            "dates":"1/2015",
            "URL":"http://udacity.com"
        }
    ]
};

if(bio["skills"].length>0)
{
    $("#header").append(HTMLskillsStart);
    for(var i=0;i<bio["skills"].length;i++)
    {
        var formatSkill = HTMLskills.replace("%data%",bio["skills"][i]);
        $("#skills").append(formatSkill);
    }
}

    var formatName = HTMLheaderName.replace("%data%",bio.name);
    var formatRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formatRole);
    $("#header").prepend(formatName);

var displayWork=function(){
    for(obj in work.jobs)
{
    $("#workExperience").append(HTMLworkStart);
    var formatEmployer = HTMLworkEmployer.replace("%data%",work.jobs[obj].employer);
    var formatTitle = HTMLworkTitle.replace("%data%",work.jobs[obj].title);
    var formatLocation = HTMLworkLocation.replace("%data%",work.jobs[obj].location);
    var formatDates = HTMLworkDates.replace("%data%",work.jobs[obj].dates);
    var formatDesc = HTMLworkDescription.replace("%data%",work.jobs[obj].description);
    $(".work-entry:last").append(formatEmployer + " "+formatTitle);
    $(".work-entry:last").append(formatDates);
    $(".work-entry:last").append(formatDesc);
    
}};

displayWork();

$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});



function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}

$("#main").append(internationalizeButton);