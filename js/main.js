//listen for form submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);

//save the bookmark
function saveBookmark (e){
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    var bookmark = {
        name : siteName,
        url : siteUrl
    }
    if(localStorage.getItem('bookmarks')===null){
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    } else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
        document.getElementById('myForm').reset();
        fetchBookmarks();
        // prevent form from submitting
        e.preventDefault();
}

function deleteBookmark(url){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(var i=0; i<bookmarks.length;i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i,1);
        }
    }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetchBookmarks();
}

function fetchBookmarks(){
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        var bookmarksResults = document.getElementById('bookmarksResults');
        bookmarksResults.innerHTML = '';
        for(var i=0; i<bookmarks.length;i++){
            var name = bookmarks[i].name;
            var url = bookmarks[i].url;
            bookmarksResults.innerHTML += '<div class="well">'+
                                    '<h3>'+name +' - <span style=font-size:20px;>'+ url +'</span>'+
                                    //'<a class="btn btn-default" target="_blank" href=" '+url +' "> Visit </a>'+
                                    ' <a style=float:right; margin-right:20px; onclick="deleteBookmark(\''+url+'\')" class="btn btn-success"> Done </a></h3></div>';
        }
}

function validateForm(siteName, siteUrl){
      if(!siteName || !siteUrl){
        alert('Please fill in the form');
        return false;
      }
  }
