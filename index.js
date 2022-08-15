let api_url = "https://random-flat-colors.vercel.app/api/random?count=6"
function color_palette(y){
    for(let i=0;i<12;i++){
            document.getElementsByClassName("color")[i].style.backgroundColor=y.colors[i%6];
    }
}

fetch(api_url)
.then(x => x.json())
.then(y => {
    color_palette(y);
});



function sidebar(){
    document.getElementById("side_bar").style.display="block";
    document.getElementById("add_creativebtn").disabled=true;
}

function closeSideBar(){
    document.getElementById("side_bar").style.display="none";
    document.getElementById("add_creativebtn").disabled=false;
    document.getElementById("warning").innerHTML="";
}



let bg="";
function color1(){
    bg=document.getElementsByClassName("color")[0].style.backgroundColor;
    document.getElementsByClassName("selected")[1].style.display="block";
    document.getElementsByClassName("selected")[1].style.color=bg;
}
function color2(){
    bg=document.getElementsByClassName("color")[1].style.backgroundColor;
    document.getElementsByClassName("selected")[1].style.display="block";
    document.getElementsByClassName("selected")[1].style.color=bg;
}
function color3(){
    bg=document.getElementsByClassName("color")[2].style.backgroundColor;
    document.getElementsByClassName("selected")[1].style.display="block";
    document.getElementsByClassName("selected")[1].style.color=bg;
}
function color4(){
    bg=document.getElementsByClassName("color")[3].style.backgroundColor;
    document.getElementsByClassName("selected")[1].style.display="block";
    document.getElementsByClassName("selected")[1].style.color=bg;
}
function color5(){
    bg=document.getElementsByClassName("color")[4].style.backgroundColor;
    document.getElementsByClassName("selected")[1].style.display="block";
    document.getElementsByClassName("selected")[1].style.color=bg;
}
function color6(){
    bg=document.getElementsByClassName("color")[5].style.backgroundColor;
    document.getElementsByClassName("selected")[1].style.display="block";
    document.getElementsByClassName("selected")[1].style.color=bg;
}
let arr=[];
let counter=0;


//for adding creatives

function donebtn(){
    if(document.getElementById("count").innerText=="5"){
        document.getElementById("warning").innerHTML="Only 5 creatives are allowed";
        return;
    }
  
    let l;
    for(let i=0;i<6;i++){
        if(document.getElementsByClassName("creative_list")[i].innerHTML==""){
            l=i;
            break;
        }
    }
    var form_title=document.getElementById("title").value;
    var form_subtitle=document.getElementById("subtitle").value;
    if(form_title=="" || form_subtitle=="" || bg==""){
        alert("please make sure you have given input and selected a color");
    }
   
    else{
        
       let create= document.getElementsByClassName("creative_list")[l];
       create.innerHTML=`${form_title} <br><br> ${form_subtitle }`;
       create.style.padding="20px";
       create.style.margin="30px";
       create.style.backgroundColor=bg;
       create.style.border="1px solid black";
       create.style.borderRadius="5px";
       counter=document.getElementById("count").innerText;
        let num=parseInt(counter);
         if(num<5){
            let ob= {title:'', subtitle:'', bgc:''};
            num+=1;
            ob.title=form_title;
            ob.subtitle=form_subtitle;
            ob.bgc=bg;
            arr.push(ob);
            document.getElementById("count").innerHTML=num;
            switch(num){
            case 1:
                document.getElementById("fill").style.width="20%";
                break;
            case 2: 
                document.getElementById("fill").style.width="40%";
                break;
            case 3: 
                document.getElementById("fill").style.width="60%";
                break;
            case 4: 
                document.getElementById("fill").style.width="80%"  ;
                break; 
            case 5: 
                document.getElementById("fill").style.width="100%"  ;
                break;        
            } 
          document.getElementById("title").value="";
          document.getElementById("subtitle").value="";
          bg="";
        }
    }
}





//Filtering part
let s_bg="";
let s_select=document.getElementsByClassName("selected")[0];


function s_one(){
    search();
    s_bg=document.getElementsByClassName("color")[0].style.backgroundColor;
    s_select.style.display="block";
    s_select.style.color=s_bg;
  
}
function s_two(){
    search();
    s_bg=document.getElementsByClassName("color")[1].style.backgroundColor;
    s_select.style.display="block";
    s_select.style.color=s_bg;
   

}
function s_three(){
    search();
    s_bg=document.getElementsByClassName("color")[2].style.backgroundColor;
    s_select.style.display="block";
    s_select.style.color=s_bg;
   
}
function s_four(){
    search();
    s_bg=document.getElementsByClassName("color")[3].style.backgroundColor;
    s_select.style.display="block";
    s_select.style.color=s_bg;
   
}
function s_five(){
    search();
    s_bg=document.getElementsByClassName("color")[4].style.backgroundColor;
    s_select.style.display="block";
    s_select.style.color=s_bg;
    
}
function s_six(){
    search();
    s_bg=document.getElementsByClassName("color")[5].style.backgroundColor;
    s_select.style.display="block";
    s_select.style.color=s_bg;
    
}



function search(){

    if(arr.length==0){
        alert('please add the required creatives first');
        return;
    }
    for(let i=0;i<5;i++){
        document.getElementsByClassName("s_filter")[i].style.display="none";
    }
    document.getElementById("add_creativebtn").disabled=true;
    document.getElementById('lists').innerHTML="";
    let s_search=document.getElementById("search_title").value;
        for(i in arr){
            let title=arr[i].title;
            let subtitle=arr[i].subtitle;
            if(arr[i].bgc==s_bg && s_search==""){
                let ele=document.getElementsByClassName("s_filter")[i];
                ele.innerHTML=`${title}<br><br> ${subtitle}`;
                ele.setAttribute('style','border: 1px solid black; padding: 20px; margin: 30px; border-radius:5px')
                ele.style.backgroundColor=arr[i].bgc;
            }
    }
}


function searchTitle(){
    let s_search=document.getElementById("search_title").value;
    if(s_bg==""){
        alert('please select color first');
    }
    else {
        for(let i=0;i<5;i++){
            document.getElementsByClassName("s_filter")[i].style.display="none";
        }
        for(let i=0;i<5;i++){
            document.getElementsByClassName("ts_filter")[i].style.display="none";
        }
        let col=document.getElementsByClassName("selected")[0].style.color;
        for(i in arr){
            let title=arr[i].title;
            let subtitle=arr[i].subtitle;
            if((arr[i].bgc==col)&&(s_search.match(title)||s_search.match(subtitle))){
                let ele=document.getElementsByClassName("ts_filter")[i];
                ele.innerHTML=`${title}<br><br> ${subtitle}`;
                ele.setAttribute('style','border: 1px solid black; padding: 20px; margin: 30px; border-radius:5px')
                ele.style.backgroundColor=arr[i].bgc;
            }
        }
    }
}

