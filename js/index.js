var siteName=document.getElementById('siteNmae');
var siteUrl=document.getElementById('bookMarkURL');
var warnin=document.getElementById('warnin');
var closeBtn=document.getElementById('closeBtn');
var sitesList=[];
//=====================================//



if(localStorage.getItem('product')!=null){
    sitesList=JSON.parse(localStorage.getItem('product'));
    display();
}
function clear(){
    siteName.value=null;
    siteUrl.value=null;
}
//=====================================//

function addSite(){
   if(validate()==true && validate1()==true)
    {
        warnin.classList.replace('d-flex','d-none')
        var site={

            sitename:siteName.value,
            sitURRL:siteUrl.value
        }
        sitesList.push(site);
        display();
        clear();
        localStorage.setItem('product', JSON.stringify(sitesList));
       

   }
   else{
  
    warnin.classList.replace('d-none','d-flex')
   }
   
}
console.log(validate())
//=====================================//

function display(){
    var cartona=``;
    for(var i=0;i<sitesList.length;i++){
    cartona+=`<tr >
          <td scope="col">${i+1}</td>
          <td scope="col">${sitesList[i].sitename}</td>
          <td scope="col">  <button onclick="" class="btn btn-visit px-3"><i class="fa-solid fa-eye pe-2"></i>   <a href="${sitesList[i].sitURRL}" target="_blank" class="text-decoration-none">Visit</a></button></td>
          <td scope="col">  <button onclick="deleteSite(${i})" class="btn btn-delete px-3"><i class="fa-solid fa-trash-can"></i> Delet</button></td>
        </tr>`

    }
    document.getElementById('sites').innerHTML=cartona;

}

//=====================================//

function deleteSite(deletedIndex){
    sitesList.splice(deletedIndex,1);

    localStorage.setItem('product', JSON.stringify(sitesList));

    display();
}
//=====================================//


function validate(){

    var regx=
    {
        sitenmae:/^\w{3,}(\s+\w+)*$/,
       
    }
   
    if( regx.sitenmae.test(siteName.value)){
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
        
        return true;
    }
    else{
        siteName.classList.add('is-invalid');
        siteName.classList.remove('is-valid');
        return false;
    }
   
}
function validate1(){

    var regx=
    {
        bookmarkURL:/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/,
    }
   
    if( regx.bookmarkURL.test(siteUrl.value)){
        siteUrl.classList.add('is-valid');
        siteUrl.classList.remove('is-invalid');
        return true;
        
    }
    else{
        siteUrl.classList.add('is-invalid');
        siteUrl.classList.remove('is-valid');
        return false;

    }
   
}
closeBtn.addEventListener('click',close)
function close(){
    warnin.classList.replace('d-flex','d-none')
}
//=====================================//