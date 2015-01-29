//bio object
var bio = {
    "name":"Lee Grisham",
    "role":"Front-End Jedi",
    "contact":{
        "email":"leegrisham@gmail.com",
        "mobile":"662-555-5555",
        "github":"grishrl",
        "location":"Ripley, MS"
    },
    "pictureURL":"images/fry.jpg",
    "welcomeMessage":"Howdy, come in and sit a spell!",
    "skills":["JavaScripting", "HTMLing", "CSSing", "Various Computer Stuff"],
    //nesting a function inside the object literal notation
    "displayBio" : function () {
    var formatPic = HTMLbioPic.replace("%data%",this.pictureURL); 
    $("#header").append(formatPic);
    $("#header").append(HTMLWelcomeMsg.replace("%data%",this.welcomeMessage));
    if(this["skills"].length>0)
    {
        $("#header").append(HTMLskillsStart);
        for(var i=0;i<this["skills"].length;i++)
        {
            var formatSkill = HTMLskills.replace("%data%",this["skills"][i]);
            $("#skillsH3").append(formatSkill);
        }
    }

    var formatName = HTMLheaderName.replace("%data%",this.name);
    var formatRole = HTMLheaderRole.replace("%data%",this.role);
    $("#header").prepend(formatRole);
    $("#header").prepend(formatName);
    $("#topContacts").append(HTMLemail.replace("%data%", this.contact.email));
    $("#topContacts").append(HTMLmobile.replace("%data%", this.contact.mobile));
    $("#topContacts").append(HTMLgithub.replace("%data%", this.contact.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", this.contact.location));
    $("#footerContacts").append(HTMLemail.replace("%data%", this.contact.email));
    $("#footerContacts").append(HTMLmobile.replace("%data%", this.contact.mobile));
    $("#footerContacts").append(HTMLgithub.replace("%data%", this.contact.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%", this.contact.location));}
};

//work object
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

//declaring a display work function
var displayWork=function(){
    for(obj in this.jobs)
{
    $("#workExperience").append(HTMLworkStart);
    var formatEmployer = HTMLworkEmployer.replace("%data%",this.jobs[obj].employer);
    var formatTitle = HTMLworkTitle.replace("%data%",this.jobs[obj].title);
    var formatLocation = HTMLworkLocation.replace("%data%",this.jobs[obj].location);
    var formatDates = HTMLworkDates.replace("%data%",this.jobs[obj].dates);
    var formatDesc = HTMLworkDescription.replace("%data%",this.jobs[obj].description);
    $(".work-entry:last").append(formatEmployer + " "+formatTitle);
    $(".work-entry:last").append(formatDates);
    $(".work-entry:last").append(formatDesc);
    
}};
//using the dot noation to add display function to the work object
work.showWork=displayWork;

//project object
var projects = {
    "projects":[
        {
            "title":"HTML/CSS Portoflio",
            "dates":"Jan 2015",
            "description":"Using boostraps to build a portfolio page.",
            "images":["http://placehold.it/350x150","http://placehold.it/300x250"]
        }
        ,
        {
            "title":"Some Demo Project",
            "dates":"Jan 2015",
            "description":"Lorem Ipsem Blah blah",
            "images":["http://placehold.it/300x250","http://placehold.it/350x150"]
        }
    ]
};

//dot notation to add display function to projects with inline function def
projects.display = function()
{
    for(obj in this.projects)
    {
        $("#projects").append(HTMLprojectStart);
        var formatTitle = HTMLprojectTitle.replace("%data%",this.projects[obj].title);
        var formatDate = HTMLprojectDates.replace("%data%",this.projects[obj].dates);
        var formatDesc = HTMLprojectDescription.replace("%data%",this.projects[obj].description);
        $(".project-entry:last").append(formatTitle+formatDate+formatDesc);
        if(this.projects[obj]["images"].length>0)
            { 
                for(var i=0;i<this.projects[obj]["images"].length;i++)
                        {
                            var formatImg = HTMLprojectImage.replace("%data%",this.projects[obj]["images"][i]);
                            $(".project-entry:last").append(formatImg);
                        }
            }
       
    }

};

//work object
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
    ],
    //practicing more functions inside object literal
    displaySchool:function(){
        if(this.schools.length>0)
            {
                for(obj in this.schools)
                {
                    $("#education").append(HTMLschoolStart);
                    var formatURL = HTMLschoolName.replace("#",this.schools[obj]["url"]);
                    formatURL = formatURL.replace("%data%",this.schools[obj]["name"]);
                    $(".education-entry:last").append( formatURL+ " " + HTMLschoolDegree.replace("%data%",this.schools[obj]["degree"]));
                    $(".education-entry:last").append(HTMLschoolDates.replace("%data%",this.schools[obj]["dates"]));
                    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",this.schools[obj]["location"]));
                        if(this.schools[obj]["majors"].length>0)
                        {
                            var i = 0;
                            var majorString = this.schools[obj]["majors"][i];
                            i+=1;
                                for(i; i<this.schools[obj]["majors"].length; i++)
                                {
                                    majorString+=" & "+this.schools[obj]["majors"][i]; 
                                }
                            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",majorString));
                        }  
                }
            }
         if(this.onlineCourse.length>0)
        {
            $("#education").append(HTMLonlineClasses);
                for(obj in this.onlineCourse)
                {
                    $("#education").append(HTMLschoolStart);
                    $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",this.onlineCourse[obj].title)+" "+HTMLonlineSchool.replace("%data%",this.onlineCourse[obj].school));
                    $(".education-entry:last").append(HTMLonlineDates.replace("%data%",this.onlineCourse[obj].dates));
                    $(".education-entry:last").append(HTMLonlineURL.replace("%data%",this.onlineCourse[obj].URL));
                }
        }}
};


    
//DISPLAY INVOCATION
education.displaySchool();
     work.showWork();
          bio.displayBio();
     projects.display();
     

//print to console the X and Y locations of each click
$(document).click(function(loc) {
 logClicks(loc.pageX,loc.pageY);
});


// function for button from class
function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}

//append button from class
$("#main").append(internationalizeButton);

//append the required map
$("#mapDiv").append(googleMap);