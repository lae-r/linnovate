
$(document).ready(function() { jQuery.easing.def = 'easeOutBounce'; });

var SlideW_flag = '';
function SlideW(elId, width) {
	var el = document.getElementById(elId);
	//this.blur();
	
	if (el.style.left != '0px') {
		jQuery(el).animate({left:0}, {duration: 800, easing: 'easeOutQuart'});
		if (SlideW_flag != 'init') {
			SlideW_flag = 'init';
			try { 
				var el=document.getElementById('pc_iframe');
				if(el)
					el.src = 'showcart_popup.asp?' + escape(new Date()); } catch (e) { console.log('error:'+e);
			}
		}
	}
	else jQuery(el).animate({left:-width}, {duration: 800});
}

//Show the cart, waits and closes cart with easing
function SlideAndHide(elId, width)
{
    
    $(document).ready(function() {
    
    var el = document.getElementById(elId);
    
    
    if (el.style.left != '0px') //cart is closed
    {
     
     jQuery(el).animate({left:0}, {duration: 800, easing: 'easeOutQuart'});
     jQuery(el).delay(2500).animate({left:-width}, {duration: 800});
     
     if (SlideW_flag != 'init') {
			SlideW_flag = 'init';
			try { document.getElementById('pc_iframe').src = 'showcart_popup.asp?' + escape(new Date()); } catch (e) { }
		}
    
    
    }
    else {} //cart is open
    });
   
}





function addToCart(inForm,inFormSpec,specNo)
{
var x, optSpec=0,count,count1,count2,count3
var t;
if(document.getElementById("countaddon") != null)
{
t=parseFloat(document.getElementById("countaddon").value)
if(t>0)
	{
	inForm.extraprodIdList.value="";
    inForm.extraprodQuantityList.value="";
    inForm.extraprodPriceList.value="";
    inForm.extraprodSpecList.value="";
    inForm.extrapprodNumList.value="";
    inForm.extrapprodNameList.value="";
    inForm.extrapprodImageList.value="";
    inForm.extrapprodModelList.value="";
    inForm.extrapprodNumInStockList.value="";
    inForm.extrapprodCatList.value="";
    inForm.extradeliveryPriceList.value="";
	for(i=1; i<=t;i++)
		{		
		if(document.getElementById("productSpecExtraid_"+i).checked == true)
			{
			addfrm="addToCartFrm"+i;			
			inForm.extraprodIdList.value = inForm.extraprodIdList.value+"~"+document.forms[addfrm].productID.value;			
			inForm.extraprodQuantityList.value = inForm.extraprodQuantityList.value+"~"+document.forms[addfrm].productSelectQuant.value;
			inForm.extraprodPriceList.value = inForm.extraprodPriceList.value+"~"+document.forms[addfrm].price.value;
			inForm.extraprodSpecList.value = inForm.extraprodSpecList.value+"~"+document.forms[addfrm].productSpec.value;
			inForm.extrapprodNumList.value = inForm.extrapprodNumList.value+"~"+document.forms[addfrm].productNum.value;
			inForm.extrapprodNameList.value = inForm.extrapprodNameList.value+"~"+document.forms[addfrm].product.value;
			inForm.extradeliveryPriceList.value = inForm.extradeliveryPriceList.value+"~"+document.forms[addfrm].deliveryPrice.value;
			inForm.extrapprodImageList.value = inForm.extrapprodImageList.value+"~"+document.forms[addfrm].image.value;
			inForm.extrapprodModelList.value = inForm.extrapprodModelList.value+"~"+document.forms[addfrm].model.value;
			inForm.extrapprodNumInStockList.value = inForm.extrapprodNumInStockList.value+"~"+document.forms[addfrm].NumInStock.value;
			inForm.extrapprodCatList.value = inForm.extrapprodCatList.value+"~"+document.forms[addfrm].category.value;
			}
		}
	}
}	
	if(specNo == 0)	
		{				
		inForm.productSelectQuant.value = inFormSpec.extrafieldxQuant.value		
		inForm.submit()
		}
	else
	{
	inForm.productSpec.value = ""
	if(inFormSpec.extrafield1)
		{
		if(inForm.productSpec.value != "")
			{
			inForm.productSpec.value = inForm.productSpec.value + ", "
			}
		inForm.productSpec.value = inForm.productSpec.value + " "+inFormSpec.extrafieldname1.value+": "+inFormSpec.extrafield1.value
		}	
	inForm.productSelectQuant.value = inFormSpec.extrafieldxQuant.value
	inForm.submit()
	}		
} 
