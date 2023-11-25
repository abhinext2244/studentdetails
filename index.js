
var arr=[]


var marksobj={
    
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67,
    printTop3Subjects:function(){
        
        arr.push(this.science)
        arr.push(this.maths)
        arr.push(this.social_science)
        arr.push(this.english)
        arr.push(this.hindi)
        arr.sort();
        arr.reverse()
        


    },
    percentsage:function(){
        var sum=0
       for(var i=0;i<arr.length;i++){
        sum+=arr[i]
       }
         var p1=sum/arr.length;
         return p1
    }

}
var studentDetails={
    name:'Bittu',
    roll_no:61,
    class:'BCA(Sem-IV',
    sectioin:'A',
    printReportCard:function(){
        console.log('+--------------------+')
        console.log('|     REPORT CARD    |')
        console.log('+--------------------+')
        console.log('| Name  - ',this.name ,'    |')
        console.log('| Roll No  - ',this.roll_no ,'    |')
        console.log('| Class - ',this.class ,'     |')
        console.log('| Section  - ',this.sectioin ,'   |')
        console.log('| Science - ',marksobj.science ,'|')
        console.log('| S.Sc - ',marksobj.social_science ,'|')
        console.log('| Maths - ',marksobj.maths ,'|')
        console.log('| English - ',marksobj.english ,'|')
        console.log('|Percentage- ',marksobj.percentsage() ,'|')



    }
    


}
marksobj.printTop3Subjects()
marksobj.percentsage()
studentDetails.printReportCard()

