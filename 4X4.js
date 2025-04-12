// 마우스 오른쪽 버튼 클릭 금지
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// 화명 해상도 크기 구함
function getDisplayInfo() {
  var size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  }
  return size;
}

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


document.getElementById(0).style.backgroundColor="white";
document.getElementById(3).style.backgroundColor="white";
document.getElementById(12).style.backgroundColor="white";
document.getElementById(15).style.backgroundColor="white";
}

let count = 1;

function success(){
  let re = document.getElementById("result");
  const average = list.reduce((a,c)=>a+c)/list.length;
  if(average==1){
    re.textContent ="축하합니다. 성공하였습니다."
  } else {
    if(success_ck){
      re.textContent ="게임중입니다. 녹색을 선택하여 이동하십시오."
    } else {
      re.textContent ="더 이상 갈 곳이 없습니다. 빨간색을 선택하여 되돌아 가거나, 시작을 클릭하여 다시 시작하십시오."
    }
  }
}

function clickbt(lo1, lo2) {
  if(lo1==last_x && lo2==last_y){
    if(list_number[lo1+lo2*b2]=="1"){
      window.location.reload();
    }
    
    list[lo1+lo2*b2]=(list[lo1+lo2*b2]+1)%2;
    list_number[lo1+lo2*b2]="0";

    const element1 = document.getElementById(lo1+lo2*b2);
    element1.innerText = "";

    let last_number1=list_number.indexOf(number-2);
    lo2=parseInt(last_number1/b2);
    lo1=last_number1%b2;

    let last_number2=list_number.indexOf(number-3);
    last_y=parseInt(last_number2/b2);
    last_x=last_number2%b2;
    number--;
    number--;

    const element = document.getElementById(lo1+lo2*b2);
    element.innerText = number;
    list_number[lo1+lo2*b2] = number;
    number++;
    bg(lo1,lo2);
    last_x=lo1;
    last_y=lo2;
    
  }

  if((last_x+last_y==-2 || (((last_x-lo1)**2 + (last_y-lo2)**2)==5))&& list[lo1+lo2*b2]==0 ){
    list[lo1+lo2*b2]=(list[lo1+lo2*b2]+1)%2;
    const element = document.getElementById(lo1+lo2*b2);
    element.innerText = number;
    list_number[lo1+lo2*b2] = number;
    number++;
    bg(lo1,lo2);
    last_x=lo1;
    last_y=lo2;
  }
  success();
}

function main() {
  list=[1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1];
  list_space=list;
  list_number=[];
  count=1;
  number = 1;
  last_x = -1;
  last_y = -1;
  let tag = "<div class='container'>";
    b1 = 4;
    b2 = 4;
    var size = getDisplayInfo();
    s = Math.min((size.width-15*b2)/b2,60);
    for (j = 0; j < b1; j++) {30  
      tag += "<div class='row'>";
      for (i = 0; i < b2; i++) {
        // list.push(0);
        tag += "<div class='column' id='"+(i+j*b2)+"' style=width:"+s+"px;height:"+s+"px; onclick='clickbt("+i+","+j+")'></div>";
      }
      tag += "</div>";
    }
    tag += "</div>";
    area.innerHTML = tag;
    console.log=tag;

    for(i=0;i<b1*b2;i++)
      if(list[i]==1)
        document.getElementById(i).style.backgroundColor="white";
    
    document.getElementById("result").textContent = "네모칸을 선택하여 게임을 시작하십시오.";
  }

onload = () => {
  main()
}