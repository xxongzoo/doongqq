//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

    {
        question: "유교의 도덕적 사상에서 기본이 되는 3가지의 강령과 5가지의 인륜",
        choices: ["어부지리","삼강오륜","사통팔달","구우일모"],
        answer: 2
    
    },
    
    {
        question: "인생의 허무함을 한바탕의 봄꿈에 비유하여 이르는 말",
        choices: ["도학선생","십중팔구","일창춘몽","인산인해"],
        answer: 3
    
    },
    {
        question: "몹시 놀아 어찌할 바를 모름, 넋이 날아가고 넋이 흩어지다라는 뜻",
        choices: ["혼비백산","도학선생","인산인해","속전속결"],
        answer: 1
    
    },
    {
        question: "Apart from <b> tag, what other tag makes text bold ?",
        choices: ["fat","strong","black","emp"],
        answer: 2
    
    },
    {/*5*/
        question: "일관성 없이 한 입으로 두 말을 하다.",
        choices: ["동문서답","일구이언","천차만별","삼십육계"],
        answer: 2
    
    },
    {
        question: "많으면 많을수록 좋다.",
        choices: ["일장일단","춘하추동","천차만별","다다익선"],
        answer: 4
    
    }, 
    {
        question: "장점이 있으면 단점도 있다고 하는 것",
        choices: ["장유유서","결초보은","일장일단","천차만별"],
        answer: 3
    
    }, 
    {
        question: "이를 갈고 마음을 썩이다.",
        choices: ["절치부심","동병상련","장유유서","일구이언"],
        answer: 1
    
    }, 
    {
        question: "깊이 생각해 보지않고 경솔하게 행동한다.",
        choices: ["일장춘몽","혼비백산","절치부심","경거망동"],
        answer: 4
    
    }, 
    {/*10*/
        question: "도덕의 이론만 캐고 현실 사회의 일에 어두운 사람을 조롱하는 말",
        choices: ["도학선생","인산인해","속전속결","춘하추동"],
        answer: 1
    
    }
                
];

