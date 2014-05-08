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
savedContent = BL.getStaticContent();
$.each(savedContent, function(identifier, contentArray) {
  /*
  Add the most recent static content update by accessing the first
  element in the array for each piece of content.
  */
  if (typeof contentArray  != 'undefined') {
    $(img).attr('src', contentArray[0])
  }
});
