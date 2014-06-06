lightbox
========

Javascript to enable lightbox effect in Plone


Installation
------------

1. Place the lightbox.js file into an existing Plone product or create a file
in the ZMI: /portal_skins/custom folder that contains the code from
lightbox.js

1. In ZMI: /portal_javascript create a new entry for the lightbox.js file


Usage
-----

Images in Plone are normally rendered as such:

    <a href="http://plone-site.tld/my-image/image_view_fullscreen"
       title="My image" class="internal-link"
       rel="lightbox">
        <img src="http://plone-site.tld/my-image/"
             class="image-inline"
             alt="My image with a bad alt tag"
             height="191" width="267" />
    </a>

With the rel="lightbox" attribute on the A tag, the javascript will make
the lightbox effect happen.
