let n=1
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
      if(request.readyState===4&&request.status===200){
          const array=JSON.parse(request.response);
          array.forEach(item=>{
              const li=document.createElement('li');
              li.textContent=item.id;
              xxx.appendChild(li);
          });
          n+=1;
      }
    };
    request.send();
};
getJson.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(request.response)
            const object=JSON.parse(request.response)
            myName.textContent=object.name
        }
    };
    request.send();//readyState=2
}
getXml.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/4.xml')//readyState=1
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            const dom=request.responseXML;
            const text=dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    };
    request.send();//readyState=2
}
getHtml.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload=()=>{
        const div=document.createElement('div')
        div.innerHTML=request.response
        document.body.appendChild(div)
    }
    request.onerror=()=>{}
    request.send();
}
getJs.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload=()=>{
        const script=document.createElement('script')
        script.innerHTML=request.response
        document.body.appendChild(script)
    }
    request.onerror=()=>{}
    request.send();
}
getCss.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/style.css')//readyState=1
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        //下载完成，但不知道是2xx还是404
        if(request.readyState===4){
            //200到300的状态码才是成功
            if(request.status>=200&&request.status<300){
             //创建style标签
             const style=document.createElement('style')
             //填写style内容
             style.innerHTML=request.response
             //插到头里面
             document.head.appendChild(style)
            }
            else{
                alert('加载css失败')
            }      
        }
    };
    request.send();//readyState=2
}
