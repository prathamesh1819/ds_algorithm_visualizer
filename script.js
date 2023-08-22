

function white()

{
       
 if(document.getElementById("e5").innerHTML == "")
 {
      document.getElementById("five").style.backgroundColor = "white";
 } 

 if(document.getElementById("e1").innerHTML =="")
 {
     document.getElementById("one").style.backgroundColor = "white";
 }

 if(document.getElementById("e2").innerHTML == "")
 {
      document.getElementById("two").style.backgroundColor = "white";
 }

 if(document.getElementById("e3").innerHTML == "")
 {
      document.getElementById("three").style.backgroundColor = "white";
 }

 if(document.getElementById("e4").innerHTML == "")
 {
      document.getElementById("four").style.backgroundColor = "white";
 }
}






let x1 =  Math.floor((Math.random() * 1000) + 9999);
let x2 = x1 + 4;
let x3 = x2 + 4;
let x4 = x3 + 4;
let x5 = x4 + 4;


function getVal() 
{
       
  
    let size = document.getElementById("arraysize").value || document.getElementById("arraysize2").value;
    let count = 0;

    if (size > 5) {
        alert("please enter number which is less than 6.");
    }

    else if(size % 1 != 0)
    {
         alert("Please enter only integer numbers...!");
    }


    else if(size == 0)
    {
        alert("size of the array cannot be zero.");
    }

    else if(size < 0)
    {
        alert("size of the array cannot be negative.");
    }

    else {

       // document.getElementById("poster").innerHTML = '<h4>The size of the array is: </h4>' + size;

        

            if(size == 1)
             {
                document.getElementById("one").style.display = "flex";

               

                document.getElementById("ele1").style.display = "flex";

                document.getElementById("dele1").style.display = "flex";

                document.getElementById("alert1").style.display = "flex";
                document.getElementById("alert2").style.display = "flex";

                document.getElementById("addr1").innerHTML = x1;
                document.getElementById("addr1").style.display = "flex";

             }

            else if(size == 2)
            {
                document.getElementById("one").style.display = "flex";
                document.getElementById("two").style.display = "flex";

                document.getElementById("ele1").style.display = "flex";
                document.getElementById("ele2").style.display = "flex";

                document.getElementById("dele1").style.display = "flex";
                document.getElementById("dele2").style.display = "flex";

                document.getElementById("alert1").style.display = "flex";
                document.getElementById("alert2").style.display = "flex";

                document.getElementById("addr1").innerHTML = x1;
                document.getElementById("addr1").style.display = "flex";
                document.getElementById("addr2").innerHTML = x2;
                document.getElementById("addr2").style.display = "flex";
            } 

            else if(size == 3)
            {
                document.getElementById("one").style.display = "flex";
                document.getElementById("two").style.display = "flex";
                document.getElementById("three").style.display = "flex";

                document.getElementById("ele1").style.display = "flex";
                document.getElementById("ele2").style.display = "flex";
                document.getElementById("ele3").style.display = "flex";

                document.getElementById("dele1").style.display = "flex";
                document.getElementById("dele2").style.display = "flex";
                document.getElementById("dele3").style.display = "flex";

                document.getElementById("alert1").style.display = "flex";
                document.getElementById("alert2").style.display = "flex";

                document.getElementById("addr1").innerHTML = x1;
                document.getElementById("addr1").style.display = "flex";
                document.getElementById("addr2").innerHTML = x2;
                document.getElementById("addr2").style.display = "flex";
                document.getElementById("addr3").innerHTML = x3;
                document.getElementById("addr3").style.display = "flex";
                

            } 

            else if(size == 4)
            {
                document.getElementById("one").style.display = "flex";
                document.getElementById("two").style.display = "flex";
                document.getElementById("three").style.display = "flex";
                document.getElementById("four").style.display = "flex";

                document.getElementById("ele1").style.display = "flex";
                document.getElementById("ele2").style.display = "flex";
                document.getElementById("ele3").style.display = "flex";
                document.getElementById("ele4").style.display = "flex";

                document.getElementById("dele1").style.display = "flex";
                document.getElementById("dele2").style.display = "flex";
                document.getElementById("dele3").style.display = "flex";
                document.getElementById("dele4").style.display = "flex";

                document.getElementById("alert1").style.display = "flex";
                document.getElementById("alert2").style.display = "flex";

                document.getElementById("addr1").innerHTML = x1;
                document.getElementById("addr1").style.display = "flex";
                document.getElementById("addr2").innerHTML = x2;
                document.getElementById("addr2").style.display = "flex";
                document.getElementById("addr3").innerHTML = x3;
                document.getElementById("addr3").style.display = "flex";
                document.getElementById("addr4").innerHTML = x4;
                document.getElementById("addr4").style.display = "flex";
            } 

            else if(size == 5)
            {
                document.getElementById("one").style.display = "flex";
                document.getElementById("two").style.display = "flex";
                document.getElementById("three").style.display = "flex";
                document.getElementById("four").style.display = "flex";
                document.getElementById("five").style.display = "flex";

                document.getElementById("ele1").style.display = "flex";
                document.getElementById("ele2").style.display = "flex";
                document.getElementById("ele3").style.display = "flex";
                document.getElementById("ele4").style.display = "flex";
                document.getElementById("ele5").style.display = "flex";
                
                document.getElementById("dele1").style.display = "flex";
                document.getElementById("dele2").style.display = "flex";
                document.getElementById("dele3").style.display = "flex";
                document.getElementById("dele4").style.display = "flex";
                document.getElementById("dele5").style.display = "flex";

                document.getElementById("alert1").style.display = "flex";
                document.getElementById("alert2").style.display = "flex";


                document.getElementById("addr1").innerHTML = x1;
                document.getElementById("addr1").style.display = "flex";
                document.getElementById("addr2").innerHTML = x2;
                document.getElementById("addr2").style.display = "flex";
                document.getElementById("addr3").innerHTML = x3;
                document.getElementById("addr3").style.display = "flex";
                document.getElementById("addr4").innerHTML = x4;
                document.getElementById("addr4").style.display = "flex";
                document.getElementById("addr5").innerHTML = x5;
                document.getElementById("addr5").style.display = "flex";
            } 

            else if(size == 6)
            {
                document.getElementById("one").style.display = "flex";
                document.getElementById("two").style.display = "flex";
                document.getElementById("three").style.display = "flex";
                document.getElementById("four").style.display = "flex";
                document.getElementById("five").style.display = "flex";
                document.getElementById("six").style.display = "flex";

                document.getElementById("ele1").style.display = "flex";
                document.getElementById("ele2").style.display = "flex";
                document.getElementById("ele3").style.display = "flex";
                document.getElementById("ele4").style.display = "flex";
                document.getElementById("ele5").style.display = "flex";
                document.getElementById("ele6").style.display = "flex";

                document.getElementById("dele1").style.display = "flex";
                document.getElementById("dele2").style.display = "flex";
                document.getElementById("dele3").style.display = "flex";
                document.getElementById("dele4").style.display = "flex";
                document.getElementById("dele5").style.display = "flex";
                document.getElementById("dele6").style.display = "flex";

                
            } 

            else if(size == 7)
            {
                document.getElementById("one").style.display = "flex";
                document.getElementById("two").style.display = "flex";
                document.getElementById("three").style.display = "flex";
                document.getElementById("four").style.display = "flex";
                document.getElementById("five").style.display = "flex";
                document.getElementById("six").style.display = "flex";
                document.getElementById("seven").style.display = "flex";

                document.getElementById("ele1").style.display = "flex";
                document.getElementById("ele2").style.display = "flex";
                document.getElementById("ele3").style.display = "flex";
                document.getElementById("ele4").style.display = "flex";
                document.getElementById("ele5").style.display = "flex";
                document.getElementById("ele6").style.display = "flex";
                document.getElementById("ele7").style.display = "flex";

                document.getElementById("dele1").style.display = "flex";
                document.getElementById("dele2").style.display = "flex";
                document.getElementById("dele3").style.display = "flex";
                document.getElementById("dele4").style.display = "flex";
                document.getElementById("dele5").style.display = "flex";
                document.getElementById("dele6").style.display = "flex";
                document.getElementById("dele7").style.display = "flex";
            
            } 

            else if(size == 8)
            {
                document.getElementById("one").style.display = "flex";
                document.getElementById("two").style.display = "flex";
                document.getElementById("three").style.display = "flex";
                document.getElementById("four").style.display = "flex";
                document.getElementById("five").style.display = "flex";
                document.getElementById("six").style.display = "flex";
                document.getElementById("seven").style.display = "flex";
                document.getElementById("eight").style.display = "flex";

                document.getElementById("ele1").style.display = "flex";
                document.getElementById("ele2").style.display = "flex";
                document.getElementById("ele3").style.display = "flex";
                document.getElementById("ele4").style.display = "flex";
                document.getElementById("ele5").style.display = "flex";
                document.getElementById("ele6").style.display = "flex";
                document.getElementById("ele7").style.display = "flex";
                document.getElementById("ele7").style.display = "flex";
                document.getElementById("ele8").style.display = "flex";

                document.getElementById("dele1").style.display = "flex";
                document.getElementById("dele2").style.display = "flex";
                document.getElementById("dele3").style.display = "flex";
                document.getElementById("dele4").style.display = "flex";
                document.getElementById("dele5").style.display = "flex";
                document.getElementById("dele6").style.display = "flex";
                document.getElementById("dele7").style.display = "flex";
                document.getElementById("dele7").style.display = "flex";
                document.getElementById("dele8").style.display = "flex";
            } 

            else if(size == 9)
            {
                document.getElementById("one").style.display = "flex";
                document.getElementById("two").style.display = "flex";
                document.getElementById("three").style.display = "flex";
                document.getElementById("four").style.display = "flex";
                document.getElementById("five").style.display = "flex";
                document.getElementById("six").style.display = "flex";
                document.getElementById("seven").style.display = "flex";
                document.getElementById("eight").style.display = "flex";
                document.getElementById("nine").style.display = "flex";

                document.getElementById("ele1").style.display = "flex";
                document.getElementById("ele2").style.display = "flex";
                document.getElementById("ele3").style.display = "flex";
                document.getElementById("ele4").style.display = "flex";
                document.getElementById("ele5").style.display = "flex";
                document.getElementById("ele6").style.display = "flex";
                document.getElementById("ele7").style.display = "flex";
                document.getElementById("ele8").style.display = "flex";
                document.getElementById("ele9").style.display = "flex";

                document.getElementById("dele1").style.display = "flex";
                document.getElementById("dele2").style.display = "flex";
                document.getElementById("dele3").style.display = "flex";
                document.getElementById("dele4").style.display = "flex";
                document.getElementById("dele5").style.display = "flex";
                document.getElementById("dele6").style.display = "flex";
                document.getElementById("dele7").style.display = "flex";
                document.getElementById("dele8").style.display = "flex";
                document.getElementById("dele9").style.display = "flex";
            } 

            else 
            {
                document.getElementById("one").style.display = "flex";
                document.getElementById("two").style.display = "flex";
                document.getElementById("three").style.display = "flex";
                document.getElementById("four").style.display = "flex";
                document.getElementById("five").style.display = "flex";
                document.getElementById("six").style.display = "flex";
                document.getElementById("seven").style.display = "flex";
                document.getElementById("eight").style.display = "flex";
                document.getElementById("nine").style.display = "flex";
                document.getElementById("ten").style.display = "flex";

                document.getElementById("ele1").style.display = "flex";
                document.getElementById("ele2").style.display = "flex";
                document.getElementById("ele3").style.display = "flex";
                document.getElementById("ele4").style.display = "flex";
                document.getElementById("ele5").style.display = "flex";
                document.getElementById("ele6").style.display = "flex";
                document.getElementById("ele7").style.display = "flex";
                document.getElementById("ele8").style.display = "flex";
                document.getElementById("ele9").style.display = "flex";
                document.getElementById("ele10").style.display = "flex";

                document.getElementById("dele1").style.display = "flex";
                document.getElementById("dele2").style.display = "flex";
                document.getElementById("dele3").style.display = "flex";
                document.getElementById("dele4").style.display = "flex";
                document.getElementById("dele5").style.display = "flex";
                document.getElementById("dele6").style.display = "flex";
                document.getElementById("dele7").style.display = "flex";
                document.getElementById("dele8").style.display = "flex";
                document.getElementById("dele9").style.display = "flex";
                document.getElementById("dele10").style.display = "flex";
            } 


      






           
       document.getElementById("ins").style.display = "block";

       document.getElementById("elein").style.display = "block"; 

       
   


    }




           
}


