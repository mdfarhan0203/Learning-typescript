

interface Student{
    name:string,
    rollno:number
}


interface Car{
    model:string;
    year:number;
    setYear:(nextYear:number)=>void;  // not returning thing  and nextYear is not compursory to be same as fuction its just make document 
                                        // when you hover then you can see
    setModel:(nextModel:string)=>void;
    getDescription:() => string;  /// return string 
    // getListofStrudent:(id:number)=>{name:string,rollNo:number}
    getStudentById:(id:number)=> Student;
    getFeatures:()=>String[];
    getAllStudent:()=>Student[]



}



const mustang: Car =  {
    model:"Mustang",
    year:2021,
    setYear(nextYear:number){
        this.year = nextYear
    },
    setModel(nextModel:string){
        this.model = nextModel
    },
    getDescription(){
        return ` Year : ${this.year} , Model : ${this.model}`
    },
    getStudentById(id:number){
        return {
            name:"Mohal lal",
            rollno:43243,
        }
    },
    getFeatures(){
        return ["v8 Engine","manual Transmission","Real-wheel"]
    },
    getAllStudent(){
        return [
            { name:"Mohal lal", rollno:43243},
            { name:"Raj Kumar", rollno:21}
        ]
    }

}



// mustang.setModel("Mustang GT")
// const student = mustang.getStudentById(1);
const features = mustang.getFeatures(); // Type is string[]




