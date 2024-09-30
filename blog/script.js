// JavaScript to toggle the correct sidebar on hover
document.addEventListener('DOMContentLoaded', function () {
    const blogLinks = document.querySelectorAll('.blog-link'); // Target all blog links
    const sidebars = document.querySelectorAll('.sidebar'); // Target all sidebars
    const body = document.body;

    blogLinks.forEach(function (link) {
        link.addEventListener('mouseenter', function (event) {
            const blogId = this.getAttribute('data-blog'); // Get the blog number
            const targetSidebar = document.getElementById(`sidebar-${blogId}`);

            // Close any open sidebars before opening the new one
            sidebars.forEach(function (sidebar) {
                if (sidebar !== targetSidebar && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    setTimeout(function () {
                        sidebar.style.display = 'none'; // Hide after transition
                    }, 700); // Timeout equal to the CSS transition
                }
            });

            // Open the target sidebar
            if (!targetSidebar.classList.contains('active')) {
                targetSidebar.style.display = 'block'; // Show before adding 'active'
                setTimeout(function () {
                    targetSidebar.classList.add('active');
                }, 10); // Small delay to allow display change before transition
                body.classList.add('sidebar-active');
            }
        });
    });
});