/*Functions For instering elements*/


function get1()
{     
    
        let a = prompt("Enter First element:");
         
        document.getElementById("one").style.display = "flex"; 
        document.getElementById("e1").innerHTML = a;
        document.getElementById("e1").style.display = "flex";  

        document.getElementById("one").style.backgroundColor = "green"; 
        document.getElementById("one").style.transition = "1.5s"; 
        document.getElementById("e1").style.color = "white";

}


function get2()
{     
    
        let a = prompt("Enter Second element:");

        document.getElementById("two").style.display = "flex"; 
        document.getElementById("e2").innerHTML = a;
        document.getElementById("e2").style.display = "flex";  

        document.getElementById("two").style.backgroundColor = "green"; 
        document.getElementById("two").style.transition = "1.5s"; 
        document.getElementById("e2").style.color = "white";
}

function get3()
{     
    
        let a = prompt("Enter Third element:");

        document.getElementById("three").style.display = "flex"; 
        document.getElementById("e3").innerHTML = a;
        document.getElementById("e3").style.display = "flex";  

        document.getElementById("three").style.backgroundColor = "green"; 
        document.getElementById("three").style.transition = "1.5s"; 
        document.getElementById("e3").style.color = "white";
}

function get4()
{     
    
        let a = prompt("Enter Fourth element:");

        document.getElementById("four").style.display = "flex"; 
        document.getElementById("e4").innerHTML = a;
        document.getElementById("e4").style.display = "flex"; 
        
        document.getElementById("four").style.backgroundColor = "green"; 
        document.getElementById("four").style.transition = "1.5s"; 
        document.getElementById("e4").style.color = "white";
}

