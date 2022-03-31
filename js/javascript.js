const allAnchors = document.querySelectorAll('a');

document.querySelectorAll('a').mousedown(function(ev) {
    ev.preventDefault();
});

// The above code from derived from the following stack overflow answer:
//  https://stackoverflow.com/questions/44773707/anchor-tag-not-working-inside-list-item