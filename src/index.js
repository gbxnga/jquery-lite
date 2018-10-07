let content = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
const app = $("#app");
app.html(content);
app.addClass("my-app").attr("class-id-data", "2344");

let j = app.attr("class-id-data");
console.log(j);
app.click(function() {
  $(this).hide();
  setTimeout(_ => {
    $(this).show();
  }, 2000);
});

$("a")
  .hide()
  .show();
