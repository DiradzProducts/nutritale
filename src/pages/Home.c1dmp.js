import { location } from '@wix/site-location';

$w.onReady(function () {
    // Get all children of #box35
    const children = $w('#box35').children;
    // Loop through children and attach click handlers to those with a link property
    children.forEach(child => {
        if (child.link) {
            child.onClick(() => {
                location.to(child.link);
            });
        }
    });
});