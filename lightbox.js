// register rel="lightbox" to trigger an overlay with the linked to image
jq(document).ready(function () {
    jq("a[rel~='lightbox']").prepOverlay({
        subtype: 'image',
    });
});