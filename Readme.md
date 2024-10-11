# How to Run the JavaScript Code in a Browser Using a Snippet or Console

This README provides instructions on how to run the provided JavaScript code directly in the browser using either a browser snippet or the browser's developer console.

## Prerequisites

- A modern web browser such as Chrome, Firefox, or Edge.

## Instructions

### 1. Running the Code in the Browser Developer Console

#### Step 1: Open Developer Tools

1. Open your browser.
2. Navigate to the web page where you want the script to run.
3. Open Developer Tools:
    - **Chrome**: Right-click anywhere on the page and select "Inspect", or press `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac).
    - **Firefox**: Right-click and select "Inspect Element", or press `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac).
    - **Edge**: Right-click and select "Inspect", or press `Ctrl + Shift + I`.

#### Step 2: Open the Console Tab

1. In Developer Tools, navigate to the **Console** tab.
2. The Console is where you can execute JavaScript code directly.

#### Step 3: Paste and Run the Script

1. Copy the provided JavaScript code from the `runScript()` function in this repository.
2. Paste it directly into the Console window in Developer Tools.
3. Press `Enter` to run the script.

The script will execute in the context of the current web page. If there are any console logs (`console.log()`), they will be displayed in the Console.

### 2. Running the Code Using a Browser Snippet

#### Step 1: Open Developer Tools

1. Open your browser.
2. Navigate to the web page where you want the script to run.
3. Open Developer Tools:
    - **Chrome**: Right-click anywhere on the page and select "Inspect", or press `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac).
    - **Firefox**: Right-click and select "Inspect Element", or press `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I`.
    - **Edge**: Right-click and select "Inspect", or press `Ctrl + Shift + I`.

#### Step 2: Open the Sources Tab

1. In Developer Tools, navigate to the **Sources** tab.
2. In **Sources**, open the left panel (if it's collapsed) and find the `Snippets` section.

#### Step 3: Create and Run a New Snippet

1. Right-click inside the **Snippets** section and select "New".
2. Name your snippet (e.g., `runScriptSnippet`).
3. Paste the JavaScript code into the snippet editor that appears on the right side of the Developer Tools.
4. Click the **Run** button or press `Ctrl + Enter` to execute the snippet.

The script will now run on the page, and any output or console logs will appear in the Console tab.

### 3. Notes on Running the Script

- **Dynamic Content**: Ensure that the page has fully loaded before executing the script. If necessary, place the code inside a `DOMContentLoaded` event listener to ensure the script runs after the document is ready.
- **Error Handling**: If the script manipulates elements that do not exist on the page, check that the correct selectors are being used or adjust the script accordingly.

### 4. Example Code Snippet

Below is a small sample of the provided code that you can run in the browser's console:

```javascript
function runScript() {
    console.log("Script is running");
    let currentPath = window.location.pathname;
    console.log('Current Path:', currentPath);

    const sideBarHeader = document.querySelector(".sidebar-header");
    if (sideBarHeader) {
        sideBarHeader.innerHTML = `Get a 100% Free Consult for Up to $3,822/Month
        in Disability Benefits`;
    }
    
    // More code goes here...
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runScript);
} else {
    runScript();
}
