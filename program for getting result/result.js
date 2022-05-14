function myFunction() {
    let sub1 = Number(document.getElementById('1').value);

    // for (let i = 1; i <= 5; i++) {  // Loop start for sub1
    //     let s1 = Number(document.getElementsById('1').value);
    //     if (s1 >= 0 && s1 <= 100) {
    //         sub1 = s1; break;
    //     } else {
    //         alert("wrong input");

    //     };
    // }; // loop end for sub1

    let sub2 = Number(document.getElementById('2').value);

    // for (let i = 1; i <= 5; i++) {
    //     let s2 = Number(document.getElementsById('2').value);
    //     if (s2 >= 0 && s2 <= 100) {
    //         sub2 = s2; break;
    //     } else {
    //         alert("wrong input");

    //     };
    // };

    let sub3 = Number(document.getElementById('3').value);

    // for (let i = 1; i <= 5; i++) {  // Loop start for sub3
    //     let s3 = Number(document.getElementsById('3').value);
    //     if (s3 >= 0 && s3 <= 100) {
    //         sub3 = s3; break;
    //     } else {
    //         alert("wrong input");

    //     };
    // }; // loop end for sub3

    let sub4 = Number(document.getElementById('4').value);

    // for (let i = 1; i <= 5; i++) {  // Loop start for sub4
    //     let s4 = Number(Document.getElementsById('4').value);
    //     if (s4 >= 0 && s4 <= 100) {
    //         sub4 = s4; break;
    //     } else {
    //         alert("wrong input");

    //     };
    // }; // loop end for sub4

    let sub5 = Number(document.getElementById('5').value);

    // for (let i = 1; i <= 5; i++) {  // Loop start for sub5
    //     let s5 = Number(document.getElementsById('5').value);
    //     if (s5 >= 0 && s5 <= 100) {
    //         sub5 = s5; break;
    //     } else {
    //         alert("wrong input");

    //     };
    // }; // loop end for sub5

    let sub6 = Number(document.getElementById('6').value);

    // for (let i = 1; i <= 5; i++) {  // Loop start for sub6
    //     let s6 = Number(document.getElementsById('6').value);
    //     if (s6 >= 0 && s6 <= 100) {
    //         sub6 = s6; break;
    //     } else {
    //         alert("wrong input");

    //     };
    // }; // loop end for sub6

    let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5 + sub6; // total marks
    let per = (totalMarks / 600) * 100; // calculate percentage
    {

        document.getElementById('totalMarks').innerHTML = "Total Marks : " + totalMarks;
        document.getElementById('percentage').innerHTML = "Total Percentage : " + per + "%";
        //     document.write(`marks in sub1 OutOf(100) :${sub1}
        // <br> marks in sub2 OutOf(100) :${sub2}
        // <br> marks in sub3 OutOf(100) :${sub3}
        // <br> marks in sub4 OutOf(100) :${sub4}
        // <br> marks in sub5 OutOf(100) :${sub5}
        // <br> marks in sub6 OutOf(100) :${sub6}
        // <br> Total Marks :${totalMarks}
        // <br> Total Percentage :${per}%<br><br>`);



        // calculate Ree if marks <33
        let ree1 = sub1 < 33 ? " sub1" : '';
        let ree2 = sub2 < 33 ? " sub2" : '';
        let ree3 = sub3 < 33 ? " sub3" : '';
        let ree4 = sub4 < 33 ? " sub4" : '';
        let ree5 = sub5 < 33 ? " sub5" : '';
        let ree6 = sub6 < 33 ? " sub6" : '';
        let ree = ree1 + ree2 + ree3 + ree4 + ree5 + ree6;
        if (ree != 0) {

            document.getElementById('ree').innerHTML = "Ree : " + ree;

            // document.write("Ree :" + ree);
        }
        else if (ree == 0)  // if not ree in any of the subject than Checking your result you are Pass Or Fail using if-else
        {
            if (per >= 33.33) // if pass than check division
            {
                if (per >= 33.33 && per <= 50) // 3rd Division
                {
                    document.getElementById('result').innerHTML = "Result :Pass (3rd Division)";
                    // document.write("Result :Pass (3rd Division)");
                }
                else if (per >= 51 && per <= 59)  // 2nd Division
                {
                    document.getElementById('result').innerHTML = "Result :Pass (2nd Division)";
                    // document.write('Result :Pass (2nd Division)');
                }
                else   // Ist Division
                {
                    document.getElementById('result').innerHTML = 'Result :Pass (Ist Division)';
                    // document.write('Result :Pass (Ist Division)');
                };
            }

            else {
                document.getElementById('result').innerHTML = "Result :Fail ";
                //    document.write("Result :Fail ");
            };

        };

    }
}
