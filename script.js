// TDS IITM Generated Application - Main JavaScript
console.log('TDS IITM Application initialized');

document.addEventListener('DOMContentLoaded', function() {
    initializeApplication();
});

function initializeApplication() {
    const appContent = document.getElementById('app-content');
    if (appContent) {
        // Show loading state
        appContent.innerHTML = `
            <div class="text-center py-4">
                <div class="spinner-border text-primary mb-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p>Initializing application...</p>
            </div>
        `;
        
        // Simulate loading completion
        setTimeout(() => {
            appContent.innerHTML = `
                <h4>🚀 Application Ready</h4>
                <p>Your TDS IITM generated application is successfully running!</p>
                <div class="alert alert-success">
                    <strong>✅ Success!</strong> All systems are operational.
                </div>
                <div class="mt-3">
                    <button class="btn btn-primary" onclick="showDemo()">Click Me!</button>
                </div>
            `;
        }, 1500);
    }
}

function showDemo() {
    const appContent = document.getElementById('app-content');
    const demoHTML = appContent.innerHTML;
    
    appContent.innerHTML = `
        <h4>🎉 Demo Functionality</h4>
        <p>This is a demo interactive feature!</p>
        <div class="alert alert-warning">
            <strong>Note:</strong> This is a basic demo. The actual application functionality would be implemented based on the project requirements.
        </div>
        <div class="mt-3">
            <button class="btn btn-secondary" onclick="restoreContent()">Go Back</button>
        </div>
    `;
    
    // Store original content
    appContent.setAttribute('data-original', demoHTML);
}

function restoreContent() {
    const appContent = document.getElementById('app-content');
    const original = appContent.getAttribute('data-original');
    if (original) {
        appContent.innerHTML = original;
    }
}

// Utility functions
window.App = {
    initialize: initializeApplication,
    showDemo: showDemo,
    restoreContent: restoreContent
};