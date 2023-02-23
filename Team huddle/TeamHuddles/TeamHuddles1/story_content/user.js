function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bWCVEq2g3a":
        Script1();
        break;
  }
}

function Script1()
{
  var iframe = document.getElementsByTagName('iframe')[0];
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
var img = innerDoc.getElementsByTagName('img')[0];
img.style.maxWidth = '100%';
}