var CSSquestions=[

    {
        question: "타인의 기대나 관심으로 인하여 능률이 오르거나 결과가 좋아지는 현상인 이 효과는 무엇일까요?",
        choices: ["노시보효과","나비효과","피그말리온효과","플라시보효과"],
        answer: 3
    
    }, 
    {
        question: "한국의 전통의상은 한복입니다. 그렇다면 베트남의 전통의상은 무엇인가요?",
        choices: ["기모노","아오자이","치파오","디른들"],
        answer: 2
    
    },
    {
        question: "조선 중기에 지었다고 하는 고전소설인 '홍길동전'의 저자는?",
        choices: ["이순신","신사임당","김홍도","허균"],
        answer: 4
    
    }, 
    {/*4*/
        question: "'그래도 지구는 돈다'라는 명언을 남긴 이 인물은?",
        choices: ["닐암스트롱","갈릴레오 갈릴레이","헬렌켈러","제인구달"],
        answer: 2
    
    },
    {
        question: "조선시대 서울에 설치했던 최고의 교육기관은?",
        choices: ["암행어사","청학동","성균관","허심청"],
        answer: 3
    
    },
    {/*6*/
        question: "아일랜드 시인 윌리엄 예이츠가 '천사의 실수'라고 표현했던 이것은 무엇일까요?",
        choices: ["아킬레스건","보조개","속눈썹","눈동자"],
        answer: 2
    
    }, 
    {
        question: "밀가루 반죽에 잘게 썬 문어를 넣고 구운 일본 간식으로, 가쓰오부시와 소스를 뿌려먹는 이 음식은?",
        choices: ["카츠동","라멘","타코야끼","야끼니꾸"],
        answer: 3
    
    },
    {/*8*/
        question: "수학의 아버지는 누구일까요?",
        choices: ["피타고라스","아이슈타인","탈레스","파이"],
        answer: 1
    
    }, 
    {
        question: "약 480만년 전부터 4천년까지 존재했던 포유류로 긴 코와 4m 길이의 어금니를 가진 이 동물은?",
        choices: ["티라노사우르스","매머드","키위새","핑크돌고래"],
        answer: 2
    
    },
    {
        question: "현실적으로 아무데도 존재하지 않는 이상한 나라. 이상향을 가르키는 말로 꿈의 장소를 일컫는다.",
        choices: ["유토피아","이데아","국가론","서던리치"],
        answer: 1
    
    }
                
];
var JSquestions=[

    {
        question: "청동기 시대에 커다란 돌을 쌓아 만든 족장의 무덤을 뭐라고 하게?",
        choices: ["돌무덤","바위언덕","고인돌","석묘"],
        answer: 3
    
    }, 
    {/*wscubetech*/
        question: "우리나라 최초의 국가는?",
        choices: ["백제","고조선","고구려","신라"],
        answer: 2
    
    },
    {
        question: "'널리 인간을 이롭게 한다.'는 고조선의 건국 이념은?",
        choices: ["홍익인간","태평성대"],
        answer: 1
    
    }, 
    {
        question: "단군 왕검이 하늘에 제사를 지냈다는 참성단이 있는 곳은?",
        choices: ["발해","조선","강화도","고구려"],
        answer: 3
    
    },
    {
        question: "신라가 삼국 통일의 위업을 달성할 때의 왕은 누구인가?",
        choices: ["의자왕","문무왕"],
        answer: 2
    
    },
    {
        question: "고려에 처음 쳐들어온 외적으로 만주 서북부 지방에 살았고 요라는 나라를 세운 민족은?",
        choices: ["여진족","거란족","오랑캐"],
        answer: 2
    
    }, 
    {
        question: "고려와 친교를 맺고 사이좋게 지냈던 나라는?",
        choices: ["일본","명나라","송나라","당나라"],
        answer: 3
    
    },
    {
        question: "세종 대왕 때 만들어졌으면 비가 온 양을 재는 기구는?",
        choices: ["측우기","해시계","이두","벙거지"],
        answer: 1
    
    }, 
    {
        question: "흥선 대원군은 우리나라 여러 곳에 서양과의 교섭을 금지하는 글을 적은 비석을 세웠는데 이를 무엇일까?",
        choices: ["에밀레비","척화비"],
        answer: 2
    
    },
    {
        question: "전체 4쪽 중 1쪽은 영어로 나머지는 한글로 쓰여진 민간인이 만든 최초의 신문은 무엇인가?",
        choices: ["독립뉴스","조선뉴스","조선신문","독립신문"],
        answer: 4
    
    }
                
];
var PYquestions=[

    {
        question: "What is the output of the following program : print(Hello World'[::-1])",
        choices: ["dlroW olleH","Hello Worl","d","Error"],
        answer: 1
    
    }, 
    {
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        choices: ["int","bool","void","None"],
        answer: 4
    
    },
    {
        question: "Which module in Python supports regular expressions?",
        choices: ["re","regex","pyregex","None of the above"],
        answer: 1
    
    }, 
    {
        question: "What is the output of the following program : (tricky ques.)  print (0.1 + 0.2 == 0.3) ",
        choices: ["True","False","Machine Dependent","Error"],
        answer: 2
    
    },
    {
        question: "Which of the following is not a complex number?",
        choices: ["k = 2 + 3j","k = complex(2, 3)","k = 2 + 3l","k = 2 + 3J"],
        answer: 3
    
    },
    {
        question: "What does ~~~~~~5 evaluate to?",
        choices: ["+5","-11","+11","-5"],
        answer: 1
    
    }, 
    {
        question: "Given a string s = “Welcome”, which of the following code is incorrect?",
        choices: ["print s[0]","print s.lower()","s[1] = ‘r’","print s.strip()"],
        answer: 3
    
    },
    {
        question: "________ is a simple but incomplete version of a function.",
        choices: ["Stub","Function","A function developed using bottom-up approach","A function developed using top-down approach"],
        answer: 1
    
    }, 
    {
        question: "To start Python from the command prompt, use the command ______",
        choices: ["execute python","go python","python","run python"],
        answer: 3
    
    },
    {
        question: "Which of the following is correct about Python?",
        choices: ["It supports automatic garbage collection.","It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java","Both of the above","None of the above"],
        answer: 3
    
    }
                
];
var Cquestions=[

    {
        question: "C Language was developed in the year ____",
        choices: ["1970","1975","1980","1985"],
        answer: 1
    
    }, 
    {
        question: "Which one is not a reserve keyword in C Language?",
        choices: ["auto","main","case","register"],
        answer: 2
    
    },
    {
        question: "A C variable name can start with a ____",
        choices: ["Number","Plus Sign","Underscore","Asterisk"],
        answer: 3
    
    }, 
    {
        question: "Prototype of a function means _____",
        choices: ["Name of Function","Output of Function","Declaration of Function","Input of a Function"],
        answer: 3
    
    },
    {
        question: "Name the loop that executes at least once.",
        choices: ["for","If","do-while","while"],
        answer: 3
    
    },
    {
        question: "Far pointer can access _____",
        choices: ["Single memory location","No memory location","All memory location","First and Last Memory Address"],
        answer: 3
    
    }, 
    {
        question: "A pointer pointing to a memory location of the variable even after deletion of the variavle is known as _____",
        choices: ["far pointer","dangling pointer","null pointer","void pointer"],
        answer: 2
    
    },
    {
        question: "An uninitialized pointer in C is called ___",
        choices: ["Constructor","dangling pointer","Wild Pointer","Destructor"],
        answer: 3
    
    }, 
    {
        question: "A pointer that is pointing to NOTHING is called ____",
        choices: ["VOID Pointer","DANGLING Pointer","NULL Pointer","WILD Pointer"],
        answer: 3
    
    },
    {
        question: "Who is known as the father of C Language ?",
        choices: ["Digvijay","James A. Sosling","Dr. E. F. Codd","Dennis Ritchie"],
        answer: 4
    
    }
                
];





//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="너는 "+(countQues+1)+" 문제 중 "+document.getElementById("").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" 문제를 맞췄고 "+((countQues+1)-correct)+" 문제를 틀렸어.";
    
    document.getElementById("display-final-score").innerHTML="너의 최종 점수: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="너 엄청 똑똑하다!!";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="오! 좀 하는데?";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="조금 실망스러운데? ";
    }else{
        document.querySelector(".remark").innerHTML="매우 실망스러운데?";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
