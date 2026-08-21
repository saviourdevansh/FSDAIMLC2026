const div = document.getElementById('container');
const button = document.getElementById('btn');

function display() {

    div.innerHTML = "";

    const resume = document.createElement('div');

    resume.style.width = "700px";
    resume.style.margin = "30px auto";
    resume.style.padding = "30px";
    resume.style.backgroundColor = "white";
    resume.style.boxShadow = "0 4px 15px gray";
    resume.style.borderRadius = "10px";
    resume.style.fontFamily = "Arial";


    // Name
    const name = document.createElement('h1');
    name.textContent = "Devansh Kumar";
    name.style.marginBottom = "5px";

    resume.appendChild(name);


    // Contact
    const contact = document.createElement('p');
    contact.textContent = "devansh@gmail.com | 9876543210";
    contact.style.color = "gray";

    resume.appendChild(contact);


    // Line
    const line = document.createElement('hr');
    resume.appendChild(line);


    // Objective
    const objectiveTitle = document.createElement('h2');
    objectiveTitle.textContent = "Career Objective";

    const objective = document.createElement('p');
    objective.textContent =
        "Aspiring Software Developer interested in AI, Web Development and DSA.";

    resume.appendChild(objectiveTitle);
    resume.appendChild(objective);


    // Education
    const educationTitle = document.createElement('h2');
    educationTitle.textContent = "Education";

    const education = document.createElement('p');
    education.textContent =
        "B.Tech - Computer Science | B.Sc - Computer Science";

    resume.appendChild(educationTitle);
    resume.appendChild(education);

    const skillsTitle = document.createElement('h2');
    skillsTitle.textContent = "Technical Skills";

    const skills = document.createElement('p');
    skills.textContent =
        "C++ | Python | JavaScript | HTML | CSS | DSA";

    resume.appendChild(skillsTitle);
    resume.appendChild(skills);

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = "Projects";

    const project = document.createElement('p');
    project.textContent =
        "AI Resume Screening Tool - Flask, Python, NLP";

    resume.appendChild(projectTitle);
    resume.appendChild(project);


    // Experience
    const experienceTitle = document.createElement('h2');
    experienceTitle.textContent = "Experience";

    const experience = document.createElement('p');
    experience.textContent = "IBM Internship";

    resume.appendChild(experienceTitle);
    resume.appendChild(experience);


    // Add resume to page
    div.appendChild(resume);
}

button.addEventListener('click', display);