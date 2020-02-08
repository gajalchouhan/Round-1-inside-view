var rawData = [
{
    employeeId:1,
    firstName: 'Rob',
    lastName:'Choi',
    managerId: 2,
    teamId : 1
},
{
    employeeId:2,
    firstName: 'Joseph',
    lastName:'Grant',
    managerId: '',
    teamId : 1
},
{
    employeeId:3,
    firstName: 'Andy',
    lastName:'Zuckerman',
    managerId: 1,
    teamId : 2
},
{
    employeeId:4,
    firstName: 'Mark',
    lastName:'O’Donnell',
    managerId: 3,
    teamId : 3
},
{
    employeeId:5,
    firstName: 'Tom',
    lastName:'Grant',
    managerId: '',
    teamId : 2
},
{
    employeeId: 6,
    firstName : 'ABC',
    lastName : 'Xyz',
    head : true,
}
]

// This function use to create a data
var modifyData = {};
function createData(){
    for(let i=0; i<rawData.length; i++){
        if(rawData[i].head === true){
            modifyData.head = rawData[i];
        }
    }

    if(modifyData.head.head){
        var manager = rawData.filter(item => item.managerId !== '' && item.head !== true)
        .map(item => {
            item.employees = [];
            return item;
        });
    
        modifyData.head.manager = [...manager];
    
        var employes = rawData.filter(item => {
            return item.managerId === '';
        });
    
        for(let i=0; i<employes.length; i++){
          for(let j=0; j<manager.length; j++){
              if(employes[i].teamId === manager[j].teamId){
                  manager[j].employees.push(employes[i]);
              }
          }
        }
    }
};

createData();

// 1 problem to validate of each user;
function validateUser(data){
    console.log('<-------------------- Validation is start ------------------>');
   if(data.head){
       console.log('Head is prasent')
   }

   var manager = data.head.manager;
   if(manager.length !== 0 ){
       console.log('manager is present');
   }else{
       console.log('manager are not present');
   }

   var employees = data.head.manager;
   employees.forEach(element => {
       if(element.employees.length !== 0){
           console.log(` ${element.firstName} ${element.lastName} manager had employee`)
       }else{
           console.log(` ${element.firstName} ${element.lastName} manager hadn't employee`)
       }
   });

   console.log('<-------------------- Validation is finished ------------------>');
   checkallemployee(data);
}

validateUser(modifyData);
//  Validation end

function checkallemployee(data){
    console.log('<-------------------- Employee List ------------------>');
    var gethead = data.head;
    console.log(`Head of the compnay is ${gethead.firstName} ${gethead.lastName}`);

    var getManager = data.head.manager;
    getManager.forEach(element => {
        console.log(`Manager of the company ${element.firstName}${element.lastName}`);
    });

    var getemployee =  data.head.manager;
    console.log(`employee of the companyies`)
    for(let i=0; i<getemployee.length; i++){
        for(let j=0; j<getemployee[i].employees.length; j++){
            console.log(`${getManager[i].employees[j].firstName}${getManager[i].employees[j].lastName}`);
        }
      }

    console.log('<-------------list of the emplyees are finished--------------->');
      getHierarchy(data);
}



function getHierarchy(data){
    console.log('<--------------------- Hirarchy Start ------------------------>')
    var hirarchy = data.head;

    console.log(`${hirarchy.firstName} ${hirarchy.lastName}`);

    for(let i=0; i<hirarchy.manager.length; i++){
        console.log(`  ${hirarchy.manager[i].firstName}${hirarchy.manager[i].lastName}`);
        for(let j=0; j<hirarchy.manager[i].employees.length; j++){
            console.log(`      ${hirarchy.manager[i].employees[j].firstName}${hirarchy.manager[i].employees[j].lastName}`);
        }
    }

    console.log('<--------------------- Hirarchy Start end------------------------>')
}