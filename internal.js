function calculate()
    {
      let s1=Number(document.getElementById("s-1").value);
      let s2=Number(document.getElementById("s-2").value);
      let a1=Number(document.getElementById("a-1").value);
      let a2=Number(document.getElementById("a-2").value);
      let q1=Number(document.getElementById("q-1").value);
      let q2=Number(document.getElementById("q-2").value);
      let atten=Number(document.getElementById("atten").value);
      let best=Math.max(s1,s2);
      let other=Math.min(s1,s2);
      let sessional=(best*0.83)+(other*0.17);
      let besta=Math.max(a1,a2);
      let othera=Math.min(a1,a2);
      let assignment=(besta*0.83)+(othera*0.17);
      let quiz=(q1+q2)/2;
      let attendance=1;
      if(atten>=90){
        attendance=5;
      } else if(atten>=85){
        attendance=4;
      } else if(atten>=80){
        attendance=3;
      } else if(atten>=75){
        attendance=2;
      } else{
        attendance=0;
      }
      let total=sessional+assignment+quiz+attendance;
      let mid_marks=(total/47)*(30);
      document.getElementById("result").innerHTML = "YOUR INTERNALS ARE: "+ mid_marks.toFixed(2) + "/ 30";
      document.getElementById("session").innerHTML = "YOUR SESSIONAL MARKS ARE: "+ sessional.toFixed(2) + "/18";
      document.getElementById("assign").innerHTML = "YOUR ASSIGNMENT MARKS ARE: "+ assignment.toFixed(2) + "/12";
      document.getElementById("quizm").innerHTML = "YOUR QUIZ MARKS ARE: "+ quiz.toFixed(2) + "/12";
      document.getElementById("attend").innerHTML = "THE MARKS FOR YOUR ATTENDANCE ARE: "+ attendance.toFixed(2) + "/5";
    }