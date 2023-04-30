function newImage(src, styleLeft, styleBottom) {
    let tag = document.createElement('img');
    tag.src = `assets/${src}`;
    tag.style.position = 'fixed';
    tag.style.left = styleLeft;
    tag.style.bottom = styleBottom;
    document.body.append(tag);
    return tag;
}

function newItem(src, styleLeft, styleBottom) {
    let item = newImage(src, styleLeft, styleBottom);
    item.addEventListener('dblclick', function() {
        item.remove();
    });
}

newImage('green-character.gif', '100px', '100px');
newImage('pine-tree.png', '450px', '200px');
newImage('tree.png', '200px', '300px');
newImage('pillar.png', '350px', '100px');
newImage('crate.png', '150px', '200px');
newImage('well.png', '500px', '425px');

newItem('sword.png', '500px', '405px');
newItem('shield.png', '165px', '185px');
newItem('staff.png', '600px', '100px');