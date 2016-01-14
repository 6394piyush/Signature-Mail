      var InputTitle=document.getElementById("title");
      var InputName=document.getElementById("F_name");
      var InputWebsite=document.getElementById("Website");
      var InputMobile=document.getElementById("Mobile");
          var InputEmail=document.getElementById("Email");
     var InputCompany=document.getElementById("C_name");
     var InputPhone=document.getElementById("O_phone");
      var InputFax=document.getElementById("Fax");
     var InputAddress=document.getElementById("Address");
   var InputAddress1=document.getElementById("Address1");
   
      
                var home=document.getElementById("home");
             var logo=document.getElementById("logo");
             var social=document.getElementById("social");
             var style=document.getElementById("style");
      
      
      
       function SignatureNameOnKeyPress(event){
           var val=InputName.value;
          var id=InputName.name;
          SignatureValuesAppend(event,val,id);
      }
      function SignatureNameOnChange(input){
          var id=InputName.name;
          ShowValuesOnKeyPress(input.value,id);
      }
      function SignatureTitleOnKeyPress(event){
           var val=InputTitle.value;
          var id=InputTitle.name;
          SignatureValuesAppend(event,val,id);
      }
      function SignatureTitleOnChange(input){
          var id=InputTitle.name;
          ShowValuesOnKeyPress(input.value,id);
      }
       function SignatureEmailOnKeyPress(event){
           var val=InputEmail.value;
          var id=InputEmail.name;
          SignatureValuesAppend(event,val,id);
      }
      function SignatureEmailOnChange(input){
          var id=InputEmail.name;
          ShowValuesOnKeyPress(input.value,id);
      }
      
       function SignatureCompanyOnKeyPress(event){
           var val=InputCompany.value;
          var id=InputCompany.name;
          SignatureValuesAppend(event,val,id);
      }
      function SignatureCompanyOnChange(input){
          var id=InputCompany.name;
          ShowValuesOnKeyPress(input.value,id);
      }
       function SignatureWebsiteOnKeyPress(event){
           var  Website=InputWebsite.value;
          var id=InputWebsite.name;
            SignatureValuesAppend(event,Website,id);
      }
      function SignatureWebsiteOnChange(input){
          var id=InputWebsite.name;
          ShowValuesOnKeyPress(input.value,id);
      }
      
       function SignatureOfficePhoneOnKeyPress(event){
           var val=InputPhone.value;
          var id=InputPhone.name;
          SignatureValuesAppend(event,val,id);
      }
      function SignatureOfficePhoneOnChange(input){
          var id=InputPhone.name;
          ShowValuesOnKeyPress(input.value,id);
      }
       function SignatureMobileOnKeyPress(event){
             var val=InputMobile.value;
            var id=InputMobile.name;
            SignatureValuesAppend(event,val,id);
      }
      function SignatureMobileOnChange(input){
          var id=InputMobile.name;
          ShowValuesOnKeyPress(input.value,id);
      }
       function SignatureFaxOnKeyPress(event){
           var val=InputFax.value;
          var id=InputFax.name;
          SignatureValuesAppend(event,val,id);
      }
      function SignatureFaxOnChange(input){
          var id=InputFax.name;
          ShowValuesOnKeyPress(input.value,id);
      }
       function SignatureAddressOnKeyPress(event){
                var val=InputAddress.value;
          var id=InputAddress.name;
          SignatureValuesAppend(event,val,id);
      }
      function SignatureAddressOnChange(input){
          var id=InputAddress.name;
          ShowValuesOnKeyPress(input.value,id);
      }
       function SignatureAddress1OnKeyPress(event){
           var val=InputAddress1.value;
          var id=InputAddress1.name;
          SignatureValuesAppend(event,val,id);
      }
      function SignatureAddress1OnChange(input){
          var id=InputAddress1.name;
          ShowValuesOnKeyPress(input.value,id);
      }
      
      
      function SignatureValuesAppend(event,values,id)
      {
           var append=String.fromCharCode(event.which);
           var SignatureTitle=values+append;
          
           ShowValuesOnKeyPress(SignatureTitle,id);
          }
          
          
          
         
         
         
         
            
        //for showing all values
        
        function ShowValuesOnKeyPress(values,name){
                    switch(name){
                        
       case "FirstName":
           {
               document.getElementById("Fname").innerHTML="<b>"+values+"</b>";
               break;
           }
       case "Title":
           {    
               document.getElementById("Title1").innerHTML=" <b>|</b> "+values+"</br>";
               break;
           }
       case "Website":
           {  
              document.getElementById("Website1").innerHTML=values ;
              document.getElementById("WebLink").setAttribute("href",values);
              document.getElementById("LogoLink").setAttribute('href',values);
               break;
           }
       case "C_name":
           {    
               document.getElementById("C_name1").innerHTML="<b>"+values+"</b>";
               break;
           }
       case "Email":
           {    
               document.getElementById("Email1").innerHTML=values;
               document.getElementById("EmailLink").setAttribute("href","mailto:"+values);
               break;
           }
       case "Mobile":
           
          {   
               document.getElementById("Mobile1").innerHTML="<b>M</b>"+values;
               break;
           }
       case "O_phone":
           {    
             document.getElementById("O_phone1").innerHTML="<b>T</b>"+values;
               break;
           }
       case "Fax":
           {    
               document.getElementById("Fax1").innerHTML="<b>|</b> <b>F</b>"+values;
               break;
           }
       
       case "Address1":
           {    
               document.getElementById("AddressLine").innerHTML=values;
               break;
           }
       case "Address":{
               document.getElementById("AddressLine1").innerHTML=values+"</br>";
               break;
       }
   case "Facebook":{
                     var  facebook="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHaSURBVDhPrZQ7SwNBEMc3IVrZWQQEG/0IvvD2Yoix0UJFDMntGdDGQgsfoFZypLMVxeR2j8QQH5GEFIJoa6kSELEREVJaaRGQ+Mite1EPY25PRRfmit2d3/1nZmccgLN6Q8Rdcjn6nLo+AxyODuMaBeCefVPU6UzVtbSeH0d8Lzx/c98bWG8QQ2oSyqQkyoTyDCL1mlm/LdCHNtog0p7sQF/PIMIpr1dx1YBFRBgMP/8GZt5Faq4KaITJYJbKPGMazRxd0nJZpx9rcGqrJhVQIssmVER4k6csvJQ1QbZAREpCSGsCXaEdN5TVRx4wuntiAudWDrlFMvwFSdWAIGGZB/ONxynJnJnA8GKW+icS1EiDlQ+UcRGIEj7lAS+ubmvCNTaGpre5SoFdVa2ARnF6wtYKDZYtcHQ2TdMHF6bKeZZDeSFjm0fA4r6zU/m5KMG5PVtYRaFHxqv/ChTCsfb/AkIUy4NAQKlnYd/85B1+E7IOg7GRSrf0SNGBvwKhpBYUhTrN9uuWcdoKOh3Zp4lcvmIDk0nrB43wg394rbF6QCiKS0Ta/m+nDUvXg0eKdnLnooBiynfD9e2nWIcSLviHk9XKrMjtwXizgHAcIlK07FlE8uxspCpn76BXe1Ajr0Jujy8AAAAASUVORK5CYII=";
           var image=document.getElementById("canvas");
                        DrawImageOnCanvas(facebook,image);
                        document.getElementById("FacebookLink").setAttribute('href',values);
                           break;
                      }
   case "Twitter":{ 
                    var Twitter="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJESURBVDhPnZRNaxNBGMdn2+LF3ioIgoK3kN1tjW31KEIv7VHFHvwICkJvHjR68AOI4EnEEDE7u7Wg6EF6EBGFaitCQw/GdGfX2GJq07TRNrtJ9vHZpdlO9iW1Dgwss/P85v+8CiRmnXxePHrY6h3D39cFIoy614AIG4LTykJvT3bgyIkvb88LzTh7/zyp5vslqmckatRl1YDYrbCCrOnjXYFoPIwguyso+IhiZM+loS8E9mAKaxwI1oZTNtMB9NxU2T8pS02bMBgRikHKbvpQhD1uKxt9ZkJKM0OxO40g+q0GZq0B8+U6jL0swdSHtb17GPPUU+MYkTCb6KrVBt5frMJSxQIXzLu/uF6H4Jr7uQOTsyv+PUnRH5IhhV3hDe/MVzy7tZ0m3Jj75YNDNDxQUXFHzCmrEVllH/nD8Vc/YMtu+fYOfq3+aUbx4PLsaig0COystVuf1iONg4d2y/HiGLQPAYcx+F837H2hpd+NyKInkqpXgq/c/VwBFNB1Tb3nMsx5SUTFuBcEDmkG6FvxKvNYBXENQFKaMcL/lPA1d198vQKFTSuksrhpw9mZ75FAiS4vkGQ6fwiHQZGvw/J2E3iPXferVgse5KuRXbJr6ySe6Be8bsGCnOBVjmBiJrEkrr0rw1Xcl1Dtqekuk8eNoWIwAtCz134KU/5rMLghUvTtRGZpoHPipN/0YU+/OCjUhSWpeSZ2LopUvy3vN1xdFylzMHkskSkFlEWgxVzhuJhbfiRrRi1KMdbugpjDBPAx2+X8BXC76IY1c/WDAAAAAElFTkSuQmCC";
                       var image=document.getElementById("canvas1");
                        DrawImageOnCanvas(Twitter,image);
                        document.getElementById("TwitterLink").setAttribute('href',values);
                       break;
                      }
   case "Linkedin":{
            var Linkedin="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIESURBVDhPY2TABSo3ijP8ZHJh/P83n4GJyRSs7P//9/8ZGBYz/Pu/mIGf/wJDo+MfnPrhElmreBiLNi5kLN74g7F403/ceMNthsKNHvgNLF5vDDToF36DMCxZzGBfz4JpMMiwoo2/Jep3/s9df+m/RMNOPK5DM7Rg4zpUA8He3AB22ddff/6DwKsvP/9zVmwh2lCGoo21cEMZCzctgHnz999/YAM//fj9n6dyK9EGgsKcoXSDFAMDMDaBXv0JM1CvZ///VRef/dfvPUCCYZAgYCjaMIeBoWhzNHIkOE47+t9lxrH/tlOOgBWZ9B8E8x2A4hzlW/5HLj7zv2Hnzf/BC09jBknRxs8MjCUbTiEb+P7bL7CXH777BjbwwJ03YP6Xn3/+P3z/DcyGgScfIGqQMQO6AC4DYYa8BUYWMrCYcJh8A33mngRrBtEw0LDzBpqBRRvfEePl77/+/hcHplGQWoWWPbgNBKaficQYCApD4drtRBhYsNWEWgYCk81ZBobQVWzAdHgXZii+WCbgwn8M+euCILmlcLMXxQYWbnjAUP+fCZH9CjasABnKVILAYD6SGHLQwNSBxYo2fmPIXiiMWkDU17MAJTaRWHRBDMvZbIa7XCze2EC4cAXljo3/gIY9YMjejeYybEZnrpdlKFo/j7Fo02dsLgYmtbMM+RuDUMIMag4A0WxcazWix2wAAAAASUVORK5CYII=";
                            var image=document.getElementById("canvas2");
                        DrawImageOnCanvas(Linkedin,image);
                        document.getElementById("LinkedinLink").setAttribute('href',values);
          
                           break;
                      }
   case "Google":{
          var Google="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAPHSURBVDhPhZRfbBRVFMZn1yBK9MHIgwhKi7sz222wwmJbys4sRUtJELUhECAS+RM1+oKRBIuhQQw0KEESxWqUhD8BE5XIg4kkPJDwAEJSCIVIwRQaUQkpqNDuvfNv73yec4ddSwHd5GZ3JzO/Oec733cSxj0+A3Zm3JhILUskkkuTCaMmmUgYClExYSQPKlXa8dCxvkP3eva269frUxN82+oKHWug5GTgOxakHR+XTkjXPNtSnm12y3x60X9Ch5qsZoL1oTkLVchoQBk2/NsnKGbW6Hvo+mfRnNToO8CD+VSB3nyDYTJvQjw7EWLqeDqP3zrjIRsnQRKsDA8YTPcLO72nO5cbVYEKapMg/WiugZyRJtiTcFe8jGDbB/A/XAe/sx3+1vfhrWyLocMqZ0kYWpxhrasACfZ5uTLZUIWgawuigatQPd0of9TPp+EuaYVsqIac/hS9OFUBc+ueYw4ONdfUGkWapsibf2s9uLLX5mtG+P0+iNqxCD7tjP8f+BqS2mc5ZOtUyOeejn/fqpYLch2rk4BmO09TD4A089e/HQP2fAEx6QG4LzQiCnyUTp2gF06klqtROvwj/E3tEHWPaYkYigLJZZvHjWI+3VuxRn0V3EWzEYkioqFBeK/Og7d6pX5BsH2zHpRsqYO6eAHBl9sgWM8CDZGAzOBOjTusQQ/5a9+E6j2rdWRwsKsLsimFkCqLfv8V8FxEf16DutyP4OMNkNOeqLRusKcqU+Pf1JLIPgp33nSocz1x+9/t1np57yyH/1EHoiu/xW1vWA1v2Ys0pHjyXJwhbLNYqZJbaHkG4b6voPp6CXgG0fWBGHrwAMSUcfqoX84h+GQTiumHaepV2pvMIFZAGpr7OU5aXLJC6dAPGuBvfg9y1mS48wso/XREX/NWtEHkaHAdq+Auf0l3U+6uxC7JW5eMISfVQvTIpze5bTaiMETU3wdBuojsIxDVo+GveSMGvrVYp4ftNTI1HEWSZb+B9UaSSj0NmyqcWQvVfazSor/mdfgb30VE4quek5DP19FwyNQjMk6R1dmWjrVEp0U65kJFPgpIXPZdsHM7aXge6tIFbZHwm51w5zbEKbnLwtB5zptH/8jlxvwbP1pZmJWFx1NmG7C/WqdoHTnbGjbcEeWEUGWenbkmmqxpt20cLMjeLxxzr15dvAPJdzqz3OKwiJUr1G3SvQwr2lbrXfciFhj3URQ7AjtzkzcPx2nkguVpsl58yMNHbtjp+v/d3ASZHNrmRs6ma5t/lU1L/wOq7CIt4W+p6lcuN054cCTsHzNGaDMWALmYAAAAAElFTkSuQmCC";
           var image=document.getElementById("canvas3");
                        DrawImageOnCanvas(Google,image);
                        document.getElementById("GoogleLink").setAttribute('href',values);
                
                        break;
                      }
                      
              case "FacebookUser":
                  {
                     var  facebook="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHaSURBVDhPrZQ7SwNBEMc3IVrZWQQEG/0IvvD2Yoix0UJFDMntGdDGQgsfoFZypLMVxeR2j8QQH5GEFIJoa6kSELEREVJaaRGQ+Mite1EPY25PRRfmit2d3/1nZmccgLN6Q8Rdcjn6nLo+AxyODuMaBeCefVPU6UzVtbSeH0d8Lzx/c98bWG8QQ2oSyqQkyoTyDCL1mlm/LdCHNtog0p7sQF/PIMIpr1dx1YBFRBgMP/8GZt5Faq4KaITJYJbKPGMazRxd0nJZpx9rcGqrJhVQIssmVER4k6csvJQ1QbZAREpCSGsCXaEdN5TVRx4wuntiAudWDrlFMvwFSdWAIGGZB/ONxynJnJnA8GKW+icS1EiDlQ+UcRGIEj7lAS+ubmvCNTaGpre5SoFdVa2ARnF6wtYKDZYtcHQ2TdMHF6bKeZZDeSFjm0fA4r6zU/m5KMG5PVtYRaFHxqv/ChTCsfb/AkIUy4NAQKlnYd/85B1+E7IOg7GRSrf0SNGBvwKhpBYUhTrN9uuWcdoKOh3Zp4lcvmIDk0nrB43wg394rbF6QCiKS0Ta/m+nDUvXg0eKdnLnooBiynfD9e2nWIcSLviHk9XKrMjtwXizgHAcIlK07FlE8uxspCpn76BXe1Ajr0Jujy8AAAAASUVORK5CYII=";
           var image=document.getElementById("Canvas4");
                        DrawImageOnCanvas(facebook,image);
                        document.getElementById("FacebookLink").setAttribute('href',values);
                           break;
                      }
   case "TwitterUser":{ 
                    var Twitter="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJESURBVDhPnZRNaxNBGMdn2+LF3ioIgoK3kN1tjW31KEIv7VHFHvwICkJvHjR68AOI4EnEEDE7u7Wg6EF6EBGFaitCQw/GdGfX2GJq07TRNrtJ9vHZpdlO9iW1Dgwss/P85v+8CiRmnXxePHrY6h3D39cFIoy614AIG4LTykJvT3bgyIkvb88LzTh7/zyp5vslqmckatRl1YDYrbCCrOnjXYFoPIwguyso+IhiZM+loS8E9mAKaxwI1oZTNtMB9NxU2T8pS02bMBgRikHKbvpQhD1uKxt9ZkJKM0OxO40g+q0GZq0B8+U6jL0swdSHtb17GPPUU+MYkTCb6KrVBt5frMJSxQIXzLu/uF6H4Jr7uQOTsyv+PUnRH5IhhV3hDe/MVzy7tZ0m3Jj75YNDNDxQUXFHzCmrEVllH/nD8Vc/YMtu+fYOfq3+aUbx4PLsaig0COystVuf1iONg4d2y/HiGLQPAYcx+F837H2hpd+NyKInkqpXgq/c/VwBFNB1Tb3nMsx5SUTFuBcEDmkG6FvxKvNYBXENQFKaMcL/lPA1d198vQKFTSuksrhpw9mZ75FAiS4vkGQ6fwiHQZGvw/J2E3iPXferVgse5KuRXbJr6ySe6Be8bsGCnOBVjmBiJrEkrr0rw1Xcl1Dtqekuk8eNoWIwAtCz134KU/5rMLghUvTtRGZpoHPipN/0YU+/OCjUhSWpeSZ2LopUvy3vN1xdFylzMHkskSkFlEWgxVzhuJhbfiRrRi1KMdbugpjDBPAx2+X8BXC76IY1c/WDAAAAAElFTkSuQmCC";
                       var image=document.getElementById("Canvas5");
                        DrawImageOnCanvas(Twitter,image);
                        document.getElementById("TwitterLink").setAttribute('href',values);
                       break;
                      }
   case "LinkedinUser":{
            var Linkedin="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIESURBVDhPY2TABSo3ijP8ZHJh/P83n4GJyRSs7P//9/8ZGBYz/Pu/mIGf/wJDo+MfnPrhElmreBiLNi5kLN74g7F403/ceMNthsKNHvgNLF5vDDToF36DMCxZzGBfz4JpMMiwoo2/Jep3/s9df+m/RMNOPK5DM7Rg4zpUA8He3AB22ddff/6DwKsvP/9zVmwh2lCGoo21cEMZCzctgHnz999/YAM//fj9n6dyK9EGgsKcoXSDFAMDMDaBXv0JM1CvZ///VRef/dfvPUCCYZAgYCjaMIeBoWhzNHIkOE47+t9lxrH/tlOOgBWZ9B8E8x2A4hzlW/5HLj7zv2Hnzf/BC09jBknRxs8MjCUbTiEb+P7bL7CXH777BjbwwJ03YP6Xn3/+P3z/DcyGgScfIGqQMQO6AC4DYYa8BUYWMrCYcJh8A33mngRrBtEw0LDzBpqBRRvfEePl77/+/hcHplGQWoWWPbgNBKaficQYCApD4drtRBhYsNWEWgYCk81ZBobQVWzAdHgXZii+WCbgwn8M+euCILmlcLMXxQYWbnjAUP+fCZH9CjasABnKVILAYD6SGHLQwNSBxYo2fmPIXiiMWkDU17MAJTaRWHRBDMvZbIa7XCze2EC4cAXljo3/gIY9YMjejeYybEZnrpdlKFo/j7Fo02dsLgYmtbMM+RuDUMIMag4A0WxcazWix2wAAAAASUVORK5CYII=";
                        
                        var image=document.getElementById("Canvas6");
                        
                        DrawImageOnCanvas(Linkedin,image);
                        alert("called");
                        document.getElementById("LinkedinLink").setAttribute('href',values);
          
                           break;
                      }  
               
       }}
   
   function DrawImageOnCanvas(dataURL,canvas) {
        var context = canvas.getContext('2d');
        var imageObj = new Image();
        imageObj.onload = function() {
          context.drawImage(this, 0, 0);
        };
     imageObj.src = dataURL;
      }
   
    
     
       function PreviewImageFile() {
 var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    var LogoPreview=document.getElementById("CanvasLogo");
        DrawImageOnCanvas(reader.result,LogoPreview);
       
  }

  if (file) {
   reader.readAsDataURL(file);

     }
}
      
             
           
             function ShowTabContentsLogo(){
           logo.className="active";
           home.className="tab-content hide";
           social.className="tab-content hide";
           style.className="tab-content hide";
        
        
            
    }
        function ShowTabContentsHome(){
          
           home.className="active";
           logo.className="tab-content hide";
           social.className="tab-content hide";
           style.className="tab-content hide";
        
          
    }
        function ShowTabContentsSocial(){
           social.className="active";
           logo.className="tab-content hide";
           home.className="tab-content hide";
           style.className="tab-content hide";
        
    }
        function ShowTabContentsStyle(){
          
           style.className="active";
           logo.className="tab-content hide";
           social.className="tab-content hide";
           home.className="tab-content hide";
        
            }
            function CodeToShow(){
                var code_to_show=document.getElementById("right").innerHTML;
                code_to_show=replaceAll(code_to_show,"<","&lt");
                
                code_to_show=replaceAll(code_to_show,">","&gt");
        document.getElementById("CodeFetch").innerHTML=code_to_show;   
        
            }
        function escapeRegExp(str) {
                return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
            }

            function replaceAll(str, find, replace) {
                return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
            }
     
     
     function ClearFormFeilds(){
         document.InputForm.reset();
     }
     
     function SocialLinkFacebookOnKeyPress(event){
           var val=document.getElementById("Facebook").value;
          var id=document.getElementById("Facebook").name;
          SignatureValuesAppend(event,val,id);
      }
      function SocialLinkFacebookOnChange(input){
          var id=document.getElementById("Facebook").name;
          ShowValuesOnKeyPress(input.value,id);
      }
     
     function SocialLinkTwitterOnKeyPress(event){
           var val=document.getElementById("Twitter").value;
          var id=document.getElementById("Twitter").name;
          SignatureValuesAppend(event,val,id);
      }
      function SocialLinkTwitterOnChange(input){
          var id=document.getElementById("Twitter").name;
          ShowValuesOnKeyPress(input.value,id);
      }
     
     function SocialLinkLinkedinOnKeyPress(event){
           var val=document.getElementById("Linkedin").value;
          var id=document.getElementById("Linkedin").name;
          SignatureValuesAppend(event,val,id);
      }
      function SocialLinkLinkedinOnChange(input){
          var id=document.getElementById("Linkedin").name;
          ShowValuesOnKeyPress(input.value,id);
      }
     
     function SocialLinkGoogleOnKeyPress(event){
           var val=document.getElementById("Google").value;
          var id=document.getElementById("Google").name;
          SignatureValuesAppend(event,val,id);
      }
      function SocialLinkGoogleOnChange(input){
          var id=document.getElementById("Google").name;
          ShowValuesOnKeyPress(input.value,id);
      }
     
     function ChangeTextColor(color){
         document.getElementById("Fname").style.color=color;
     }
     function ChangeBackgroundColor(color){
         document.getElementById("Fname").style.background=color;
     }
     function ChangeFontSize(size){
         document.getElementById("InputTextPara").style.fontSize=size+"px";
     }
     
  
       
      function SocialLinkUserFacebookOnChange(input){
           
          var id=document.getElementById("FacebookUser").name;
          ShowValuesOnKeyPress(input.value,id);
      }
     
     
      function SocialLinkUserTwitterOnChange(input){
          var id=document.getElementById("TwitterUser").name;
          ShowValuesOnKeyPress(input.value,id);
      }
     
     
      function SocialLinkUserLinkedinOnChange(input){
     
          var id=document.getElementById("LinkedinUser").name;
        
          ShowValuesOnKeyPress(input.value,id);
          
      }
        