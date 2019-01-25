var divAchievement = document.querySelector('#main .main-right .content-achievements');
var divContact = document.querySelector('#main .main-right .content-contact');
var urlLinkedin = "https://www.linkedin.com/in/alexcamaroti/";
var loc = window.location.pathname + '/../assets/docs/';
var dir_diploma = loc + 'DIPLOMA.pdf'
var ielts_certificate = loc + 'IELTS.pdf';
var abCollege_certificate = loc + 'ABCollege.pdf';
divAchievement.onclick = function(event){
    var idSelected = validateId();
    switch(idSelected) {
        case 'achievement-graduation':
            window.open(dir_diploma, '_blank');
          break;
        case 'achievement-abcollege':
            window.open(abCollege_certificate, '_blank');
          break;
          case 'achievement-ielts':
          window.open(ielts_certificate, '_blank');
          break;
          case 'achievement-cp':
          window.open("http://www.unibratec.edu.br/faculdade/alunos-representam-a-faculdade-unibratec-na-cpr4/", '_blank');
          break;  
        default:
          // code block
      }
};

divContact.onclick = function(event) {
    let idSelected = validateId();
    switch(idSelected) {
        case 'contact-linkedin':
            window.open(urlLinkedin, '_blank');
          break;
        case 'contact-email':
            window.location.href='mailto:acamaroti@gmail.com';
          break;
        default:
          // code block
      }
}

function validateId() {
    var id = event.target.offsetParent.id;
    if(id == "") {
        id = event.target.id;
    }
    return id;
}