function get5()
{     
    
        let a = prompt("Enter Five element:");

        document.getElementById("five").style.display = "flex"; 
        document.getElementById("e5").innerHTML = a;
        document.getElementById("e5").style.display = "flex";  

        document.getElementById("five").style.backgroundColor = "green"; 
        document.getElementById("five").style.transition = "1.5s"; 
        document.getElementById("e5").style.color = "white";
}

function get6()
{     
    
        let a = prompt("Enter Six element:");

        document.getElementById("six").style.display = "flex"; 
        document.getElementById("e6").innerHTML = a;
        document.getElementById("e6").style.display = "flex";  
}

function get7()
{     
    
        let a = prompt("Enter Seven element:");

        document.getElementById("seven").style.display = "flex"; 
        document.getElementById("e7").innerHTML = a;
        document.getElementById("e7").style.display = "flex";  
}

function get8()
{     
    
        let a = prompt("Enter Eight element:");


        document.getElementById("eight").style.display = "flex"; 
        document.getElementById("e8").innerHTML = a;
        document.getElementById("e8").style.display = "flex";  
}

function get9()
{     
    
        let a = prompt("Enter Nine element:");

        document.getElementById("nine").style.display = "flex"; 
        document.getElementById("e9").innerHTML = a;
        document.getElementById("e9").style.display = "flex";  
}

