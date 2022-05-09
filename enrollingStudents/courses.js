// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    
    sections:[
              { 
                sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'
              },
              {
                sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'
              }  
            ],
    
    enrollstudent:function(sectionNumber){
        
                const foundSectionNum = this.sections.findIndex(
                    (section)=>section.sectionNum == sectionNumber);
                    if (foundSectionNum > -1){
                        this.sections[foundSectionNum].enrolled++;
                        renderSections(this.sections);
                    }
                
    },
    dropstudent: function(sectionNum){
        const f = this.sections.findIndex(
            (section)=>section.sectionNum == sectionNum);
            this.sections[f].enrolled--;
            renderSections(this.sections);
            

    }            
};
   

const courseName = document.querySelector('#courseName').innerHTML=aCourse.code;
const courseCode = document.querySelector('#courseCode').innerHTML=aCourse.name;

    
function renderSections(sections){
         const html = sections.map((section)=>
             `<tr>
                  <td>${section.sectionNum}</td>
                  <td>${section.roomNum}</td>
                  <td>${section.enrolled}</td>
                  <td>${section.days}</td>
                  <td>${section.instructor}</td>
             </tr>`);
        
  document.querySelector('#sections').innerHTML=html.join('');              
}

renderSections(aCourse.sections);

const enrolledBtn = document.querySelector('#enrollStudent');
enrolledBtn.addEventListener("click", function(){
    const sectNum = document.querySelector('#sectionNumber').value;
    aCourse.enrollstudent(sectNum);
   
 });

 const dropBtn = document.querySelector('#dropStudent').addEventListener('click', function(){
       const inputedSectNumber = document.querySelector('#sectionNumber').value;
       
       aCourse.dropstudent(inputedSectNumber);  
 })

