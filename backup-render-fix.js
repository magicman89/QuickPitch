// Fix for rendering script with better text formatting
window.renderScript = function() {
    console.log('renderScript called, currentCallType:', currentCallType);
    const container = document.getElementById('scriptContent');
    
    if (!container) {
        console.error('scriptContent element not found!');
        return;
    }
    
    if (!currentCallType || !callScripts[currentCallType]) {
        console.log('No call type selected, showing empty state');
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <div>Select a call type above to load your professional script</div>
            </div>`;
        return;
    }
    
    const script = callScripts[currentCallType];
    const context = getContext();
    const callTypeTitle = currentCallType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    console.log('Rendering script for:', callTypeTitle);
    console.log('Context values:', context);
    
    // Apply context replacements first
    let scriptText = applyContext(script.script, context);
    
    // Replace placeholders that might still exist
    scriptText = scriptText.replace(/\(customer issue\)/gi, '(their request)');
    scriptText = scriptText.replace(/\(reason for call\)/gi, '(their reason for calling)');
    
    // Format the text for display
    // Replace **text** with bold
    scriptText = scriptText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    
    // Convert line breaks to HTML breaks and format appropriately
    scriptText = scriptText.split('\n').map(line => {
        // Check if line is a header (starts with <strong> and ends with :</strong>)
        if (line.startsWith('<strong>') && line.includes(':</strong>')) {
            const headerText = line.replace('<strong>', '').replace(':</strong>', '');
            return `<div style="color: #c41e3a; font-weight: 700; margin-top: 20px; margin-bottom: 10px; font-size: 1.1em;">${headerText}:</div>`;
        }
        
        // Check if line contains dialogue (has quotes)
        if (line.includes('"')) {
            // Only apply blue italic to the quoted parts, not the whole line
            line = line.replace(/"([^"]+)"/g, '<span style="color: #1976d2; font-style: italic;">"$1"</span>');
        }
        
        // Check for action items in brackets or parentheses
        if (line.includes('[') || line.includes('(')) {
            line = line.replace(/\[([^\]]+)\]/g, '<em style="color: #666;">[$1]</em>');
            line = line.replace(/\(([^)]+)\)/g, '<em style="color: #666;">($1)</em>');
        }
        
        return line;
    }).join('<br>');
    
    container.innerHTML = `
        <div class="script-content">
            <h3>📞 YOUR SCRIPT - ${callTypeTitle}</h3>
            <div class="script-text">${scriptText}</div>
        </div>`;
    
    console.log('Script rendered successfully');
}