function get10()
{     
    
        let a = prompt("Enter Ten element:");

        document.getElementById("ten").style.display = "flex"; 
        document.getElementById("e10").innerHTML = a;
        document.getElementById("e10").style.display = "flex";  
}


/*Functions For Deleting elements*/

function del1()    //for deleting first location
{        
       // document.getElementById("one").style.display = "none"; 

        


       let size = document.getElementById("arraysize").value || document.getElementById("arraysize2").value;
       
          if(size == 1)
          {   
                    document.getElementById("e1").innerHTML = ""; 
                    
                    white();
               
                   
               
          }

          else if(size == 2)
          {
               document.getElementById("e1").innerHTML = document.getElementById("e2").innerHTML;
               document.getElementById("e2").innerHTML = "";

               if(document.getElementById("e1").innerHTML == "")
               {
                    document.getElementById("one").style.backgroundColor ="white";
               }

               white();
               white();
          }

          else if(size == 3)
          {
               document.getElementById("e1").innerHTML = document.getElementById("e2").innerHTML;
               document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
               document.getElementById("e3").innerHTML = "";

               white();
          }

          else if(size == 4)
          {
               document.getElementById("e1").innerHTML = document.getElementById("e2").innerHTML;
               document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
               document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
               document.getElementById("e4").innerHTML = "";

               white();
          }

          else if(size == 5)
          {
            document.getElementById("e1").innerHTML = document.getElementById("e2").innerHTML;
            document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
            document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
            document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
            document.getElementById("e5").innerHTML = "";

            white();
          }

          else if(size == 6)
          {
            document.getElementById("e1").innerHTML = document.getElementById("e2").innerHTML;
            document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
            document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
            document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
            document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
            document.getElementById("e6").innerHTML = "";
          }

          else if(size == 7)
          {
            document.getElementById("e1").innerHTML = document.getElementById("e2").innerHTML;
            document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
            document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
            document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
            document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
            document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
            document.getElementById("e7").innerHTML = "";
          }

          else if(size == 8)
          {
            document.getElementById("e1").innerHTML = document.getElementById("e2").innerHTML;
            document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
            document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
            document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
            document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
            document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
            document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
            document.getElementById("e8").innerHTML = "";
          }

          else if(size == 9)
          {
            document.getElementById("e1").innerHTML = document.getElementById("e2").innerHTML;
            document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
            document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
            document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
            document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
            document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
            document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
            document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
            document.getElementById("e9").innerHTML = "";
          }

          else if (size == 10)
          {
            document.getElementById("e1").innerHTML = document.getElementById("e2").innerHTML;
            document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
            document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
            document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
            document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
            document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
            document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
            document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
            document.getElementById("e9").innerHTML = document.getElementById("e10").innerHTML;
            document.getElementById("e10").innerHTML = "";
          }


}

