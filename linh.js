
status="Winmodern"
var a=new Array(),n=""
a[1]='V';a[2]='â';a[3]='n';a[4]='g';a[5]='!';a[6]=' ';a[7]='E';a[8]='m';a[9]=' ';a[10]='Y';a[11]='ê';a[12]='u';a[13]=' ';a[14]='A';a[15]='n';a[16]='h';a[17]='^^';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==17)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
alert("Bye em nhé")
}
function on()
{
alert("Chào Dê lông ! Anh yêu Em nhiều lắm :)")
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("<h2><img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/6.gif' alt='>:D<'/>Anh cũng yêu em nhiều lắm <img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/6.gif' alt='>:D<'/></h2><br/>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<img src='yoyo.gif' alt='Shark Speed'/>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<img src='' border='0'>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}