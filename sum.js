const thesum = (num,num2,tax=0.16)=>{

    return (num + (num2||null))*tax;
    
    }
    
    module.exports=thesum;