function del2()   //for deleting second location
{
     

     // document.getElementById("two").style.display = "none";

     let size = document.getElementById("arraysize").value || document.getElementById("arraysize2").value;

     if (size == 2)
     {
        
          document.getElementById("e2").innerHTML = "";
  
          white();
        
     }

     else if (size == 3)
     {
         
          document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
          document.getElementById("e3").innerHTML = "";
   
          white();
     }

     else if (size == 4)
     {
         
          document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = "";

          white();
         
     }

     else if (size == 5)
     {
         
          document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = "";

          white();
         
     }


     else if (size == 6)
     {
         
          document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = "";

         
     }

     else if (size == 7)
     {
         
          document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = "";
     }

     else if (size == 8)
     {
         
          document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = "";
     }

     else if (size == 9)
     {
         
          document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
          document.getElementById("e9").innerHTML = "";
     }

     
     else if (size == 10)
     {
         
          document.getElementById("e2").innerHTML = document.getElementById("e3").innerHTML;
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
          document.getElementById("e9").innerHTML = document.getElementById("e10").innerHTML;
          document.getElementById("e10").innerHTML = "";
     }


     


      
}

function del3() //for deleting third location
{
     
      //document.getElementById("three").style.display = "none";

    let size =   document.getElementById("arraysize").value || document.getElementById("arraysize2").value;

     if (size == 3)
     {
         
         
          document.getElementById("e3").innerHTML = "";
 

          white();
        
     }

     else if (size == 4)
     {
         
         
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = "";

          white();
        
     }

     else if (size == 5)
     {
         
          
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = "";

          white();
       
     }


     else if (size == 6)
     {
         
         
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = "";
     }

     else if (size == 7)
     {
         
        
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = "";
     }

     else if (size == 8)
     {
         
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = "";
     }

     else if (size == 9)
     {
         
   
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
          document.getElementById("e9").innerHTML = "";
     }

     
     else if (size == 10)
     {
         
        
          document.getElementById("e3").innerHTML = document.getElementById("e4").innerHTML;
          document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
          document.getElementById("e9").innerHTML = document.getElementById("e10").innerHTML;
          document.getElementById("e10").innerHTML = "";
     }

 
    
      
}

function del4() //for deleting fourth location
{
     
      //document.getElementById("four").style.display = "none";

     let size =  document.getElementById("arraysize").value || document.getElementById("arraysize2").value;

      if (size == 4)
      {
          
          
        
           document.getElementById("e4").innerHTML = "";

           white();
      }
 
      else if (size == 5)
      {
          
           
           
           document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
           document.getElementById("e5").innerHTML = "";

           white();
      }
 
 
      else if (size == 6)
      {
          
          
          
           document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
           document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
           document.getElementById("e6").innerHTML = "";
      }
 
      else if (size == 7)
      {
          
         
         
           document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
           document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
           document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
           document.getElementById("e7").innerHTML = "";
      }
 
      else if (size == 8)
      {
          
        
           document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
           document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
           document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
           document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
           document.getElementById("e8").innerHTML = "";
      }
 
      else if (size == 9)
      {
          
    
         
           document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
           document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
           document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
           document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
           document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
           document.getElementById("e9").innerHTML = "";
      }
 
      
      else if (size == 10)
      {
          
         
          
           document.getElementById("e4").innerHTML = document.getElementById("e5").innerHTML;
           document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
           document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
           document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
           document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
           document.getElementById("e9").innerHTML = document.getElementById("e10").innerHTML;
           document.getElementById("e10").innerHTML = "";
      }
      
     
}

