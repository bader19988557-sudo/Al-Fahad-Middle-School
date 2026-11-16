function getInfo() {

    const info = {
        browser: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenWidth: screen.width,
        screenHeight: screen.height,
        colorDepth: screen.colorDepth,
        deviceMemory: navigator.deviceMemory || "غير متاح",
        cores: navigator.hardwareConcurrency || "غير متاح",
        cookies: navigator.cookieEnabled,
        online: navigator.onLine,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        date: new Date().toLocaleString()
    };

    let html = "<h3>معلومات جهازك</h3>";

    for (let key in info) {
        html += `<p><b>${key}:</b> ${info[key]}</p>`;
    }

    document.getElementById("result").innerHTML = html;
}