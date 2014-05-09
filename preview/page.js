/*
Get the current location and user information by calling
BL.getContext.The returned object contains the lightGroupId,
lightGroupName, and userId properties.
*/
context = BL.getContext();
 /*
Retrieve static content with Bl.getStaticContent.
Static content is stored as an object with properties
equal to the identifiers of each piece of content. Each property
contains an array with the content corresponding
to each update of the app.
*/
alert(0)
savedContent = BL.getStaticContent(APP.appId)//(APP.appId);
$('.content-image').append('<img src="' + savedContent.iphone_image_url[0] + '">')
console.log($('.content-image img').attr('src'))

