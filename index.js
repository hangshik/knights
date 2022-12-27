function bg(bl1,bl2) {
  success_ck=false;
  for(i=0;i<b1*b2;i++){
  if (list[i]===1){
    document.getElementById(i).style.backgroundColor="skyblue";
  } else {
    if((((parseInt(i/b2)-bl2)**2 + (i%b2-bl1)**2)==5)){
      document.getElementById(i).style.backgroundColor="green";
      success_ck=true;
    } else {
      document.getElementById(i).style.backgroundColor="#dddddd";
    }
  }
  document.getElementById(bl1+bl2*b2).style.backgroundColor="red";
}
}

let count = 1;

function success(){
  let re = document.getElementById("result");
  const average = list.reduce((a,c)=>a+c)/list.length;
  if(average==1){
    re.textContent ="축하합니다. 성공하였습니다."
  } else {
    if(success_ck){
      re.textContent ="게임중입니다."
    } else {
      re.textContent ="실패하였습니다. 시작을 클릭하여 다시 시작하십시오."
    }
  }
}

function clickbt(lo1, lo2) {
  if((last_x+last_y==-2 || (((last_x-lo1)**2 + (last_y-lo2)**2)==5))&& list[lo1+lo2*b2]==0 ){
    list[lo1+lo2*b2]=(list[lo1+lo2*b2]+1)%2;
    const element = document.getElementById(lo1+lo2*b2);
    element.innerText = number;
    number++;
    bg(lo1,lo2);
    last_x=lo1;
    last_y=lo2;
  }
  success();
}

function main(a1, a2) {
  list=[]  
  count=1;
  number = 1;
  last_x = -1;
  last_y = -1;
  let tag = "<div class='container'>";
    b1 = parseInt(a1);
    b2 = parseInt(a2);
    for (j = 0; j < b1; j++) {
      tag += "<div class='row'>";
      for (i = 0; i < b2; i++) {
        list.push(0);
        tag += "<div class='column' id='"+(i+j*b2)+"' onclick='clickbt("+i+","+j+")'></div>";
      }
      tag += "</div>";
    }
    tag += "</div>";
    area.innerHTML = tag;

    document.getElementById("result").textContent = "네모칸을 선택하여 게임을 시작하십시오.";
  }

  onload = () => {
    main(txt1.value, txt2.value)
  }