function del5()  // for deleting fifth location 
{
     
     // document.getElementById("five").style.display = "none";

     let size = document.getElementById("arraysize").value || document.getElementById("arraysize2").value;

     

     if (size == 5)
     {
         
          document.getElementById("e5").innerHTML = "";

          white();
     }


     else if (size == 6)
     {
         
         
         
          
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = "";
     }

     else if (size == 7)
     {
         
        
        
          
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = "";
     }

     else if (size == 8)
     {
         
       
          
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = "";
     }

     else if (size == 9)
     {
         
   
        
         
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
          document.getElementById("e9").innerHTML = "";
     }

     
     else if (size == 10)
     {
         
        
         
        
          document.getElementById("e5").innerHTML = document.getElementById("e6").innerHTML;
          document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
          document.getElementById("e9").innerHTML = document.getElementById("e10").innerHTML;
          document.getElementById("e10").innerHTML = "";
     }

    

      
}

function del6()  //for deleting sixth location
{
     
      //document.getElementById("six").style.display = "none";

      let size = document.getElementById("arraysize").value || document.getElementById("arraysize2").value;

     

    
 
      if (size == 6)
      {
             
         
           document.getElementById("e6").innerHTML = "";
      }
 
      else if (size == 7)
      {
          
         
           document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
           document.getElementById("e7").innerHTML = "";
      }
 
      else if (size == 8)
      {
          
        
           
          
           document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
           document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
           document.getElementById("e8").innerHTML = "";
      }
 
      else if (size == 9)
      {
          
    
         
          
          
           document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
           document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
           document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
           document.getElementById("e9").innerHTML = "";
      }
 
      
      else if (size == 10)
      {
          
         
          
         
         
           document.getElementById("e6").innerHTML = document.getElementById("e7").innerHTML;
           document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
           document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
           document.getElementById("e9").innerHTML = document.getElementById("e10").innerHTML;
           document.getElementById("e10").innerHTML = "";
      }
      
}

function del7()  //for deleting seventh location
{
     
     // document.getElementById("seven").style.display = "none";

     
     let size = document.getElementById("arraysize").value || document.getElementById("arraysize2").value;

     

    
 
    

    if (size == 7)
     {
         
        
         
          document.getElementById("e7").innerHTML = "";
     }

     else if (size == 8)
     {
         
       
          
         
          
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = "";
     }

     else if (size == 9)
     {
         
   
        
         
         
        
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
          document.getElementById("e9").innerHTML = "";
     }

     
     else if (size == 10)
     {
         
        
         
        
        
         
          document.getElementById("e7").innerHTML = document.getElementById("e8").innerHTML;
          document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
          document.getElementById("e9").innerHTML = document.getElementById("e10").innerHTML;
          document.getElementById("e10").innerHTML = "";
     }
      
}

function del8()  //  for deleting eighth element
{
     
     // document.getElementById("eight").style.display = "none";

     let size = document.getElementById("arraysize").value || document.getElementById("arraysize2").value;

 
      if (size == 8)
      {
          
        
           
          
           
         
           document.getElementById("e8").innerHTML = "";
      }
 
      else if (size == 9)
      {
          
    
         
          
          
         
       
           document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
           document.getElementById("e9").innerHTML = "";
      }
 
      
      else if (size == 10)
      {
          
         
          
         
         
          
          
           document.getElementById("e8").innerHTML = document.getElementById("e9").innerHTML;
           document.getElementById("e9").innerHTML = document.getElementById("e10").innerHTML;
           document.getElementById("e10").innerHTML = "";
      }
      
}

function del9() //for deleting ninth element
{
     
    //  document.getElementById("nine").style.display = "none";

    let size = document.getElementById("arraysize").value || document.getElementById("arraysize2").value;



    if (size == 9)
    {
        
  
         document.getElementById("e9").innerHTML = "";
    }

    
    else if (size == 10)
    {
        
     
         document.getElementById("e9").innerHTML = document.getElementById("e10").innerHTML;
         document.getElementById("e10").innerHTML = "";
    }
      
}

function del10()  //for deleting tenth element
{
     
      //document.getElementById("ten").style.display = "none";

      let size = document.getElementById("arraysize").value || document.getElementById("arraysize2").value;



    
      
      if (size == 10)
      {
           document.getElementById("e10").innerHTML = "";
      }
      
}



//update

function ersSize()
{
 

   document.getElementById("arraysize").value = "";
}