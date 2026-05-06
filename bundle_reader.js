// RED TEST UPDATE - This simulates a remote update from GitHub
async function injectReader() {
    if (window._u_reader_injected) return;
    window._u_reader_injected = true;

    document.documentElement.style.background = '#1a0000';
    document.body.innerHTML = `
        <div id="u-reader-container" style="background:#1a0000; min-height:100vh; width:100%; display:flex; flex-direction:column; align-items:center; position:relative; font-family:sans-serif; color:#ff4d4d;">
            
            <div style="position:sticky; top:0; width:100%; background:#330000; padding:15px; display:flex; justify-content:center; gap:20px; border-bottom:2px solid #ff4d4d; z-index:99999;">
                <span style="font-weight:bold; font-size:18px;">🔴 REMOTE UPDATE SUCCESSFUL! 🔴</span>
                <button onclick="location.reload()" style="background:#ff4d4d; color:#000; border:none; padding:8px 20px; border-radius:5px; cursor:pointer; font-weight:bold;">EXIT TEST</button>
            </div>

            <div style="padding:50px; text-align:center;">
                <h1 style="font-size:30px;">تـم التـحديث بنجـاح عـن بعـد!</h1>
                <p style="font-size:18px; color:#ff9999;">هذه النسخة الحمراء تم سحبها من GitHub مباشرة دون لمس ملفات الإضافة المحلية.</p>
            </div>
        </div>
    `;
}

injectReader();
